"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigateway = require("@aws-cdk/aws-apigateway");
class CdkWorkshopStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // defines an AWS Lambda resource
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler' // file is "hello", function is "handler"
        });
        // defines an API Gateway REST API resource backed by our "hello" function.
        // new LambdaRestApi(scope: Construct, id: string, props: LambdaRestApiProps)
        new apigateway.LambdaRestApi(this, 'Endpoint', {
            handler: hello,
            proxy: true,
        });
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxzREFBc0Q7QUFFdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsaUNBQWlDO1FBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3RELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsZUFBZSxDQUFnQix5Q0FBeUM7U0FDbEYsQ0FBQyxDQUFDO1FBRUgsMkVBQTJFO1FBQzNFLDZFQUE2RTtRQUM3RSxJQUFJLFVBQVUsQ0FBQyxhQUFhLENBQzFCLElBQUksRUFDSixVQUFVLEVBQ1Y7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FDRixDQUFDO0lBRUosQ0FBQztDQUNGO0FBdkJELDRDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXknO1xuXG5leHBvcnQgY2xhc3MgQ2RrV29ya3Nob3BTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBkZWZpbmVzIGFuIEFXUyBMYW1iZGEgcmVzb3VyY2VcbiAgICBjb25zdCBoZWxsbyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvSGFuZGxlcicsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksICAvLyBjb2RlIGxvYWRlZCBmcm9tIFwibGFtYmRhXCIgZGlyZWN0b3J5XG4gICAgICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcicgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgfSk7XG5cbiAgICAvLyBkZWZpbmVzIGFuIEFQSSBHYXRld2F5IFJFU1QgQVBJIHJlc291cmNlIGJhY2tlZCBieSBvdXIgXCJoZWxsb1wiIGZ1bmN0aW9uLlxuICAgIC8vIG5ldyBMYW1iZGFSZXN0QXBpKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMYW1iZGFSZXN0QXBpUHJvcHMpXG4gICAgbmV3IGFwaWdhdGV3YXkuTGFtYmRhUmVzdEFwaShcbiAgICAgIHRoaXMsIFxuICAgICAgJ0VuZHBvaW50JywgXG4gICAgICB7XG4gICAgICAgIGhhbmRsZXI6IGhlbGxvLFxuICAgICAgICBwcm94eTogdHJ1ZSwgLy8gSWYgdHJ1ZSwgcm91dGUgYWxsIHJlcXVlc3RzIHRvIHRoZSBMYW1iZGEgRnVuY3Rpb24uIChvcHRpb25hbCwgZGVmYXVsdDogdHJ1ZSlcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cbn1cbiJdfQ==