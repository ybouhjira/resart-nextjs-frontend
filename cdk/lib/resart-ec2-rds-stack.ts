import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { InstanceClass, InstanceSize, SubnetType } from "aws-cdk-lib/aws-ec2";
import * as fs from "fs";
import * as path from "path";

const SSH_PORT = 22;
const HTTP_PORT = 80;
const keyName = "resart-nextjs-keypair";

export class ResartEc2RdsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "ResartVpc", {
      natGateways: 0,
      subnetConfiguration: [
        {
          cidrMask: 24,
          subnetType: SubnetType.PUBLIC,
          name: "public-subnet",
        },
      ],
    });

    const securityGroup = new ec2.SecurityGroup(this, "SecurityGroup", { vpc });
    [SSH_PORT, HTTP_PORT].forEach((port) => {
      securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(port));
    });

    const instance = new ec2.Instance(this, "Ec2Instance", {
      vpc,
      vpcSubnets: { subnetType: SubnetType.PUBLIC },
      instanceType: ec2.InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: new ec2.GenericLinuxImage({
        "eu-west-3": "ami-05b457b541faec0ca", // Ubuntu Server 22.04
      }),
      securityGroup,
      keyName,
    });

    ec2.UserData.forLinux().addExecuteFileCommand({
      filePath: path.join(__dirname, "../install.sh")
    })
    // instance.addUserData(
    //   fs.readFileSync().toString()
    // );
  }
}
