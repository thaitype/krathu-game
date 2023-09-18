import { app, HttpRequest, HttpResponseInit, InvocationContext, input } from "@azure/functions";

const signalrInput = input.generic({
    type: 'signalRConnectionInfo',
    connectionStringSetting: 'AzureSignalRConnectionString',
    hubName: 'serverless',
})

app.http('negotiate', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'negotiate',
    extraInputs: [signalrInput],
    handler: (request: HttpRequest, context: InvocationContext): HttpResponseInit => {
        context.log(`Http function processed request for url "${request.url}"`);
    
        const signalRInput = context.extraInputs.get(signalrInput);
        return { body: JSON.stringify(signalRInput) };
    },
});
 