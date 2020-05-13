#### Commands
`npm run synth` - logs the current CF template to log.yml
`npm run cdk -- bootstrap` - setup initial AWS resources (see below)
`npm run deploy` -- deploy the stack thhrough Cloud Formation (see below)
`npm run diff` -- check a stack diff before deploy (see below)

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

4. cdk diff
Now that we modified our stack’s contents, we can ask the toolkit to show us the difference between
our CDK app and what’s currently deployed. This is a safe way to check what will happen once we run
cdk deploy and is always good practice