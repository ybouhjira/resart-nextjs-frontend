import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class DevS3BucketStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, "Bucket", {
      bucketName: "resart-product-photos-dev",
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
