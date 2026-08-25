{%- set _mod_docs_content_type = "PROCEDURE" %}
# Interacting with a serverless application using HTTP2 and gRPC {id="interacting-serverless-apps-http2-grpc_{{ context }}"}


:::important

This method applies to {{ product_title }} 4.10 and later. For older versions, see the following section.

:::


**Prerequisites**

*   Install {{ ServerlessOperatorName }} and Knative Serving on your cluster.
*   Install the OpenShift CLI (`oc`).
*   Create a Knative service.
*   Upgrade {{ product_title }} 4.10 or later.
*   Enable HTTP/2 on OpenShift Ingress controller.

**Procedure**

1.  Add the `serverless.openshift.io/default-enable-http2=true` annotation to the `KnativeServing` Custom Resource:
    ```terminal
    $ oc annotate knativeserving <your_knative_CR> -n knative-serving serverless.openshift.io/default-enable-http2=true
    ```
1.  After the annotation is added, you can verify that the `appProtocol` value of the Kourier service is `h2c`:
    ```terminal
    $ oc get svc -n knative-serving-ingress kourier -o jsonpath="{.spec.ports[0].appProtocol}"
    ```
    ```terminal title="Example output"
    h2c
    ```
1.  Now you can use the gRPC framework over the HTTP/2 protocol for external traffic, for example:
    ```golang
    import "google.golang.org/grpc"

    grpc.Dial(
       YOUR_URL, (1)
       grpc.WithTransportCredentials(insecure.NewCredentials())), (2)
    )
    ```
    1.  Your `ksvc` URL.
    1.  Your certificate.