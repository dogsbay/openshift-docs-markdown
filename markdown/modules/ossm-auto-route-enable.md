{%- set _mod_docs_content_type = "REFERENCE" %}
# Disabling automatic route creation {id="ossm-auto-route-enable_{{ context }}"}

By default, the `ServiceMeshControlPlane` resource automatically synchronizes the Istio gateway resources with OpenShift routes. Disabling the automatic route creation allows you more flexibility to control routes if you have a special case or prefer to control routes manually.

## Disabling automatic route creation for specific cases {id="disabling-automatic-route-creation-specific-cases_{{ context }}"}

If you want to disable the automatic management of OpenShift routes for a specific Istio gateway, you must add the annotation `maistra.io/manageRoute: false` to the gateway metadata definition. {{ SMProductName }} will ignore Istio gateways with this annotation, while keeping the automatic management of the other Istio gateways.

## Disabling automatic route creation for all cases {id="disabling-automatic-route-creation-all-cases_{{ context }}"}

You can disable the automatic management of OpenShift routes for all gateways in your mesh.

Disable integration between Istio gateways and OpenShift routes by setting the `ServiceMeshControlPlane` field `gateways.openshiftRoute.enabled` to `false`. For example, see the following resource snippet.

```yaml
apiVersion: maistra.io/v1alpha1
kind: ServiceMeshControlPlane
metadata:
  namespace: istio-system
spec:
  gateways:
    openshiftRoute:
      enabled: false
```