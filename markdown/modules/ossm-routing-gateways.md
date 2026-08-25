{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an ingress gateway {id="ossm-routing-ingress-gateway_{{ context }}"}

An ingress gateway is a load balancer operating at the edge of the mesh that receives incoming HTTP/TCP connections. It configures exposed ports and protocols but does not include any traffic routing configuration. Traffic routing for ingress traffic is instead configured with routing rules, the same way as for internal service requests.

The following steps show how to create a gateway and configure a `VirtualService` to expose a service in the Bookinfo sample application to outside traffic for paths `/productpage` and `/login`.

**Procedure**

1.  Create a gateway to accept traffic.
    1.  Create a YAML file, and copy the following YAML into it.
        ```yaml title="Gateway example gateway.yaml"
        apiVersion: networking.istio.io/v1alpha3
        kind: Gateway
        metadata:
          name: bookinfo-gateway
        spec:
          selector:
            istio: ingressgateway
          servers:
          - port:
              number: 80
              name: http
              protocol: HTTP
            hosts:
            - "*"
        ```
    1.  Apply the YAML file.
        ```terminal
        $ oc apply -f gateway.yaml
        ```
1.  Create a `VirtualService` object to rewrite the host header.
    1.  Create a YAML file, and copy the following YAML into it.
        ```yaml title="Virtual service example"
        apiVersion: networking.istio.io/v1alpha3
        kind: VirtualService
        metadata:
          name: bookinfo
        spec:
          hosts:
          - "*"
          gateways:
          - bookinfo-gateway
          http:
          - match:
            - uri:
                exact: /productpage
            - uri:
                prefix: /static
            - uri:
                exact: /login
            - uri:
                exact: /logout
            - uri:
                prefix: /api/v1/products
            route:
            - destination:
                host: productpage
                port:
                  number: 9080
        ```
    1.  Apply the YAML file.
        ```terminal
        $ oc apply -f vs.yaml
        ```
1.  Test that the gateway and VirtualService have been set correctly.
    1.  Set the Gateway URL.
        ```terminal
        export GATEWAY_URL=$(oc -n istio-system get route istio-ingressgateway -o jsonpath='{.spec.host}')
        ```
    1.  Set the port number. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.
        ```terminal
        export TARGET_PORT=$(oc -n istio-system get route istio-ingressgateway -o jsonpath='{.spec.port.targetPort}')
        ```
    1.  Test a page that has been explicitly exposed.
        ```terminal
        curl -s -I "$GATEWAY_URL/productpage"
        ```

        The expected result is `200`.