import {RemovalPolicy, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds'
import {InstanceSize} from '@aws-cdk/aws-ec2';

// TODO: remove public connection to database
export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "Vpc", {
      natGateways: 0,
    })

    let securityGroup = new ec2.SecurityGroup(this, "SecurityGroup", {
      allowAllOutbound: true,
      vpc,
      allowAllIpv6Outbound: true,
      securityGroupName: 'resart-security-group',
    });

    securityGroup.addIngressRule(
        ec2.Peer.anyIpv4(),
        ec2.Port.tcp(3306),
        "Allow port 3306 from any address",
    )

    new rds.DatabaseInstance(this, "Database", {
      engine: rds.DatabaseInstanceEngine.MYSQL,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, InstanceSize.MICRO),
      credentials: rds.Credentials.fromGeneratedSecret('admin'),
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC
      },
      securityGroups: [
        securityGroup
      ],

      // TODO: change when deploying to prod
      deleteAutomatedBackups: true,
      removalPolicy: RemovalPolicy.DESTROY
    })
  }
}
