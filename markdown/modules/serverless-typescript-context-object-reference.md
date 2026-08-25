{%- set _mod_docs_content_type = "REFERENCE" %}
# TypeScript context object reference {id="serverless-typescript-context-object-reference_{{ context }}"}

The `context` object has several properties that can be accessed by the function developer. Accessing these properties can provide information about incoming HTTP requests and write output to the cluster logs.

## log {id="serverless-typescript-context-object-reference-log_{{ context }}"}

Provides a logging object that can be used to write output to the cluster logs. The log adheres to the [Pino logging API](https://getpino.io/#/docs/api).

```javascript title="Example log"
export function handle(context: Context): string {
    // log the incoming request body's 'hello' parameter
    if (context.body) {
      context.log.info((context.body as Record<string, string>).hello);
    } else {
      context.log.info('No data received');
    }
    return 'OK';
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

## query {id="serverless-typescript-context-object-reference-query_{{ context }}"}

Returns the query string for the request, if any, as key-value pairs. These attributes are also found on the context object itself.

```javascript title="Example query"
export function handle(context: Context): string {
      // log the 'name' query parameter
    if (context.query) {
      context.log.info((context.query as Record<string, string>).name);
    } else {
      context.log.info('No data received');
    }
    return 'OK';
}

```

You can access the function by using the `kn func invoke` command:

```terminal title="Example command"
$ kn func invoke --target 'http://example.function.com' --data '{"name": "tiger"}'
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"tiger"}
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"tiger"}
```

## body {id="serverless-typescript-context-object-reference-body_{{ context }}"}

Returns the request body, if any. If the request body contains JSON code, this will be parsed so that the attributes are directly available.

```javascript title="Example body"
export function handle(context: Context): string {
    // log the incoming request body's 'hello' parameter
    if (context.body) {
      context.log.info((context.body as Record<string, string>).hello);
    } else {
      context.log.info('No data received');
    }
    return 'OK';
}
```

You can access the function by using the `kn func invoke` command:

```terminal title="Example command"
$ kn func invoke --target 'http://example.function.com' --data '{"hello": "world"}'
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"world"}
```

## headers {id="serverless-typescript-context-object-reference-headers_{{ context }}"}

Returns the HTTP request headers as an object.

```javascript title="Example header"
export function handle(context: Context): string {
    // log the incoming request body's 'hello' parameter
    if (context.body) {
      context.log.info((context.headers as Record<string, string>)['custom-header']);
    } else {
      context.log.info('No data received');
    }
    return 'OK';
}
```

You can access the function by using the `curl` command to invoke it:

```terminal title="Example command"
$ curl -H'x-custom-header: some-value’' http://example.function.com
```

```terminal title="Example output"
{"level":30,"time":1604511655265,"pid":3430203,"hostname":"localhost.localdomain","reqId":1,"msg":"some-value"}
```

## HTTP requests {id="serverless-typescript-context-object-reference-http-requests_{{ context }}"}


method
:   Returns the HTTP request method as a string.

httpVersion
:   Returns the HTTP version as a string.

httpVersionMajor
:   Returns the HTTP major version number as a string.

httpVersionMinor
:   Returns the HTTP minor version number as a string.