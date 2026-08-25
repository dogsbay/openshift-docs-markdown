{%- set _mod_docs_content_type = "REFERENCE" %}
# Functions triggered by a cloud event {id="serverless-invoking-go-functions-cloudevent_{{ context }}"}

When an incoming cloud event is received, the event is invoked by the [CloudEvents Go SDK](https://cloudevents.github.io/sdk-go/). The invocation uses the `Event` type as a parameter.

You can leverage the Go [Context](https://golang.org/pkg/context/) as an optional parameter in the function contract, as shown in the list of supported function signatures:

```go title="Supported function signatures"
Handle()
Handle() error
Handle(context.Context)
Handle(context.Context) error
Handle(cloudevents.Event)
Handle(cloudevents.Event) error
Handle(context.Context, cloudevents.Event)
Handle(context.Context, cloudevents.Event) error
Handle(cloudevents.Event) *cloudevents.Event
Handle(cloudevents.Event) (*cloudevents.Event, error)
Handle(context.Context, cloudevents.Event) *cloudevents.Event
Handle(context.Context, cloudevents.Event) (*cloudevents.Event, error)
```

## CloudEvent trigger example {id="serverless-invoking-go-functions-cloudevent-example_{{ context }}"}

A cloud event is received which contains a JSON string in the data property:

```json
{
  "customerId": "0123456",
  "productId": "6543210"
}
```

To access this data, a structure must be defined which maps properties in the cloud event data, and retrieves the data from the incoming event. The following example uses the `Purchase` structure:

```go
type Purchase struct {
  CustomerId string `json:"customerId"`
  ProductId  string `json:"productId"`
}
func Handle(ctx context.Context, event cloudevents.Event) (err error) {

  purchase := &Purchase{}
  if err = event.DataAs(purchase); err != nil {
	fmt.Fprintf(os.Stderr, "failed to parse incoming CloudEvent %s\n", err)
	return
  }
  // ...
}
```

Alternatively, a Go `encoding/json` package could be used to access the cloud event directly as JSON in the form of a bytes array:

```go
func Handle(ctx context.Context, event cloudevents.Event) {
  bytes, err := json.Marshal(event)
  // ...
}
```