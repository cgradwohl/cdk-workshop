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
        // const api = new apigateway.LambdaRestApi(
        //   this, 
        //   'restaurants-api', 
        //   {
        //     handler: getIndexHandler,
        //     proxy: false,
        //   }
        // );
        // define API Gateway and Model
        const api = new apigateway.RestApi(this, "widgets-api", {
            restApiName: "Restaurant-API",
        });
        const restaurants = api.root.addResource('restaurants');
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
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxzREFBc0Q7QUFFdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsaUNBQWlDO1FBQ2pDLDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsbUZBQW1GO1FBQ25GLHNGQUFzRjtRQUN0RixNQUFNO1FBRU4sMkVBQTJFO1FBQzNFLDZFQUE2RTtRQUM3RSxzR0FBc0c7UUFDdEcsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLHNCQUFzQjtRQUN0QixvR0FBb0c7UUFDcEcsTUFBTTtRQUNOLEtBQUs7UUFFTCxrREFBa0Q7UUFDbEQsVUFBVTtRQUNWLDJCQUEyQjtRQUMzQixNQUFNO1FBQ04sdUVBQXVFO1FBQ3ZFLHFGQUFxRjtRQUNyRiwwRkFBMEY7UUFDMUYsTUFBTTtRQUNOLEtBQUs7UUFFTCxnQkFBZ0I7UUFDaEIsNENBQTRDO1FBQzVDLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLGdDQUFnQztRQUNoQyxvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLEtBQUs7UUFFTCwrQkFBK0I7UUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUNoQyxJQUFJLEVBQ0osYUFBYSxFQUNiO1lBQ0UsV0FBVyxFQUFFLGdCQUFnQjtTQUM5QixDQUNGLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RCxvQkFBb0I7UUFDcEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFDOUMsVUFBVSxFQUNWO1lBQ0UsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxXQUFXLENBQWdCLHlDQUF5QztTQUM5RSxDQUNGLENBQUM7UUFFRixNQUFNLG1CQUFtQixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlFLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRy9DLCtCQUErQjtRQUMvQixNQUFNLHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ3BELG9CQUFvQixFQUNwQjtZQUNFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsaUJBQWlCLENBQWdCLHlDQUF5QztTQUNwRixDQUNGLENBQUM7UUFDRixNQUFNLHlCQUF5QixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUYsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUUxRCxDQUFDO0NBQ0Y7QUFqRkQsNENBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5cbmV4cG9ydCBjbGFzcyBDZGtXb3Jrc2hvcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIGRlZmluZXMgYW4gQVdTIExhbWJkYSByZXNvdXJjZVxuICAgIC8vIGNvbnN0IGhlbGxvID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9IYW5kbGVyJywge1xuICAgIC8vICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgIC8vICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAvLyAgIGhhbmRsZXI6ICdoZWxsby5oYW5kbGVyJyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAvLyB9KTtcblxuICAgIC8vIGRlZmluZXMgYW4gQVBJIEdhdGV3YXkgUkVTVCBBUEkgcmVzb3VyY2UgYmFja2VkIGJ5IG91ciBcImhlbGxvXCIgZnVuY3Rpb24uXG4gICAgLy8gbmV3IExhbWJkYVJlc3RBcGkoc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExhbWJkYVJlc3RBcGlQcm9wcylcbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVmaW5lcyBhIFJFU1QgQVBJIHRoYXQgcm91dGVzIGFsbCByZXF1ZXN0cyB0byB0aGUgc3BlY2lmaWVkIEFXUyBMYW1iZGEgZnVuY3Rpb25cbiAgICAvLyBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKFxuICAgIC8vICAgdGhpcywgXG4gICAgLy8gICAnRW5kcG9pbnQnLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaGFuZGxlcjogaGVsbG8sXG4gICAgLy8gICAgIHByb3h5OiB0cnVlLCAvLyBJZiB0cnVlLCByb3V0ZSBhbGwgcmVxdWVzdHMgdG8gdGhlIExhbWJkYSBGdW5jdGlvbi4gKG9wdGlvbmFsLCBkZWZhdWx0OiB0cnVlKVxuICAgIC8vICAgfVxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zdCByZXN0YXVyYW50c0hhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgIC8vICAgdGhpcyxcbiAgICAvLyAgICdyZXN0YXVyYW50c0hhbmRsZXInLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgIC8vICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgIC8vICAgICBoYW5kbGVyOiAncmVzdGF1cmFudHMuZ2V0JyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuXG4gICAgLy8gZGVmaW5lIHJvb3QgL1xuICAgIC8vIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkoXG4gICAgLy8gICB0aGlzLCBcbiAgICAvLyAgICdyZXN0YXVyYW50cy1hcGknLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaGFuZGxlcjogZ2V0SW5kZXhIYW5kbGVyLFxuICAgIC8vICAgICBwcm94eTogZmFsc2UsXG4gICAgLy8gICB9XG4gICAgLy8gKTtcblxuICAgIC8vIGRlZmluZSBBUEkgR2F0ZXdheSBhbmQgTW9kZWxcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKFxuICAgICAgdGhpcyxcbiAgICAgIFwid2lkZ2V0cy1hcGlcIiwgXG4gICAgICB7XG4gICAgICAgIHJlc3RBcGlOYW1lOiBcIlJlc3RhdXJhbnQtQVBJXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3Jlc3RhdXJhbnRzJyk7XG5cbiAgICAvLyBkZWZpbmUgLyBlbmRwb2ludFxuICAgIGNvbnN0IGdldEluZGV4SGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcyxcbiAgICAgICdnZXRJbmRleCcsIFxuICAgICAge1xuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCwgICAgLy8gZXhlY3V0aW9uIGVudmlyb25tZW50XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksICAvLyBjb2RlIGxvYWRlZCBmcm9tIFwibGFtYmRhXCIgZGlyZWN0b3J5XG4gICAgICAgIGhhbmRsZXI6ICdpbmRleC5nZXQnICAgICAgICAgICAgICAgIC8vIGZpbGUgaXMgXCJoZWxsb1wiLCBmdW5jdGlvbiBpcyBcImhhbmRsZXJcIlxuICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgY29uc3QgZ2V0SW5kZXhJbnRlZ3JhdGlvbiA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGdldEluZGV4SGFuZGxlcik7XG4gICAgYXBpLnJvb3QuYWRkTWV0aG9kKCdHRVQnLCBnZXRJbmRleEludGVncmF0aW9uKTtcblxuXG4gICAgLy8gZGVmaW5lIC9yZXN0YXVyYW50cyBlbmRwb2ludFxuICAgIGNvbnN0IGdldFJlc3RhdXJhbnRzSGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcyxcbiAgICAgICdyZXN0YXVyYW50c0hhbmRsZXInLCBcbiAgICAgIHtcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgICAgICBoYW5kbGVyOiAncmVzdGF1cmFudHMuZ2V0JyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGdldFJlc3RhdXJhbnRzSW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihnZXRSZXN0YXVyYW50c0hhbmRsZXIpO1xuICAgIHJlc3RhdXJhbnRzLmFkZE1ldGhvZCgnR0VUJywgZ2V0UmVzdGF1cmFudHNJbnRlZ3JhdGlvbik7XG5cbiAgfVxufVxuIl19