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

5. AWS Construct Class Param
*** everything inherits from Class Construct***
`scope`: the first argument is always the scope in which this construct is created. In almost all cases,
you’ll be defining constructs within the scope of current construct, which means you’ll usually just want
to pass this for the first argument. Make a habit out of it.

`id`: the second argument is the local identity of the construct. It’s an ID that has to be unique amongst
construct within the same scope. The CDK uses this identity to calculate the CloudFormation Logical ID for
each resource defined within this scope. To read more about IDs in the CDK, see the CDK user manual.

`props`: the last (sometimes optional) argument is always a set of initialization properties. Those are
specific to each construct. For example, the lambda.Function construct accepts properties like runtime,
code and handler. You can explore the various options using your IDE’s auto-complete or in the online
documentation.

6. Lambda Proxy Integration
Lambda proxy integration is a lightweight, flexible API Gateway API integration type that allows you to
integrate an API method – or an entire API – with a Lambda function. The Lambda function can be written
in any language that Lambda supports. Because it's a proxy integration, you can change the Lambda function
implementation at any time without needing to redeploy your API.

7. AWS Stacks
A stack is a collection of AWS resources that you can manage as a single unit. In other words, you can
create, update, or delete a collection of resources by creating, updating, or deleting stacks. All the
resources in a stack are defined by the stack's AWS CloudFormation template. A stack, for instance, can
 include all the resources required to run a web application, such as a web server, a database, and
 networking rules. If you no longer require that web application, you can simply delete the stack, and
 all of its related resources are deleted.

 8. AWS Stack Outputs
 To share information between stacks, export a stack's output values. Other stacks that are in the same
 AWS account and region can import the exported values. For example, you might have a single networking
 stack that exports the IDs of a subnet and security group for public web servers. Stacks with a public
 web server can easily import those networking resources. You don't need to hard code resource IDs in
 the stack's template or pass IDs as input parameters.
 To export a stack's output value, use the Export field in the Output section of the stack's template. To
 import those values, use the Fn::ImportValue function in the template for the other stacks.

