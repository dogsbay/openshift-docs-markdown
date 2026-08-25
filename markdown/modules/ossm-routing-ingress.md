{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing ingress traffic {id="ossm-routing-ingress_{{ context }}"}

In {{ SMProductName }}, the Ingress Gateway enables features such as monitoring, security, and route rules to apply to traffic that enters the cluster. Use a {{ SMProductShortName }} gateway to expose a service outside of the service mesh.

## Determining the ingress IP and ports {id="ossm-routing-determine-ingress_{{ context }}"}

Ingress configuration differs depending on if your environment supports an external load balancer. An external load balancer is set in the ingress IP and ports for the cluster. To determine if your cluster’s IP and ports are configured for external load balancers, run the following command. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.

```terminal
$ oc get svc istio-ingressgateway -n istio-system
```

That command returns the `NAME`, `TYPE`, `CLUSTER-IP`, `EXTERNAL-IP`, `PORT(S)`, and `AGE` of each item in your namespace.

If the `EXTERNAL-IP` value is set, your environment has an external load balancer that you can use for the ingress gateway.

If the `EXTERNAL-IP` value is `<none>`, or perpetually `<pending>`, your environment does not provide an external load balancer for the ingress gateway.

### Determining ingress ports with a load balancer {id="ossm-routing-config-ig-lb_{{ context }}"}

Follow these instructions if your environment has an external load balancer.

**Procedure**

1.  Run the following command to set the ingress IP and ports. This command sets a variable in your terminal.
    ```terminal
    $ export INGRESS_HOST=$(oc -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
    ```
1.  Run the following command to set the ingress port.
    ```terminal
    $ export INGRESS_PORT=$(oc -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
    ```
1.  Run the following command to set the secure ingress port.
    ```terminal
    $ export SECURE_INGRESS_PORT=$(oc -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].port}')
    ```
1.  Run the following command to set the TCP ingress port.
    ```terminal
    $ export TCP_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="tcp")].port}')
    ```


:::note

In some environments, the load balancer may be exposed using a hostname instead of an IP address. For that case, the ingress gateway’s `EXTERNAL-IP` value is not an IP address. Instead, it is a hostname, and the previous command fails to set the `INGRESS_HOST` environment variable.

In that case, use the following command to correct the `INGRESS_HOST` value:

:::


```terminal
$ export INGRESS_HOST=$(oc -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
```

### Determining ingress ports without a load balancer {id="ossm-routing-config-ig-no-lb_{{ context }}"}

If your environment does not have an external load balancer, determine the ingress ports and use a node port instead.

**Procedure**

1.  Set the ingress ports.
    ```terminal
    $ export INGRESS_PORT=$(oc -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
    ```
1.  Run the following command to set the secure ingress port.
    ```terminal
    $ export SECURE_INGRESS_PORT=$(oc -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
    ```
1.  Run the following command to set the TCP ingress port.
    ```terminal
    $ export TCP_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="tcp")].nodePort}')
    ```