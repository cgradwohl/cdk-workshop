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

    // define root /
    // const api = new apigateway.LambdaRestApi(
    //   this, 
    //   'restaurants-api', 
    //   {
    //     handler: getIndexHandler,
    //     proxy: false,
    //   }
    // );

    // define API Gateway and Model
    const api = new apigateway.RestApi(
      this,
      "restaurants-api", 
      {
        restApiName: "Restaurant-API",
      }
    );

    const restaurants = api.root.addResource('restaurants');
    const search = restaurants.addResource('search');

    // define / endpoint
    const getIndexHandler = new lambda.Function(this,
      'getIndex', 
      {
        runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
        code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
        handler: 'index.get'                // file is "hello", function is "handler"
      }
    );
    
    const getIndexIntegration = new apigateway.LambdaIntegration(getIndexHandler);
    api.root.addMethod('GET', getIndexIntegration);


    // define /restaurants endpoint
    const getRestaurantsHandler = new lambda.Function(this,
      'restaurantsHandler', 
      {
        runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
        code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
        handler: 'restaurants.get'                // file is "hello", function is "handler"
      }
    );
    const getRestaurantsIntegration = new apigateway.LambdaIntegration(getRestaurantsHandler);
    restaurants.addMethod('GET', getRestaurantsIntegration);

    // define /restaurants/search endpoint
    const searchRestaurantsHandler = new lambda.Function(
      this,
      'searchRestaurantsHandler', 
      {
        runtime: lambda.Runtime.NODEJS_10_X,    // execution environment
        code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
        handler: 'restaurants.search'                // file is "hello", function is "handler"
      }
    );
    const searchRestaurantsIntegration = new apigateway.LambdaIntegration(searchRestaurantsHandler);
    search.addMethod('GET', searchRestaurantsIntegration);

  }
}
