"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigateway = require("@aws-cdk/aws-apigateway");
class CdkWorkshopStack extends cdk.Stack {
    constructor(scope, id, props) {
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
        const api = new apigateway.RestApi(this, "restaurants-api", {
            restApiName: "Restaurant-API",
        });
        const restaurants = api.root.addResource('restaurants');
        const search = restaurants.addResource('search');
        // define / endpoint
        const getIndexHandler = new lambda.Function(this, 'getIndex', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'index.get' // file is "hello", function is "handler"
        });
        const getIndexIntegration = new apigateway.LambdaIntegration(getIndexHandler);
        api.root.addMethod('GET', getIndexIntegration);
        // define /restaurants endpoint
        const getRestaurantsHandler = new lambda.Function(this, 'restaurantsHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'restaurants.get' // file is "hello", function is "handler"
        });
        const getRestaurantsIntegration = new apigateway.LambdaIntegration(getRestaurantsHandler);
        restaurants.addMethod('GET', getRestaurantsIntegration);
        // define /restaurants/search endpoint
        const searchRestaurantsHandler = new lambda.Function(this, 'searchRestaurantsHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'restaurants.search' // file is "hello", function is "handler"
        });
        const searchRestaurantsIntegration = new apigateway.LambdaIntegration(searchRestaurantsHandler);
        search.addMethod('GET', searchRestaurantsIntegration);
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxzREFBc0Q7QUFFdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsaUNBQWlDO1FBQ2pDLDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsbUZBQW1GO1FBQ25GLHNGQUFzRjtRQUN0RixNQUFNO1FBRU4sMkVBQTJFO1FBQzNFLDZFQUE2RTtRQUM3RSxzR0FBc0c7UUFDdEcsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLHNCQUFzQjtRQUN0QixvR0FBb0c7UUFDcEcsTUFBTTtRQUNOLEtBQUs7UUFFTCxrREFBa0Q7UUFDbEQsVUFBVTtRQUNWLDJCQUEyQjtRQUMzQixNQUFNO1FBQ04sdUVBQXVFO1FBQ3ZFLHFGQUFxRjtRQUNyRiwwRkFBMEY7UUFDMUYsTUFBTTtRQUNOLEtBQUs7UUFFTCxnQkFBZ0I7UUFDaEI7Ozs7OztXQU1HO1FBQ0gsNENBQTRDO1FBQzVDLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLGdDQUFnQztRQUNoQyxvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLEtBQUs7UUFFTCwrQkFBK0I7UUFDL0I7Ozs7V0FJRztRQUNILE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FDaEMsSUFBSSxFQUNKLGlCQUFpQixFQUNqQjtZQUNFLFdBQVcsRUFBRSxnQkFBZ0I7U0FDOUIsQ0FDRixDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRCxvQkFBb0I7UUFDcEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFDOUMsVUFBVSxFQUNWO1lBQ0UsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxXQUFXLENBQWdCLHlDQUF5QztTQUM5RSxDQUNGLENBQUM7UUFFRixNQUFNLG1CQUFtQixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlFLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRy9DLCtCQUErQjtRQUMvQixNQUFNLHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ3BELG9CQUFvQixFQUNwQjtZQUNFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsaUJBQWlCLENBQWdCLHlDQUF5QztTQUNwRixDQUNGLENBQUM7UUFDRixNQUFNLHlCQUF5QixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUYsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUV4RCxzQ0FBc0M7UUFDdEMsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ2xELElBQUksRUFDSiwwQkFBMEIsRUFDMUI7WUFDRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLG9CQUFvQixDQUFnQix5Q0FBeUM7U0FDdkYsQ0FDRixDQUFDO1FBQ0YsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFFeEQsQ0FBQztDQUNGO0FBM0dELDRDQTJHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXknO1xuXG5leHBvcnQgY2xhc3MgQ2RrV29ya3Nob3BTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBkZWZpbmVzIGFuIEFXUyBMYW1iZGEgcmVzb3VyY2VcbiAgICAvLyBjb25zdCBoZWxsbyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvSGFuZGxlcicsIHtcbiAgICAvLyAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAvLyAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksICAvLyBjb2RlIGxvYWRlZCBmcm9tIFwibGFtYmRhXCIgZGlyZWN0b3J5XG4gICAgLy8gICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcicgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgLy8gfSk7XG5cbiAgICAvLyBkZWZpbmVzIGFuIEFQSSBHYXRld2F5IFJFU1QgQVBJIHJlc291cmNlIGJhY2tlZCBieSBvdXIgXCJoZWxsb1wiIGZ1bmN0aW9uLlxuICAgIC8vIG5ldyBMYW1iZGFSZXN0QXBpKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMYW1iZGFSZXN0QXBpUHJvcHMpXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGRlZmluZXMgYSBSRVNUIEFQSSB0aGF0IHJvdXRlcyBhbGwgcmVxdWVzdHMgdG8gdGhlIHNwZWNpZmllZCBBV1MgTGFtYmRhIGZ1bmN0aW9uXG4gICAgLy8gbmV3IGFwaWdhdGV3YXkuTGFtYmRhUmVzdEFwaShcbiAgICAvLyAgIHRoaXMsIFxuICAgIC8vICAgJ0VuZHBvaW50JywgXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGhhbmRsZXI6IGhlbGxvLFxuICAgIC8vICAgICBwcm94eTogdHJ1ZSwgLy8gSWYgdHJ1ZSwgcm91dGUgYWxsIHJlcXVlc3RzIHRvIHRoZSBMYW1iZGEgRnVuY3Rpb24uIChvcHRpb25hbCwgZGVmYXVsdDogdHJ1ZSlcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuXG4gICAgLy8gY29uc3QgcmVzdGF1cmFudHNIYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAvLyAgIHRoaXMsXG4gICAgLy8gICAncmVzdGF1cmFudHNIYW5kbGVyJywgXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAvLyAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAvLyAgICAgaGFuZGxlcjogJ3Jlc3RhdXJhbnRzLmdldCcgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgLy8gICB9XG4gICAgLy8gKTtcblxuICAgIC8vIGRlZmluZSByb290IC9cbiAgICAvKipcbiAgICAgKiBMYW1iZGFSZXN0QXBpXG4gICAgICogRGVmaW5lcyBhbiBBUEkgR2F0ZXdheSBSRVNUIEFQSSB3aXRoIEFXUyBMYW1iZGEgcHJveHkgaW50ZWdyYXRpb24uXG4gICAgICogVGhlIGRlZmF1bHQgTGFtYmRhIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBhbGwgcmVxdWVzdHMgZnJvbSB0aGlzIEFQSS5cbiAgICAgKiBUaGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIGFzIGEgdGhlIGRlZmF1bHQgaW50ZWdyYXRpb24gZm9yIGFsbCBtZXRob2RzXG4gICAgICogaW4gdGhpcyBBUEksIHVubGVzcyBzcGVjaWZpZWQgb3RoZXJ3aXNlIGluIGFkZE1ldGhvZC5cbiAgICAgKi9cbiAgICAvLyBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKFxuICAgIC8vICAgdGhpcywgXG4gICAgLy8gICAncmVzdGF1cmFudHMtYXBpJywgXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGhhbmRsZXI6IGdldEluZGV4SGFuZGxlcixcbiAgICAvLyAgICAgcHJveHk6IGZhbHNlLFxuICAgIC8vICAgfVxuICAgIC8vICk7XG5cbiAgICAvLyBkZWZpbmUgQVBJIEdhdGV3YXkgYW5kIE1vZGVsXG4gICAgLyoqXG4gICAgICogUmVzdCBBcGlcbiAgICAgKiBSZXByZXNlbnRzIGEgUkVTVCBBUEkgaW4gQW1hem9uIEFQSSBHYXRld2F5LlxuICAgICAqIFVzZSBhZGRSZXNvdXJjZSBhbmQgYWRkTWV0aG9kIHRvIGNvbmZpZ3VyZSB0aGUgQVBJIG1vZGVsLlxuICAgICAqL1xuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkoXG4gICAgICB0aGlzLFxuICAgICAgXCJyZXN0YXVyYW50cy1hcGlcIiwgXG4gICAgICB7XG4gICAgICAgIHJlc3RBcGlOYW1lOiBcIlJlc3RhdXJhbnQtQVBJXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3Jlc3RhdXJhbnRzJyk7XG4gICAgY29uc3Qgc2VhcmNoID0gcmVzdGF1cmFudHMuYWRkUmVzb3VyY2UoJ3NlYXJjaCcpO1xuXG4gICAgLy8gZGVmaW5lIC8gZW5kcG9pbnRcbiAgICBjb25zdCBnZXRJbmRleEhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsXG4gICAgICAnZ2V0SW5kZXgnLCBcbiAgICAgIHtcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgICAgICBoYW5kbGVyOiAnaW5kZXguZ2V0JyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAgIH1cbiAgICApO1xuICAgIFxuICAgIGNvbnN0IGdldEluZGV4SW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihnZXRJbmRleEhhbmRsZXIpO1xuICAgIGFwaS5yb290LmFkZE1ldGhvZCgnR0VUJywgZ2V0SW5kZXhJbnRlZ3JhdGlvbik7XG5cblxuICAgIC8vIGRlZmluZSAvcmVzdGF1cmFudHMgZW5kcG9pbnRcbiAgICBjb25zdCBnZXRSZXN0YXVyYW50c0hhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsXG4gICAgICAncmVzdGF1cmFudHNIYW5kbGVyJywgXG4gICAgICB7XG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAgICAgaGFuZGxlcjogJ3Jlc3RhdXJhbnRzLmdldCcgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBnZXRSZXN0YXVyYW50c0ludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZ2V0UmVzdGF1cmFudHNIYW5kbGVyKTtcbiAgICByZXN0YXVyYW50cy5hZGRNZXRob2QoJ0dFVCcsIGdldFJlc3RhdXJhbnRzSW50ZWdyYXRpb24pO1xuXG4gICAgLy8gZGVmaW5lIC9yZXN0YXVyYW50cy9zZWFyY2ggZW5kcG9pbnRcbiAgICBjb25zdCBzZWFyY2hSZXN0YXVyYW50c0hhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgICdzZWFyY2hSZXN0YXVyYW50c0hhbmRsZXInLCBcbiAgICAgIHtcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgICAgICBoYW5kbGVyOiAncmVzdGF1cmFudHMuc2VhcmNoJyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHNlYXJjaFJlc3RhdXJhbnRzSW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihzZWFyY2hSZXN0YXVyYW50c0hhbmRsZXIpO1xuICAgIHNlYXJjaC5hZGRNZXRob2QoJ0dFVCcsIHNlYXJjaFJlc3RhdXJhbnRzSW50ZWdyYXRpb24pO1xuXG4gIH1cbn1cbiJdfQ==