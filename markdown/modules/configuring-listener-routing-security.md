{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure listener routing and security settings {id="configuring-listener-routing-security_{{ context }}"}

To ensure that your applications receive only authenticated and authorized traffic, you must specify the allowed protocols and ports for your gateway. If you are routing secure traffic, you must also configure TLS settings. You can define these parameters by configuring the `spec.listeners` field in your `Gateway` custom resource (CR). {._abstract}


:::important

If your gateway is accessible from other namespaces, always configure the `spec.listeners[].allowedRoutes[].namespaces.selector` field with a selector for the permitted namespaces. By specifying a namespace selector, you prevent possible misuse or hijacking of the gateway from other namespaces.

If nothing is listed in the `spec.listeners[].allowedRoutes[]` field, the gateway is accessible only from the same namespace.

:::


**Procedure**

1.  Create or edit a `Gateway` YAML file to include your listener configuration.
    The following example demonstrates a `Gateway` CR with two listeners, one for HTTP and one for HTTPS. For detailed descriptions of the listener fields, see "Gateway listener configuration reference".

    ```yaml
    kind: Gateway
    apiVersion: gateway.networking.k8s.io/v1
    metadata:
      name: <example_gateway>
      namespace: openshift-ingress
    spec:
      gatewayClassName: openshift-default
      listeners:
      - protocol: HTTP
        port: 80
        name: http
        hostname: "*.<example_domain.tld>"
        allowedRoutes:
          namespaces:
            from: Selector
            selector:
              matchLabels:
                env: "dev"
      - protocol: HTTPS
        port: 443
        name: https
        hostname: "*.<example_domain.tld>"
        tls:
          mode: Terminate
          certificateRefs:
            - name: <listener_cert>
              kind: Secret
        allowedRoutes:
          namespaces:
            from: Selector
            selector:
              matchLabels:
                env: "dev"
    ```
   \
    With this configuration, only `HTTPRoute` resources in namespaces that have the `env: "dev"` label can attach to these listeners.
1.  Apply the `Gateway` CR by running the following command:
    ```terminal
    $ oc apply -f <gateway_cr>.yaml
    ```