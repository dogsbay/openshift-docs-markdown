# Fixed issues {id="ossm-rn-fixed-issues-1x_{{ context }}"}

The following issues been resolved in the current release:

## {{ SMProductShortName }} fixed issues {id="ossm-rn-fixed-issues-ossm_{{ context }}"}

*   [MAISTRA-2371](https://issues.redhat.com/browse/MAISTRA-2371) Handle tombstones in listerInformer. The updated cache codebase was not handling tombstones when translating the events from the namespace caches to the aggregated cache, leading to a panic in the go routine.
*   [OSSM-542](https://issues.redhat.com/browse/OSSM-542) Galley is not using the new certificate after rotation.
*   [OSSM-99](https://issues.jboss.org/browse/OSSM-99) Workloads generated from direct pod without labels may crash Kiali.
*   [OSSM-93](https://issues.jboss.org/browse/OSSM-93) IstioConfigList can’t filter by two or more names.
*   [OSSM-92](https://issues.jboss.org/browse/OSSM-92) Cancelling unsaved changes on the VS/DR YAML edit page does not cancel the changes.
*   [OSSM-90](https://issues.jboss.org/browse/OSSM-90) Traces not available on the service details page.

*   [MAISTRA-1649](https://issues.redhat.com/projects/MAISTRA/issues/MAISTRA-1649) Headless services conflict when in different namespaces. When deploying headless services within different namespaces the endpoint configuration is merged and results in invalid Envoy configurations being pushed to the sidecars.
*   [MAISTRA-1541](https://issues.redhat.com/browse/MAISTRA-1541) Panic in kubernetesenv when the controller is not set on owner reference. If a pod has an ownerReference which does not specify the controller, this will cause a panic within the `kubernetesenv cache.go` code.
*   [MAISTRA-1352](https://issues.redhat.com/browse/MAISTRA-1352) Cert-manager Custom Resource Definitions (CRD) from the control plane installation have been removed for this release and future releases. If you have already installed {{ SMProductName }}, the CRDs must be removed manually if cert-manager is not being used.
*   [MAISTRA-1001](https://issues.jboss.org/browse/MAISTRA-1001) Closing HTTP/2 connections could lead to segmentation faults in `istio-proxy`.
*   [MAISTRA-932](https://issues.jboss.org/browse/MAISTRA-932) Added the `requires` metadata to add dependency relationship between Jaeger Operator and OpenShift Elasticsearch Operator. Ensures that when the Jaeger Operator is installed, it automatically deploys the OpenShift Elasticsearch Operator if it is not available.
*   [MAISTRA-862](https://issues.jboss.org/browse/MAISTRA-862) Galley dropped watches and stopped providing configuration to other components after many namespace deletions and re-creations.
*   [MAISTRA-833](https://issues.jboss.org/browse/MAISTRA-833) Pilot stopped delivering configuration after many namespace deletions and re-creations.
*   [MAISTRA-684](https://issues.jboss.org/browse/MAISTRA-684) The default Jaeger version in the `istio-operator` is 1.12.0, which does not match Jaeger version 1.13.1 that shipped in {{ SMProductName }} 0.12.TechPreview.
*   [MAISTRA-622](https://issues.jboss.org/browse/MAISTRA-622) In Maistra 0.12.0/TP12, permissive mode does not work. The user has the option to use Plain text mode or Mutual TLS mode, but not permissive.
*   [MAISTRA-572](https://issues.jboss.org/browse/MAISTRA-572) Jaeger cannot be used with Kiali. In this release Jaeger is configured to use the OAuth proxy, but is also only configured to work through a browser and does not allow service access. Kiali cannot properly communicate with the Jaeger endpoint and it considers Jaeger to be disabled. See also [TRACING-591](https://issues.jboss.org/browse/TRACING-591).
*   [MAISTRA-357](https://issues.jboss.org/browse/MAISTRA-357) In OpenShift 4 Beta on AWS, it is not possible, by default, to access a TCP or HTTPS service through the ingress gateway on a port other than port 80. The AWS load balancer has a health check that verifies if port 80 on the service endpoint is active. Without a service running on port 80, the load balancer health check fails.
*   [MAISTRA-348](https://issues.jboss.org/browse/MAISTRA-348) OpenShift 4 Beta on AWS does not support ingress gateway traffic on ports other than 80 or 443.  If you configure your ingress gateway to handle TCP traffic with a port number other than 80 or 443, you have to use the service hostname provided by the AWS load balancer rather than the OpenShift router as a workaround.
*   [MAISTRA-193](https://issues.jboss.org/browse/MAISTRA-193) Unexpected console info messages are visible when health checking is enabled for citadel.
*   [Bug 1821432](https://bugzilla.redhat.com/show_bug.cgi?id=1821432) Toggle controls in {{ product_title }} Control Resource details page do not update the CR correctly. UI Toggle controls in the Service Mesh Control Plane (SMCP) Overview page in the {{ product_title }} web console sometimes update the wrong field in the resource. To update a ServiceMeshControlPlane resource, edit the YAML content directly or update the resource from the command line instead of clicking the toggle controls.

## Kiali fixed issues {id="ossm-rn-fixed-issues-kiali_{{ context }}"}

*   [KIALI-3239](https://issues.jboss.org/browse/KIALI-3239) If a Kiali Operator pod has failed with a status of “Evicted” it blocks the Kiali operator from deploying. The workaround is to delete the Evicted pod and redeploy the Kiali operator.
*   [KIALI-3118](https://issues.jboss.org/browse/KIALI-3118) After changes to the ServiceMeshMemberRoll, for example adding or removing projects, the Kiali pod restarts and then displays errors on the Graph page while the Kiali pod is restarting.
*   [KIALI-3096](https://issues.jboss.org/browse/KIALI-3096) Runtime metrics fail in {{ SMProductShortName }}. There is an OAuth filter between the {{ SMProductShortName }} and Prometheus, requiring a bearer token to be passed to Prometheus before access is granted. Kiali has been updated to use this token when communicating to the Prometheus server, but the application metrics are currently failing with 403 errors.
*   [KIALI-3070](https://issues.jboss.org/browse/KIALI-3070) This bug only affects custom dashboards, not the default dashboards. When you select labels in metrics settings and refresh the page, your selections are retained in the menu but your selections are not displayed on the charts.
*   [KIALI-2686](https://github.com/kiali/kiali/issues/1603) When the control plane has many namespaces, it can lead to performance issues.