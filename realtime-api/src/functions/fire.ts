import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
  output,
} from "@azure/functions";

const signalrOutput = output.generic({
  type: "signalR",
  hubName: "serverless",
  connectionStringSetting: "AzureSignalRConnectionString",
});

app.http("fire", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: (
    request: HttpRequest,
    context: InvocationContext
  ): HttpResponseInit => {
    context.log(`Http function processed request for url "${request.url}"`);

    context.extraOutputs.set(signalrOutput, [
      {
        target: "newMessage",
        arguments: [`Hello from FireFunction! ${new Date().toISOString()}`],
      },
    ]);

    return { body: `Success!` };
  },
});
