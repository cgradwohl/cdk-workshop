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
        const getIndex = new lambda.Function(this, 'getIndex', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'index.get' // file is "hello", function is "handler"
        });
        // define root /
        const api = new apigateway.LambdaRestApi(this, 'restaurants-api', {
            handler: getIndex,
            proxy: false,
        });
        const geRestaurantsHandler = new lambda.Function(this, 'restaurantsHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'restaurants.get' // file is "hello", function is "handler"
        });
        const getRestaurantsIntegration = new apigateway.LambdaIntegration(geRestaurantsHandler);
        // /restuarants
        const restaurants = api.root.addResource('restaurants');
        restaurants.addMethod('GET', getRestaurantsIntegration);
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxzREFBc0Q7QUFFdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsaUNBQWlDO1FBQ2pDLDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsbUZBQW1GO1FBQ25GLHNGQUFzRjtRQUN0RixNQUFNO1FBRU4sMkVBQTJFO1FBQzNFLDZFQUE2RTtRQUM3RSxzR0FBc0c7UUFDdEcsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLHNCQUFzQjtRQUN0QixvR0FBb0c7UUFDcEcsTUFBTTtRQUNOLEtBQUs7UUFFTCxrREFBa0Q7UUFDbEQsVUFBVTtRQUNWLDJCQUEyQjtRQUMzQixNQUFNO1FBQ04sdUVBQXVFO1FBQ3ZFLHFGQUFxRjtRQUNyRiwwRkFBMEY7UUFDMUYsTUFBTTtRQUNOLEtBQUs7UUFFTCxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUN2QyxVQUFVLEVBQ1Y7WUFDRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLFdBQVcsQ0FBZ0IseUNBQXlDO1NBQzlFLENBQ0YsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxhQUFhLENBQ3RDLElBQUksRUFDSixpQkFBaUIsRUFDakI7WUFDRSxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQ0YsQ0FBQztRQUVGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFDbkQsb0JBQW9CLEVBQ3BCO1lBQ0UsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBZ0IseUNBQXlDO1NBQ3BGLENBQ0YsQ0FBQztRQUNGLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV6RixlQUFlO1FBQ2YsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFeEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUUxRCxDQUFDO0NBQ0Y7QUFwRUQsNENBb0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5cbmV4cG9ydCBjbGFzcyBDZGtXb3Jrc2hvcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIGRlZmluZXMgYW4gQVdTIExhbWJkYSByZXNvdXJjZVxuICAgIC8vIGNvbnN0IGhlbGxvID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9IYW5kbGVyJywge1xuICAgIC8vICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgIC8vICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAvLyAgIGhhbmRsZXI6ICdoZWxsby5oYW5kbGVyJyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAvLyB9KTtcblxuICAgIC8vIGRlZmluZXMgYW4gQVBJIEdhdGV3YXkgUkVTVCBBUEkgcmVzb3VyY2UgYmFja2VkIGJ5IG91ciBcImhlbGxvXCIgZnVuY3Rpb24uXG4gICAgLy8gbmV3IExhbWJkYVJlc3RBcGkoc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExhbWJkYVJlc3RBcGlQcm9wcylcbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVmaW5lcyBhIFJFU1QgQVBJIHRoYXQgcm91dGVzIGFsbCByZXF1ZXN0cyB0byB0aGUgc3BlY2lmaWVkIEFXUyBMYW1iZGEgZnVuY3Rpb25cbiAgICAvLyBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKFxuICAgIC8vICAgdGhpcywgXG4gICAgLy8gICAnRW5kcG9pbnQnLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaGFuZGxlcjogaGVsbG8sXG4gICAgLy8gICAgIHByb3h5OiB0cnVlLCAvLyBJZiB0cnVlLCByb3V0ZSBhbGwgcmVxdWVzdHMgdG8gdGhlIExhbWJkYSBGdW5jdGlvbi4gKG9wdGlvbmFsLCBkZWZhdWx0OiB0cnVlKVxuICAgIC8vICAgfVxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zdCByZXN0YXVyYW50c0hhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgIC8vICAgdGhpcyxcbiAgICAvLyAgICdyZXN0YXVyYW50c0hhbmRsZXInLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgIC8vICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgIC8vICAgICBoYW5kbGVyOiAncmVzdGF1cmFudHMuZ2V0JyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuXG4gICAgY29uc3QgZ2V0SW5kZXggPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsXG4gICAgICAnZ2V0SW5kZXgnLCBcbiAgICAgIHtcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgICAgICBoYW5kbGVyOiAnaW5kZXguZ2V0JyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gZGVmaW5lIHJvb3QgL1xuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkoXG4gICAgICB0aGlzLCBcbiAgICAgICdyZXN0YXVyYW50cy1hcGknLCBcbiAgICAgIHtcbiAgICAgICAgaGFuZGxlcjogZ2V0SW5kZXgsXG4gICAgICAgIHByb3h5OiBmYWxzZSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgZ2VSZXN0YXVyYW50c0hhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsXG4gICAgICAncmVzdGF1cmFudHNIYW5kbGVyJywgXG4gICAgICB7XG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAgICAgaGFuZGxlcjogJ3Jlc3RhdXJhbnRzLmdldCcgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBnZXRSZXN0YXVyYW50c0ludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZ2VSZXN0YXVyYW50c0hhbmRsZXIpO1xuICAgIFxuICAgIC8vIC9yZXN0dWFyYW50c1xuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3Jlc3RhdXJhbnRzJyk7XG4gICAgXG4gICAgcmVzdGF1cmFudHMuYWRkTWV0aG9kKCdHRVQnLCBnZXRSZXN0YXVyYW50c0ludGVncmF0aW9uKTtcblxuICB9XG59XG4iXX0=