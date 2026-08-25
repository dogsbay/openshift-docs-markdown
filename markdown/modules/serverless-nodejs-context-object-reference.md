{%- set _mod_docs_content_type = "REFERENCE" %}
# Node.js context object reference {id="serverless-nodejs-context-object-reference_{{ context }}"}

The `context` object has several properties that can be accessed by the function developer. Accessing these properties can provide information about HTTP requests and write output to the cluster logs.

## log {id="serverless-nodejs-context-object-reference-log_{{ context }}"}

Provides a logging object that can be used to write output to the cluster logs. The log adheres to the [Pino logging API](https://getpino.io/#/docs/api).

```javascript title="Example log"
function handle(context) {
  context.log.info(“Processing customer”);
}
```

You can access the function by using the `kn func invoke` command:

```terminal title="Example command"
$ kn func invoke --target 'http://example.function.com'
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"Processing customer"}
```

You can change the log level to one of `fatal`, `error`, `warn`, `info`, `debug`, `trace`, or `silent`. To do that, change the value of `logLevel` by assigning one of these values to the environment variable `FUNC_LOG_LEVEL` using the `config` command.

## query {id="serverless-nodejs-context-object-reference-query_{{ context }}"}

Returns the query string for the request, if any, as key-value pairs. These attributes are also found on the context object itself.

```javascript title="Example query"
function handle(context) {
  // Log the 'name' query parameter
  context.log.info(context.query.name);
  // Query parameters are also attached to the context
  context.log.info(context.name);
}
```

You can access the function by using the `kn func invoke` command:

```terminal title="Example command"
$ kn func invoke --target 'http://example.com?name=tiger'
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"tiger"}
```

## body {id="serverless-nodejs-context-object-reference-body_{{ context }}"}

Returns the request body if any. If the request body contains JSON code, this will be parsed so that the attributes are directly available.

```javascript title="Example body"
function handle(context) {
  // log the incoming request body's 'hello' parameter
  context.log.info(context.body.hello);
}
```

You can access the function by using the `curl` command to invoke it:

```terminal title="Example command"
$ kn func invoke -d '{"Hello": "world"}'
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"world"}
```

## headers {id="serverless-nodejs-context-object-reference-headers_{{ context }}"}

Returns the HTTP request headers as an object.

```javascript title="Example header"
function handle(context) {
  context.log.info(context.headers["custom-header"]);
}
```

You can access the function by using the `kn func invoke` command:

```terminal title="Example command"
$ kn func invoke --target 'http://example.function.com'
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"some-value"}
```

## HTTP requests {id="serverless-nodejs-context-object-reference-http-requests_{{ context }}"}


method
:   Returns the HTTP request method as a string.

httpVersion
:   Returns the HTTP version as a string.

httpVersionMajor
:   Returns the HTTP major version number as a string.

httpVersionMinor
:   Returns the HTTP minor version number as a string.