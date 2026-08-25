{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrade changes from version 2.4 to version 2.5 {id="ossm-upgrade-24-25-changes_{{ context }}"}

## Istio OpenShift Routing (IOR) default setting change {id="_istio_openshift_routing_ior_default_setting_change"}

The default setting for Istio OpenShift Routing (IOR) has changed. The setting is now disabled by default.

You can use IOR by setting the `enabled` field to `true` in the `spec.gateways.openshiftRoute` specification of the `ServiceMeshControlPlane` resource.

```yaml
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
spec:
  gateways:
    openshiftRoute:
      enabled: true
```

## Istio proxy concurrency configuration enhancement {id="_istio_proxy_concurrency_configuration_enhancement"}

For consistency across deployments, Istio now configures the `concurrency` parameter based on the CPU limit allocated to the proxy container. For example, a limit of 2500m would set the `concurrency` parameter to 3. If you set the `concurrency` parameter to a value, Istio uses that value to configure how many threads the proxy runs instead of using the CPU limit. 

Previously, the default setting for the parameter was 2.