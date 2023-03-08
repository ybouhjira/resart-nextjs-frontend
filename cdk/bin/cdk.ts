#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ResartEc2RdsStack } from "../lib/resart-ec2-rds-stack";
import { DevS3BucketStack } from "../lib/s3-dev";

const app = new cdk.App();
new ResartEc2RdsStack(app, "resart");
new DevS3BucketStack(app, "dev");
