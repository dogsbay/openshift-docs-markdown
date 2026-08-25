{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Jaeger to enable distributed tracing {id="serverless-jaeger-config_{{ context }}"}

To enable distributed tracing using Jaeger, you must install and configure Jaeger as a standalone integration.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}
*   You have installed the {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing.
*   You have installed the {{ JaegerName }} Operator.
*   You have installed the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  Create and apply a `Jaeger` custom resource (CR) that contains the following:
    ```yaml title="Jaeger CR"
    apiVersion: jaegertracing.io/v1
    kind: Jaeger
    metadata:
      name: jaeger
      namespace: default
    ```
1.  Enable tracing for Knative Serving, by editing the `KnativeServing` CR and adding a YAML configuration for tracing:
    ```yaml title="Tracing YAML example for Serving"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
      namespace: knative-serving
    spec:
      config:
        tracing:
          sample-rate: "0.1" (1)
          backend: zipkin (2)
          zipkin-endpoint: "http://jaeger-collector.default.svc.cluster.local:9411/api/v2/spans" (3)
          debug: "false" (4)
    ```
    1.  The `sample-rate` defines sampling probability. Using `sample-rate: "0.1"` means that 1 in 10 traces are sampled.
    1.  `backend` must be set to `zipkin`.
    1.  The `zipkin-endpoint` must point to your `jaeger-collector` service endpoint. To get this endpoint, substitute the namespace where the Jaeger CR is applied.
    1.  Debugging should be set to `false`. Enabling debug mode by setting `debug: "true"` allows all spans to be sent to the server, bypassing sampling.
1.  Enable tracing for Knative Eventing by editing the `KnativeEventing` CR:
    ```yaml title="Tracing YAML example for Eventing"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    metadata:
      name: knative-eventing
      namespace: knative-eventing
    spec:
      config:
        tracing:
          sample-rate: "0.1" (1)
          backend: zipkin (2)
          zipkin-endpoint: "http://jaeger-collector.default.svc.cluster.local:9411/api/v2/spans" (3)
          debug: "false" (4)
    ```
    1.  The `sample-rate` defines sampling probability. Using `sample-rate: "0.1"` means that 1 in 10 traces are sampled.
    1.  Set `backend` to `zipkin`.
    1.  Point the `zipkin-endpoint` to your `jaeger-collector` service endpoint. To get this endpoint, substitute the namespace where the Jaeger CR is applied.
    1.  Debugging should be set to `false`. Enabling debug mode by setting `debug: "true"` allows all spans to be sent to the server, bypassing sampling.

**Verification**

You can access the Jaeger web console to see tracing data, by using the `jaeger` route.

1.  Get the `jaeger` route’s hostname by entering the following command:
    ```terminal
    $ oc get route jaeger -n default
    ```
    ```terminal title="Example output"
    NAME     HOST/PORT                         PATH   SERVICES       PORT    TERMINATION   WILDCARD
    jaeger   jaeger-default.apps.example.com          jaeger-query   <all>   reencrypt     None
    ```
1.  Open the endpoint address in your browser to view the console.