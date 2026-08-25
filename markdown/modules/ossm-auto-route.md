{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating subdomain routes {id="ossm-auto-route-create-subdomains_{{ context }}"}

The following example creates a gateway in the Bookinfo sample application, which creates subdomain routes.

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: gateway1
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - www.bookinfo.com
    - bookinfo.example.com
```

The `Gateway` resource creates the following OpenShift routes. You can check that the routes are created by using the following command. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.

```terminal
$ oc -n istio-system get routes
```

```terminal title="Expected output"
NAME           HOST/PORT             PATH  SERVICES               PORT  TERMINATION   WILDCARD
gateway1-lvlfn bookinfo.example.com        istio-ingressgateway   <all>               None
gateway1-scqhv www.bookinfo.com            istio-ingressgateway   <all>               None
```

If you delete the gateway, {{ SMProductName }} deletes the routes. However, routes you have manually created are never modified by {{ SMProductName }}.