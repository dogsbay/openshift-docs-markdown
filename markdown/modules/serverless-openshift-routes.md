{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ product_title }} routes for Knative services {id="serverless-openshift-routes_{{ context }}"}

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving component must be installed on your {{ product_title }} cluster.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create a Knative service that includes the `serving.knative.openshift.io/disableRoute=true` annotation:

    :::important

    The `serving.knative.openshift.io/disableRoute=true` annotation instructs {{ ServerlessProductName }} to not automatically create a route for you. However, the service still shows a URL and reaches a status of `Ready`. This URL does not work externally until you create your own route with the same hostname as the hostname in the URL.
    
    :::

    1.  Create a Knative `Service` resource:
        ```yaml title="Example resource"
        apiVersion: serving.knative.dev/v1
        kind: Service
        metadata:
          name: <service_name>
          annotations:
            serving.knative.openshift.io/disableRoute: "true"
        spec:
          template:
            spec:
              containers:
              - image: <image>
        ...
        ```
    1.  Apply the `Service` resource:
        ```terminal
        $ oc apply -f <filename>
        ```
    1.  Optional. Create a Knative service by using the `kn service create` command:
        ```terminal title="Example kn command"
        $ kn service create <service_name> \
          --image=gcr.io/knative-samples/helloworld-go \
          --annotation serving.knative.openshift.io/disableRoute=true
        ```
1.  Verify that no {{ product_title }} route has been created for the service:
    ```terminal title="Example command"
    $ $ oc get routes.route.openshift.io \
      -l serving.knative.openshift.io/ingressName=$KSERVICE_NAME \
      -l serving.knative.openshift.io/ingressNamespace=$KSERVICE_NAMESPACE \
      -n knative-serving-ingress
    ```

    You will see the following output:
    ```terminal
    No resources found in knative-serving-ingress namespace.
    ```
1.  Create a `Route` resource in the `knative-serving-ingress` namespace:
    ```yaml
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      annotations:
        haproxy.router.openshift.io/timeout: 600s (1)
      name: <route_name> (2)
      namespace: knative-serving-ingress (3)
    spec:
      host: <service_host> (4)
      port:
        targetPort: http2
      to:
        kind: Service
        name: kourier
        weight: 100
      tls:
        insecureEdgeTerminationPolicy: Allow
        termination: edge (5)
        key: |-
          -----BEGIN PRIVATE KEY-----
          [...]
          -----END PRIVATE KEY-----
        certificate: |-
          -----BEGIN CERTIFICATE-----
          [...]
          -----END CERTIFICATE-----
        caCertificate: |-
          -----BEGIN CERTIFICATE-----
          [...]
          -----END CERTIFICATE----
      wildcardPolicy: None
    ```
    1.  The timeout value for the {{ product_title }} route. You must set the same value as the `max-revision-timeout-seconds` setting (`600s` by default).
    1.  The name of the {{ product_title }} route.
    1.  The namespace for the {{ product_title }} route. This must be `knative-serving-ingress`.
    1.  The hostname for external access. You can set this to `<service_name>-<service_namespace>.<domain>`.
    1.  The certificates you want to use. Currently, only `edge` termination is supported.
1.  Apply the `Route` resource:
    ```terminal
    $ oc apply -f <filename>
    ```