{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ product_title }} infrastructure components {id="infrastructure-components_{{ context }}"}

To reduce subscription costs, you can review the following information to understand which components you can move to an infrastructure node. Components that you move to an infrastructure node do not need to be accounted for during sizing. {._abstract}

Each self-managed Red&#160;Hat OpenShift subscription includes entitlements for {{ product_title }} and other OpenShift-related components. These entitlements are included for running {{ product_title }} control plane and infrastructure workloads and do not need to be accounted for during sizing.

To qualify as an infrastructure node and use the included entitlement, only components that are supporting the cluster, and not part of an end-user application, can run on those instances. Examples include the following components:

*   Kubernetes and {{ product_title }} control plane services
*   The default router
*   The integrated container image registry
*   The HAProxy-based Ingress Controller
*   The cluster metrics collection, or monitoring service, including components for monitoring user-defined projects
*   Cluster aggregated logging
*   {{ quay }}
*   {{ rh_storage_first }}
*   Red Hat Advanced Cluster Management for Kubernetes
*   Red Hat Advanced Cluster Security for Kubernetes
*   Red Hat OpenShift GitOps
*   Red Hat OpenShift Pipelines
*   {{ SMProductName }}

Any node that runs any other container, pod, or component is a worker node that your subscription must cover.

For information about infrastructure nodes and which components can run on infrastructure nodes, see the "Red Hat OpenShift control plane and infrastructure nodes" section in the OpenShift sizing and subscription guide for enterprise Kubernetes document.