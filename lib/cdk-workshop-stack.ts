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
    /**
     * LambdaRestApi
     * Defines an API Gateway REST API with AWS Lambda proxy integration.
     * The default Lambda function that handles all requests from this API.
     * This handler will be used as a the default integration for all methods
     * in this API, unless specified otherwise in addMethod.
     */
    // const api = new apigateway.LambdaRestApi(
    //   this, 
    //   'restaurants-api', 
    //   {
    //     handler: getIndexHandler,
    //     proxy: false,
    //   }
    // );

    // define API Gateway and Model
    /**
     * Rest Api
     * Represents a REST API in Amazon API Gateway.
     * Use addResource and addMethod to configure the API model.
     */
    const api = new apigateway.RestApi(
      this,
      "restaurants-api", 
      {
        restApiName: "Restaurant-API",
      }
    );

    const restaurants = api.root.addResource(
      // arg[0] - PathPart
      'restaurants',
      // arg[1] - options: ResourceOptions
      {

      }
    );
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
    const getRestaurantsIntegration = new apigateway.LambdaIntegration(
      getRestaurantsHandler,
      {

      }
    );
    
    /**
     * method: addMethod
     * aws-apigateway.Resource
     */
    restaurants.addMethod(
      // arg[0] - httpMethod: string
      'GET',
      // arg[1] - ?integration: Integration
      getRestaurantsIntegration,
      // arg[3]  - ?options: MethodOptions
      {
        authorizationType: apigateway.AuthorizationType.IAM
      }
    );

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
