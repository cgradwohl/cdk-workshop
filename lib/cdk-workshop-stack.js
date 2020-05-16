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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxzREFBc0Q7QUFFdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsaUNBQWlDO1FBQ2pDLDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsbUZBQW1GO1FBQ25GLHNGQUFzRjtRQUN0RixNQUFNO1FBRU4sMkVBQTJFO1FBQzNFLDZFQUE2RTtRQUM3RSxzR0FBc0c7UUFDdEcsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLHNCQUFzQjtRQUN0QixvR0FBb0c7UUFDcEcsTUFBTTtRQUNOLEtBQUs7UUFFTCxrREFBa0Q7UUFDbEQsVUFBVTtRQUNWLDJCQUEyQjtRQUMzQixNQUFNO1FBQ04sdUVBQXVFO1FBQ3ZFLHFGQUFxRjtRQUNyRiwwRkFBMEY7UUFDMUYsTUFBTTtRQUNOLEtBQUs7UUFFTCxnQkFBZ0I7UUFDaEIsNENBQTRDO1FBQzVDLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLGdDQUFnQztRQUNoQyxvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLEtBQUs7UUFFTCwrQkFBK0I7UUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUNoQyxJQUFJLEVBQ0osaUJBQWlCLEVBQ2pCO1lBQ0UsV0FBVyxFQUFFLGdCQUFnQjtTQUM5QixDQUNGLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpELG9CQUFvQjtRQUNwQixNQUFNLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUM5QyxVQUFVLEVBQ1Y7WUFDRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLFdBQVcsQ0FBZ0IseUNBQXlDO1NBQzlFLENBQ0YsQ0FBQztRQUVGLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFHL0MsK0JBQStCO1FBQy9CLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFDcEQsb0JBQW9CLEVBQ3BCO1lBQ0UsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBZ0IseUNBQXlDO1NBQ3BGLENBQ0YsQ0FBQztRQUNGLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRixXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRXhELHNDQUFzQztRQUN0QyxNQUFNLHdCQUF3QixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FDbEQsSUFBSSxFQUNKLDBCQUEwQixFQUMxQjtZQUNFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsb0JBQW9CLENBQWdCLHlDQUF5QztTQUN2RixDQUNGLENBQUM7UUFDRixNQUFNLDRCQUE0QixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDaEcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUV4RCxDQUFDO0NBQ0Y7QUEvRkQsNENBK0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5cbmV4cG9ydCBjbGFzcyBDZGtXb3Jrc2hvcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIGRlZmluZXMgYW4gQVdTIExhbWJkYSByZXNvdXJjZVxuICAgIC8vIGNvbnN0IGhlbGxvID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9IYW5kbGVyJywge1xuICAgIC8vICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgIC8vICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAvLyAgIGhhbmRsZXI6ICdoZWxsby5oYW5kbGVyJyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAvLyB9KTtcblxuICAgIC8vIGRlZmluZXMgYW4gQVBJIEdhdGV3YXkgUkVTVCBBUEkgcmVzb3VyY2UgYmFja2VkIGJ5IG91ciBcImhlbGxvXCIgZnVuY3Rpb24uXG4gICAgLy8gbmV3IExhbWJkYVJlc3RBcGkoc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExhbWJkYVJlc3RBcGlQcm9wcylcbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVmaW5lcyBhIFJFU1QgQVBJIHRoYXQgcm91dGVzIGFsbCByZXF1ZXN0cyB0byB0aGUgc3BlY2lmaWVkIEFXUyBMYW1iZGEgZnVuY3Rpb25cbiAgICAvLyBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKFxuICAgIC8vICAgdGhpcywgXG4gICAgLy8gICAnRW5kcG9pbnQnLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaGFuZGxlcjogaGVsbG8sXG4gICAgLy8gICAgIHByb3h5OiB0cnVlLCAvLyBJZiB0cnVlLCByb3V0ZSBhbGwgcmVxdWVzdHMgdG8gdGhlIExhbWJkYSBGdW5jdGlvbi4gKG9wdGlvbmFsLCBkZWZhdWx0OiB0cnVlKVxuICAgIC8vICAgfVxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zdCByZXN0YXVyYW50c0hhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgIC8vICAgdGhpcyxcbiAgICAvLyAgICdyZXN0YXVyYW50c0hhbmRsZXInLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgIC8vICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLCAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeVxuICAgIC8vICAgICBoYW5kbGVyOiAncmVzdGF1cmFudHMuZ2V0JyAgICAgICAgICAgICAgICAvLyBmaWxlIGlzIFwiaGVsbG9cIiwgZnVuY3Rpb24gaXMgXCJoYW5kbGVyXCJcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuXG4gICAgLy8gZGVmaW5lIHJvb3QgL1xuICAgIC8vIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkoXG4gICAgLy8gICB0aGlzLCBcbiAgICAvLyAgICdyZXN0YXVyYW50cy1hcGknLCBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaGFuZGxlcjogZ2V0SW5kZXhIYW5kbGVyLFxuICAgIC8vICAgICBwcm94eTogZmFsc2UsXG4gICAgLy8gICB9XG4gICAgLy8gKTtcblxuICAgIC8vIGRlZmluZSBBUEkgR2F0ZXdheSBhbmQgTW9kZWxcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKFxuICAgICAgdGhpcyxcbiAgICAgIFwicmVzdGF1cmFudHMtYXBpXCIsIFxuICAgICAge1xuICAgICAgICByZXN0QXBpTmFtZTogXCJSZXN0YXVyYW50LUFQSVwiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50cyA9IGFwaS5yb290LmFkZFJlc291cmNlKCdyZXN0YXVyYW50cycpO1xuICAgIGNvbnN0IHNlYXJjaCA9IHJlc3RhdXJhbnRzLmFkZFJlc291cmNlKCdzZWFyY2gnKTtcblxuICAgIC8vIGRlZmluZSAvIGVuZHBvaW50XG4gICAgY29uc3QgZ2V0SW5kZXhIYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLFxuICAgICAgJ2dldEluZGV4JywgXG4gICAgICB7XG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAgICAgaGFuZGxlcjogJ2luZGV4LmdldCcgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgICB9XG4gICAgKTtcbiAgICBcbiAgICBjb25zdCBnZXRJbmRleEludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZ2V0SW5kZXhIYW5kbGVyKTtcbiAgICBhcGkucm9vdC5hZGRNZXRob2QoJ0dFVCcsIGdldEluZGV4SW50ZWdyYXRpb24pO1xuXG5cbiAgICAvLyBkZWZpbmUgL3Jlc3RhdXJhbnRzIGVuZHBvaW50XG4gICAgY29uc3QgZ2V0UmVzdGF1cmFudHNIYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLFxuICAgICAgJ3Jlc3RhdXJhbnRzSGFuZGxlcicsIFxuICAgICAge1xuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCwgICAgLy8gZXhlY3V0aW9uIGVudmlyb25tZW50XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksICAvLyBjb2RlIGxvYWRlZCBmcm9tIFwibGFtYmRhXCIgZGlyZWN0b3J5XG4gICAgICAgIGhhbmRsZXI6ICdyZXN0YXVyYW50cy5nZXQnICAgICAgICAgICAgICAgIC8vIGZpbGUgaXMgXCJoZWxsb1wiLCBmdW5jdGlvbiBpcyBcImhhbmRsZXJcIlxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgZ2V0UmVzdGF1cmFudHNJbnRlZ3JhdGlvbiA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGdldFJlc3RhdXJhbnRzSGFuZGxlcik7XG4gICAgcmVzdGF1cmFudHMuYWRkTWV0aG9kKCdHRVQnLCBnZXRSZXN0YXVyYW50c0ludGVncmF0aW9uKTtcblxuICAgIC8vIGRlZmluZSAvcmVzdGF1cmFudHMvc2VhcmNoIGVuZHBvaW50XG4gICAgY29uc3Qgc2VhcmNoUmVzdGF1cmFudHNIYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICAnc2VhcmNoUmVzdGF1cmFudHNIYW5kbGVyJywgXG4gICAgICB7XG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGFcIiBkaXJlY3RvcnlcbiAgICAgICAgaGFuZGxlcjogJ3Jlc3RhdXJhbnRzLnNlYXJjaCcgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBzZWFyY2hSZXN0YXVyYW50c0ludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oc2VhcmNoUmVzdGF1cmFudHNIYW5kbGVyKTtcbiAgICBzZWFyY2guYWRkTWV0aG9kKCdHRVQnLCBzZWFyY2hSZXN0YXVyYW50c0ludGVncmF0aW9uKTtcblxuICB9XG59XG4iXX0=