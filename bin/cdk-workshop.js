#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
// main stack
const cdk_workshop_stack_1 = require("../lib/cdk-workshop-stack");
const app = new cdk.App();
// Instantiate the main stack
new cdk_workshop_stack_1.CdkWorkshopStack(app, 'CdkWorkshopStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFxQztBQUVyQyxhQUFhO0FBQ2Isa0VBQTZEO0FBRTdELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLDZCQUE2QjtBQUM3QixJQUFJLHFDQUFnQixDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuXG4vLyBtYWluIHN0YWNrXG5pbXBvcnQgeyBDZGtXb3Jrc2hvcFN0YWNrIH0gZnJvbSAnLi4vbGliL2Nkay13b3Jrc2hvcC1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbi8vIEluc3RhbnRpYXRlIHRoZSBtYWluIHN0YWNrXG5uZXcgQ2RrV29ya3Nob3BTdGFjayhhcHAsICdDZGtXb3Jrc2hvcFN0YWNrJyk7XG4iXX0=