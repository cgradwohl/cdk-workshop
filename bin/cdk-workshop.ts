#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';

// main stack
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();

// Instantiate the main stack
new CdkWorkshopStack(app, 'CdkWorkshopStack');
