{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Knative service with custom application metrics {id="serverless-monitoring-services-custom-metrics"}
{%- set context = "serverless-monitoring-services-custom-metrics" %}

You can extend the set of metrics exported by a Knative service. The exact implementation depends on your application and the language used.

The following listing implements a sample Go application that exports the count of processed events custom metric.

```go
package main

import (
  "fmt"
  "log"
  "net/http"
  "os"

  "github.com/prometheus/client_golang/prometheus" (1)
  "github.com/prometheus/client_golang/prometheus/promauto"
  "github.com/prometheus/client_golang/prometheus/promhttp"
)

var (
  opsProcessed = promauto.NewCounter(prometheus.CounterOpts{ (2)
     Name: "myapp_processed_ops_total",
     Help: "The total number of processed events",
  })
)


func handler(w http.ResponseWriter, r *http.Request) {
  log.Print("helloworld: received a request")
  target := os.Getenv("TARGET")
  if target == "" {
     target = "World"
  }
  fmt.Fprintf(w, "Hello %s!\n", target)
  opsProcessed.Inc() (3)
}

func main() {
  log.Print("helloworld: starting server...")

  port := os.Getenv("PORT")
  if port == "" {
     port = "8080"
  }

  http.HandleFunc("/", handler)

  // Separate server for metrics requests
  go func() { (4)
     mux := http.NewServeMux()
     server := &http.Server{
        Addr: fmt.Sprintf(":%s", "9095"),
        Handler: mux,
     }
     mux.Handle("/metrics", promhttp.Handler())
     log.Printf("prometheus: listening on port %s", 9095)
     log.Fatal(server.ListenAndServe())
  }()

   // Use same port as normal requests for metrics
  //http.Handle("/metrics", promhttp.Handler()) (5)
  log.Printf("helloworld: listening on port %s", port)
  log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
```
1.  Including the Prometheus packages.
1.  Defining the `opsProcessed` metric.
1.  Incrementing the `opsProcessed` metric.
1.  Configuring to use a separate server for metrics requests.
1.  Configuring to use the same port as normal requests for metrics and the `metrics` subpath.