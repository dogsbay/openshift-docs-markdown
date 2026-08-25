{%- set _mod_docs_content_type = "REFERENCE" %}
# Known issues {id="ossm-rn-known-issues_{{ context }}"}

These limitations exist in {{ SMProductName }}:

*   {{ SMProductName }} does not yet fully support [IPv6](https://issues.redhat.com/browse/MAISTRA-1314). As a result, {{ SMProductName }} does not support dual-stack clusters.
*   Graph layout - The layout for the Kiali graph can render differently, depending on your application architecture and the data to display (number of graph nodes and their interactions). Because it is difficult if not impossible to create a single layout that renders nicely for every situation, Kiali offers a choice of several different layouts. To choose a different layout, you can choose a different **Layout Schema** from the **Graph Settings** menu.
*   The first time you access related services such as {{ JaegerShortName }} and Grafana, from the Kiali console, you must accept the certificate and re-authenticate using your {{ product_title }} login credentials. This happens due to an issue with how the framework displays embedded pages in the console.

{% if not (openshift_rosa_hcp or openshift_rosa) %}
*   The Bookinfo sample application cannot be installed on {{ ibm_power_name }}, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}.
*   WebAssembly extensions are not supported on {{ ibm_power_name }}, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}.
*   LuaJIT is not supported on {{ ibm_power_name }}, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}.
*   Single stack IPv6 support is not available on {{ ibm_power_name }}, {{ ibm_z_name }}, and {{ ibm_linuxone_name }}.
{% endif %}

## {{ SMProductShortName }} known issues {id="ossm-rn-known-issues-ossm_{{ context }}"}

These are the known issues in {{ SMProductName }}:
* [OSSM-5556](https://issues.redhat.com/browse/OSSM-5556) Gateways are skipped when istio-system labels do not match discovery selectors.

Workaround: Label the control plane namespace to match discovery selectors to avoid skipping the Gateway configurations.

.Example `ServiceMeshControlPlane` resource
```YAML
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: basic
  namespace: istio-system
spec:
  mode: ClusterWide
  meshConfig:
    discoverySelectors:
    - matchLabels:
        istio-discovery: enabled
  gateways:
    ingress:
      enabled: true
```

Then, run the following command at the command line:

```terminal
oc label namespace istio-system istio-discovery=enabled
```

*   [OSSM-3890](https://issues.redhat.com/browse/OSSM-3890) Attempting to use the Gateway API in a multitenant mesh deployment generates an error message similar to the following:
    ```text
    2023-05-02T15:20:42.541034Z	error	watch error in cluster Kubernetes: failed to list *v1alpha2.TLSRoute: the server could not find the requested resource (get tlsroutes.gateway.networking.k8s.io)
    2023-05-02T15:20:42.616450Z	info	kube	controller "gateway.networking.k8s.io/v1alpha2/TCPRoute" is syncing...
    ```

    To support Gateway API in a multitenant mesh deployment, all Gateway API Custom Resource Definition (CRD) files must be present in the cluster.

    In a multitenant mesh deployment, CRD scan is disabled, and Istio has no way to discover which CRDs are present in a cluster. As a result, Istio attempts to watch all supported Gateway API CRDs, but generates errors if some of those CRDs are not present.

    {{ SMProductShortName }} 2.3.1 and later versions support both `v1alpha2` and `v1beta1` CRDs. Therefore, both CRD versions must be present for a multitenant mesh deployment to support the Gateway API.

    Workaround: In the following example, the `kubectl get` operation installs the `v1alpha2` and `v1beta1` CRDs. Note the URL contains the additional `experimental` segment and updates any of your existing scripts accordingly:
    ```terminal
    $ kubectl get crd gateways.gateway.networking.k8s.io ||   { kubectl kustomize "github.com/kubernetes-sigs/gateway-api/config/crd/experimental?ref=v0.5.1" | kubectl apply -f -; }
    ```
*   [OSSM-2042](https://issues.redhat.com/browse/OSSM-2042) Deployment of SMCP named `default` fails. If you are creating an SMCP object, and set its version field to v2.3, the name of the object cannot be `default`. If the name is `default`, then the control plane fails to deploy, and OpenShift generates a `Warning` event with the following message:

    `Error processing component mesh-config: error: [mesh-config/templates/telemetryv2_1.6.yaml: Internal error occurred: failed calling webhook "rev.validation.istio.io": Post "https://istiod-default.istio-system.svc:443/validate?timeout=10s": x509: certificate is valid for istiod.istio-system.svc, istiod-remote.istio-system.svc, istio-pilot.istio-system.svc, not istiod-default.istio-system.svc, mesh-config/templates/enable-mesh-permissive.yaml`

*   [OSSM-1655](https://issues.redhat.com/browse/OSSM-1655) Kiali dashboard shows error after enabling mTLS in `SMCP`.

    After enabling the `spec.security.controlPlane.mtls` setting in the SMCP, the Kiali console displays the following error message `No subsets defined`.
*   [OSSM-1505](https://issues.redhat.com/browse/OSSM-1505) This issue only occurs when using the `ServiceMeshExtension` resource on OpenShift Container Platform 4.11. When you use `ServiceMeshExtension` on OpenShift Container Platform 4.11 the resource never becomes ready. If you inspect the issue using `oc describe ServiceMeshExtension` you will see the following error:  `stderr: Error creating mount namespace before pivot: function not implemented`.

    Workaround: `ServiceMeshExtension` was deprecated in {{ SMProductShortName }} 2.2. Migrate from `ServiceMeshExtension` to the `WasmPlugin` resource.
    For more information, see Migrating from `ServiceMeshExtension` to `WasmPlugin` resources.
*   [OSSM-1396](https://issues.redhat.com/browse/OSSM-1396) If a gateway resource contains the `spec.externalIPs` setting, instead of being recreated when the `ServiceMeshControlPlane` is updated, the gateway is removed and never recreated.
*   [OSSM-1168](https://issues.redhat.com/browse/OSSM-1168) When service mesh resources are created as a single YAML file, the Envoy proxy sidecar is not reliably injected into pods. When the SMCP, SMMR, and Deployment resources are created individually, the deployment works as expected.
*   [OSSM-1115](https://issues.redhat.com/browse/OSSM-1115) The `concurrency` field of the `spec.proxy` API did not propagate to the istio-proxy. The `concurrency` field works when set with `ProxyConfig`. The `concurrency` field specifies the number of worker threads to run. If the field is set to `0`, then the number of worker threads available is equal to the number of CPU cores. If the field is not set, then the number of worker threads available defaults to `2`.

    In the following example, the `concurrency` field is set to `0`.
    ```yaml
    apiVersion: networking.istio.io/v1beta1
    kind: ProxyConfig
    metadata:
      name: mesh-wide-concurrency
      namespace: <istiod-namespace>
    spec:
      concurrency: 0
    ```
*   [OSSM-1052](https://issues.redhat.com/browse/OSSM-1052) When configuring a Service `ExternalIP` for the ingressgateway in the {{ SMProductShortName }} control plane, the service is not created. The schema for the SMCP is missing the parameter for the service.

    Workaround: Disable the gateway creation in the SMCP spec and manage the gateway deployment entirely manually (including Service, Role and RoleBinding).

*   [OSSM-882](https://issues.redhat.com/browse/OSSM-882) This applies for {{ SMProductShortName }} 2.1 and earlier. Namespace is in the accessible_namespace list but does not appear in Kiali UI. By default, Kiali will not show any namespaces that start with "kube" because these namespaces are typically internal-use only and not part of a mesh.

    For example, if you create a namespace called 'akube-a' and add it to the Service Mesh member roll, then the Kiali UI does not display the namespace. For defined exclusion patterns, the software excludes namespaces that start with or contain the pattern.

    Workaround: Change the Kiali Custom Resource setting so it prefixes the setting with a carat (^). For example:
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
    ```yaml
    api:
      namespaces:
        exclude:
        - "^istio-operator"
        - "^kube-.*"
        - "^openshift.*"
        - "^ibm.*"
        - "^kiali-operator"
    ```
{% endif %}

{% if openshift_rosa_hcp or openshift_rosa %}
```yaml
api:
  namespaces:
    exclude:
    - "^istio-operator"
    - "^kube-.*"
    - "^openshift.*"
    - "^kiali-operator"
```
{%- endif %}
*   [MAISTRA-2692](https://issues.redhat.com/browse/MAISTRA-2692) With Mixer removed, custom metrics that have been defined in {{ SMProductShortName }} 2.0.x cannot be used in 2.1. Custom metrics can be configured using `EnvoyFilter`. Red Hat is unable to support `EnvoyFilter` configuration except where explicitly documented. This is due to tight coupling with the underlying Envoy APIs, meaning that backward compatibility cannot be maintained.
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
*   [MAISTRA-2648](https://issues.redhat.com/browse/MAISTRA-2648) Service mesh extensions are currently not compatible with meshes deployed on {{ ibm_z_name }}.
{% endif %}
*   [MAISTRA-1959](https://issues.jboss.org/browse/MAISTRA-1959) _Migration to 2.0_ Prometheus scraping (`spec.addons.prometheus.scrape` set to `true`) does not work when mTLS is enabled. Additionally, Kiali displays extraneous graph data when mTLS is disabled.

    This problem can be addressed by excluding port 15020 from proxy configuration, for example,
    ```yaml
    spec:
      proxy:
        networking:
          trafficControl:
            inbound:
              excludedPorts:
              - 15020
    ```
*   [MAISTRA-453](https://issues.jboss.org/browse/MAISTRA-453) If you create a new project and deploy pods immediately, sidecar injection does not occur. The operator fails to add the `maistra.io/member-of` before the pods are created, therefore the pods must be deleted and recreated for sidecar injection to occur.
*   [MAISTRA-158](https://issues.jboss.org/browse/MAISTRA-158) Applying multiple gateways referencing the same hostname will cause all gateways to stop functioning.

## Kiali known issues {id="ossm-rn-known-issues-kiali_{{ context }}"}


:::note

New issues for Kiali should be created in the [OpenShift Service Mesh](https://issues.redhat.com/projects/OSSM/) project with the `Component` set to `Kiali`.

:::


These are the known issues in Kiali:

*   [OSSM-6299](https://issues.redhat.com/browse/OSSM-6299) In {{ product_title }} 4.15, when you click the ***Node graph*** menu option of any node menu within the traffic graph, the node graph is not displayed. Instead, the page is refreshed with the same traffic graph. Currently, no workaround exists for this issue.
*   [OSSM-6298](https://issues.redhat.com/browse/OSSM-6298) When you click an item reference within the {{ SMPlugin }}, such as a workload link related to a specific service, the console sometimes performs multiple redirections before opening the desired page. If you click **Back** in a web browser, a different page of the console opens instead of the previous page. As a workaround, click **Back** twice to navigate to the previous page.
*   [OSSM-6290](https://issues.redhat.com/browse/OSSM-6290) For {{ product_title }} 4.15, the ***Project*** filter of the ***Istio Config*** list page does not work correctly. All `istio` items are displayed even if you select a specific project from the dropdown. Currently, no workaround exists for this issue.

*   [KIALI-2206](https://issues.jboss.org/browse/KIALI-2206) When you are accessing the Kiali console for the first time, and there is no cached browser data for Kiali, the “View in Grafana” link on the Metrics tab of the Kiali Service Details page redirects to the wrong location. The only way you would encounter this issue is if you are accessing Kiali for the first time.
*   [KIALI-507](https://github.com/kiali/kiali/issues/507) Kiali does not support Internet Explorer 11. This is because the underlying frameworks do not support Internet Explorer. To access the Kiali console, use one of the two most recent versions of the Chrome, Edge, Firefox or Safari browser.