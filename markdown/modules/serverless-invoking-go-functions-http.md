{%- set _mod_docs_content_type = "REFERENCE" %}
# Functions triggered by an HTTP request {id="serverless-invoking-go-functions-http_{{ context }}"}

When an incoming HTTP request is received, functions are invoked with a standard Go [Context](https://golang.org/pkg/context/) as the first parameter, followed by the [`http.ResponseWriter`](https://golang.org/pkg/net/http/#ResponseWriter) and [`http.Request`](https://golang.org/pkg/net/http/#Request) parameters. You can use standard Go techniques to access the request, and set a corresponding HTTP response for your function.

```go title="Example HTTP response"
func Handle(ctx context.Context, res http.ResponseWriter, req *http.Request) {
  // Read body
  body, err := ioutil.ReadAll(req.Body)
  defer req.Body.Close()
  if err != nil {
	http.Error(res, err.Error(), 500)
	return
  }
  // Process body and function logic
  // ...
}
```