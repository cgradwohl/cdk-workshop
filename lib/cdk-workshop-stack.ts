import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    // const hello = new lambda.Function(this, 'HelloHandler', {
    //   runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
    //   code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
    //   handler: 'hello.handler'                // file is "hello", function is "handler"
    // });

    // defines an API Gateway REST API resource backed by our "hello" function.
    // new LambdaRestApi(scope: Construct, id: string, props: LambdaRestApiProps)
    // The following code defines a REST API that routes all requests to the specified AWS Lambda function
    // new apigateway.LambdaRestApi(
    //   this, 
    //   'Endpoint', 
    //   {
    //     handler: hello,
    //     proxy: true, // If true, route all requests to the Lambda Function. (optional, default: true)
    //   }
    // );

    // const restaurantsHandler = new lambda.Function(
    //   this,
    //   'restaurantsHandler', 
    //   {
    //     runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
    //     code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
    //     handler: 'restaurants.get'                // file is "hello", function is "handler"
    //   }
    // );

    const getIndex = new lambda.Function(this,
      'getIndex', 
      {
        runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
        code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
        handler: 'index.get'                // file is "hello", function is "handler"
      }
    );

    // define root /
    const api = new apigateway.LambdaRestApi(
      this, 
      'restaurants-api', 
      {
        handler: getIndex,
        proxy: false,
      }
    );

    const geRestaurantsHandler = new lambda.Function(this,
      'restaurantsHandler', 
      {
        runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
        code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
        handler: 'restaurants.get'                // file is "hello", function is "handler"
      }
    );
    const getRestaurantsIntegration = new apigateway.LambdaIntegration(geRestaurantsHandler);
    
    // /restuarants
    const restaurants = api.root.addResource('restaurants');
    
    restaurants.addMethod('GET', getRestaurantsIntegration);

  }
}
