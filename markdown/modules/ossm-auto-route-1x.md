# Automatic route creation {id="ossm-auto-route-1x_{{ context }}"}

OpenShift routes for Istio Gateways are automatically managed in {{ SMProductName }}. Every time an Istio Gateway is created, updated or deleted inside the service mesh, an OpenShift route is created, updated or deleted.

## Enabling Automatic Route Creation {id="ossm-auto-route-enable_{{ context }}"}
A {{ SMProductName }} control plane component called Istio OpenShift Routing (IOR) synchronizes the gateway route. Enable IOR as part of the control plane deployment.

If the Gateway contains a TLS section, the OpenShift Route will be configured to support TLS.

1.  In the `ServiceMeshControlPlane` resource, add the `ior_enabled` parameter and set it to `true`. For example, see the following resource snippet:

```yaml
spec:
  istio:
    gateways:
     istio-egressgateway:
       autoscaleEnabled: false
       autoscaleMin: 1
       autoscaleMax: 5
     istio-ingressgateway:
       autoscaleEnabled: false
       autoscaleMin: 1
       autoscaleMax: 5
       ior_enabled: true
```

## Subdomains {id="ossm-auto-route-subdomains_{{ context }}"}

{{ SMProductName }} creates the route with the subdomain, but {{ product_title }} must be configured to enable it. Subdomains, for example `*.domain.com`, are supported but not by default. Configure an {{ product_title }} wildcard policy before configuring a wildcard host Gateway. For more information, see the "Links" section.

If the following gateway is created:

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

Then, the following OpenShift Routes are created automatically. You can check that the routes are created with the following command.

```terminal
$ oc -n <control_plane_namespace> get routes
```

```terminal title="Expected output"
NAME           HOST/PORT             PATH  SERVICES               PORT  TERMINATION   WILDCARD
gateway1-lvlfn bookinfo.example.com        istio-ingressgateway   <all>               None
gateway1-scqhv www.bookinfo.com            istio-ingressgateway   <all>               None
```

If the gateway is deleted, {{ SMProductName }} deletes the routes. However, routes created manually are never modified by {{ SMProductName }}.