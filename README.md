#### Commands
`npm run synth` - logs the current CF template to log.yml
`npm run cdk -- bootstrap` - see below
`npm run deploy` -- see below


#### Notes
1. Output of initial CF template
AWS::SQS::Queue - our queue
AWS::SNS::Topic - our topic
AWS::SNS::Subscription - the subscription between the queue and the topic
AWS::SQS::QueuePolicy - the IAM policy which allows this topic to send messages to the queue


2. cdk bootstrap
The first time you deploy an AWS CDK app into an environment (account/region), you’ll need to install
a “bootstrap stack”. This stack includes resources that are needed for the toolkit’s operation.
For example, the stack includes an S3 bucket that is used to store templates and assets during
the deployment process.

3. cdk deploy
CDK apps are deployed through AWS CloudFormation. Each CDK stack maps 1:1 with CloudFormation stack.
This means that you can use the AWS CloudFormation console to manage your stacks.