{%- set _mod_docs_content_type = "PROCEDURE" %}
# Integrating {{ SMProductShortName }} with {{ ServerlessProductName }} {id="serverless-ossm-setup_{{ context }}"}

You can integrate {{ SMProductShortName }} with {{ ServerlessProductName }} without using Kourier as the default ingress. To do this, do not install the Knative Serving component before completing the following procedure. There are additional steps required when creating the `KnativeServing` custom resource definition (CRD) to integrate Knative Serving with {{ SMProductShortName }}, which are not covered in the general Knative Serving installation procedure. This procedure might be useful if you want to integrate {{ SMProductShortName }} as the default and only ingress for your {{ ServerlessProductName }} installation.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}

*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   Install the {{ SMProductName }} Operator and create a `ServiceMeshControlPlane` resource in the `istio-system` namespace. If you want to use mTLS functionality, you must also set the `spec.security.dataPlane.mtls` field for the `ServiceMeshControlPlane` resource to `true`.

    :::important

    Using {{ ServerlessProductName }} with {{ SMProductShortName }} is only supported with {{ SMProductName }} version 2.0.5 or later.
    
    :::

*   Install the {{ ServerlessOperatorName }}.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Add the namespaces that you would like to integrate with {{ SMProductShortName }} to the `ServiceMeshMemberRoll` object as members:
    ```yaml
    apiVersion: maistra.io/v1
    kind: ServiceMeshMemberRoll
    metadata:
      name: default
      namespace: istio-system
    spec:
      members: (1)
        - knative-serving
        - <namespace>
    ```
    1.  A list of namespaces to be integrated with {{ SMProductShortName }}.

    :::important

    This list of namespaces must include the `knative-serving` namespace.
    
    :::

1.  Apply the `ServiceMeshMemberRoll` resource:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  Create the necessary gateways so that {{ SMProductShortName }} can accept traffic:
    ```yaml title="Example knative-local-gateway object using HTTP"
    apiVersion: networking.istio.io/v1alpha3
    kind: Gateway
    metadata:
      name: knative-ingress-gateway
      namespace: knative-serving
    spec:
      selector:
        istio: ingressgateway
      servers:
        - port:
            number: 443
            name: https
            protocol: HTTPS
          hosts:
            - "*"
          tls:
            mode: SIMPLE
            credentialName: <wildcard_certs> (1)
    ---
    apiVersion: networking.istio.io/v1alpha3
    kind: Gateway
    metadata:
     name: knative-local-gateway
     namespace: knative-serving
    spec:
     selector:
       istio: ingressgateway
     servers:
       - port:
           number: 8081
           name: http
           protocol: HTTP (2)
         hosts:
           - "*"
    ---
    apiVersion: v1
    kind: Service
    metadata:
     name: knative-local-gateway
     namespace: istio-system
     labels:
       experimental.istio.io/disable-gateway-port-translation: "true"
    spec:
     type: ClusterIP
     selector:
       istio: ingressgateway
     ports:
       - name: http2
         port: 80
         targetPort: 8081
    ```
    1.  Add the name of the secret that contains the wildcard certificate.
    1.  The `knative-local-gateway` serves HTTP traffic. Using HTTP means that traffic coming from outside of {{ SMProductShortName }}, but using an internal hostname, such as `example.default.svc.cluster.local`, is not encrypted. You can set up encryption for this path by creating another wildcard certificate and an additional gateway that uses a different `protocol` spec.
    ```yaml title="Example knative-local-gateway object using HTTPS"
    apiVersion: networking.istio.io/v1alpha3
    kind: Gateway
    metadata:
      name: knative-local-gateway
      namespace: knative-serving
    spec:
      selector:
        istio: ingressgateway
      servers:
        - port:
            number: 443
            name: https
            protocol: HTTPS
          hosts:
            - "*"
          tls:
            mode: SIMPLE
            credentialName: <wildcard_certs>
    ```
1.  Apply the `Gateway` resources:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  Install Knative Serving by creating the following `KnativeServing` custom resource definition (CRD), which also enables the Istio integration:
    ```yaml
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
      namespace: knative-serving
    spec:
      ingress:
        istio:
          enabled: true (1)
      deployments: (2)
      - name: activator
        annotations:
          "sidecar.istio.io/inject": "true"
          "sidecar.istio.io/rewriteAppHTTPProbers": "true"
      - name: autoscaler
        annotations:
          "sidecar.istio.io/inject": "true"
          "sidecar.istio.io/rewriteAppHTTPProbers": "true"
    ```
    1.  Enables Istio integration.
    1.  Enables sidecar injection for Knative Serving data plane pods.
1.  Apply the `KnativeServing` resource:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  Create a Knative Service that has sidecar injection enabled and uses a pass-through route:
    ```yaml
    apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      name: <service_name>
      namespace: <namespace> (1)
      annotations:
        serving.knative.openshift.io/enablePassthrough: "true" (2)
    spec:
      template:
        metadata:
          annotations:
            sidecar.istio.io/inject: "true" (3)
            sidecar.istio.io/rewriteAppHTTPProbers: "true"
        spec:
          containers:
          - image: <image_url>
    ```
    1.  A namespace that is part of the Service Mesh member roll.
    1.  Instructs Knative Serving to generate an {{ product_title }} pass-through enabled route, so that the certificates you have generated are served through the ingress gateway directly.
    1.  Injects {{ SMProductShortName }} sidecars into the Knative service pods.
1.  Apply the `Service` resource:
    ```terminal
    $ oc apply -f <filename>
    ```

**Verification**

*   Access your serverless application by using a secure connection that is now trusted by the CA:
    ```terminal
    $ curl --cacert root.crt <service_url>
    ```
    ```terminal title="Example command"
    $ curl --cacert root.crt https://hello-default.apps.openshift.example.com
    ```
    ```terminal title="Example output"
    Hello Openshift!
    ```