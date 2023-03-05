import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import {InstanceClass, InstanceSize, SubnetType} from "aws-cdk-lib/aws-ec2";
import {readFileSync} from 'fs'
import * as path from 'path'

const githubRepository = 'git@github.com:ybouhjira/resart-nextjs-frontend.git'
const keyName = 'resart-nextjs-keypair'

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "ResartVpc", {
      natGateways: 0,
      subnetConfiguration: [
        {
          cidrMask: 24,
          subnetType: SubnetType.PUBLIC,
          name: 'public-subnet'
        }
      ]
    });

    const securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc,
    })

    securityGroup.addIngressRule(
        ec2.Peer.anyIpv4(),
        ec2.Port.tcp(22),
        'allow ssh from any IPv4 address',
    )
    securityGroup.addIngressRule(
        ec2.Peer.anyIpv4(),
        ec2.Port.tcp(80),
        'allow http traffic from any IPv4 address',
    )
    securityGroup.addIngressRule(
        ec2.Peer.anyIpv4(),
        ec2.Port.tcp(3000),
        'allow http traffic from any IPv4 address',
    )
    securityGroup.addIngressRule(
        ec2.Peer.anyIpv4(),
        ec2.Port.tcp(443),
        'allow HTTPS traffic from anywhere'
    );

    const instance = new ec2.Instance(this, "Ec2Instance", {
      vpc,
      vpcSubnets: {subnetType: SubnetType.PUBLIC},
      instanceType: ec2.InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: new ec2.GenericLinuxImage({
        'eu-west-3': 'ami-05b457b541faec0ca' // Ubuntu Server 22.04
      }),
      securityGroup,
      keyName,
    });

    const idRSA = readFileSync(path.join(__dirname, '../id_rsa')).toString();
    const idRSAPub = readFileSync(path.join(__dirname, '../id_rsa')).toString();
    instance.addUserData(`
      #!/bin/bash
      main() {
        sudo apt-get update -y
        sudo apt-get install -y npm git
        sudo npm install -g yarn n typescript
        sudo n 16
        hash -r
        
        echo "${idRSA}" >> ~/.ssh/id_rsa
        echo "${idRSAPub}" >> ~/.ssh/id_rsa.pub  
        chmod 700 ~/.ssh/id_rsa*
        ssh-keyscan github.com  >> ~/.ssh/known_hosts
        
        cd ~
        git clone ${githubRepository}
        cd ~/resart-nextjs-frontend
        yarn install
        rm cdk -rf
        yarn build 
        yarn start
      }
      main | logger
    `);
  }
}
