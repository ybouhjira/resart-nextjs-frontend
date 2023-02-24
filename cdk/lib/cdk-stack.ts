import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as cdk from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as autoscaling from "aws-cdk-lib/aws-autoscaling";
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';
import * as path from 'path'


export class CdkStack extends Stack {
  private vpc: ec2.Vpc;
  private nextJsEcrRepository: ecr.Repository;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.buildVpc()
    this.buildEcrRepository()
    this.buildEcsCluster()
  }

  private buildVpc() {
    this.vpc = new ec2.Vpc(this, "ResartVpc", { natGateways: 0 });
  }

  private buildEcrRepository() {
     this.nextJsEcrRepository = new ecr.Repository(
        this,
        "ResartNextJsRepository",
        {
          repositoryName: "resart-nextjs",
        }
    );

    const image = new DockerImageAsset(this, 'MyBuildImage', {
      directory: path.join(__dirname, '../..'),
      file: 'Dockerfile',
      exclude: ['cdk', 'node_modules']
    });
  }

  private buildEcsCluster() {
    const vpc = this.vpc

    const ecsCluster = new ecs.Cluster(this, "ResartNextJsCluster", {
      vpc,
    });

    const autoScalingGroup = new autoscaling.AutoScalingGroup(this, 'AutoScalingGroup', {
      vpc,
      instanceType: new ec2.InstanceType("t2.micro"),
      machineImage: new ecs.BottleRocketImage(),
      desiredCapacity: 1,
      maxCapacity: undefined,
      associatePublicIpAddress: true,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC }
    })

    ecsCluster.addAsgCapacityProvider(new ecs.AsgCapacityProvider(this, 'AsgCapacityProvider', {autoScalingGroup}));

    const taskDefinition = new ecs.Ec2TaskDefinition(this, "TaskDefinition");
    taskDefinition.addContainer('ResartNextJsDockerContainer', {
      image: ecs.ContainerImage.fromEcrRepository(this.nextJsEcrRepository, 'master'),
      memoryLimitMiB: 1024,
    })

    const service = new ecs.Ec2Service(this, "EcsService", {
      cluster: ecsCluster,
      taskDefinition: taskDefinition,
    });
  }

}
