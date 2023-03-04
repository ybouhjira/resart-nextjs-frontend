import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import {SubnetType} from "aws-cdk-lib/aws-ec2";
import {readFileSync} from 'fs'
import * as path from 'path'

const githubRepository = 'git@github.com:ybouhjira/resart-nextjs-frontend.git'

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "ResartVpc", {
      natGateways: 0,
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

    const instance = new ec2.Instance(this, "Ec2Instance", {
      vpc,
      vpcSubnets: {subnetType: SubnetType.PUBLIC},
      instanceType: new ec2.InstanceType("t2.micro"),
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      securityGroup,
    });

    const idRSA = readFileSync(path.join(__dirname, '../id_rsa')).toString();
    const idRSAPub = readFileSync(path.join(__dirname, '../id_rsa')).toString();
    instance.addUserData(`
      #!/bin/bash
      sudo yum update -y
      sudo yum install -y nodejs
      sudo npm install -g yarn
      sudo npm install -g typescript
      mkdir ~/.ssh
      echo ${idRSA} >> ~/.ssh/id_rsa
      echo ${idRSAPub} >> ~/.ssh/id_rsa.pub  
      sudo yum install git
      cd ~
      git clone ${githubRepository}
      cd ~/resart-nextjs-frontend
      yarn install
      yarn build 
      yarn start
    `);
  }
}
