---
title: Scheduling Windows container workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Scheduling Windows container workloads {id="scheduling-windows-workloads"}
{%- set context = "scheduling-windows-workloads" %}

You can use the Windows Machine Config Operator (WMCO) to schedule Windows workloads to Windows compute nodes. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You are using a Windows container as the OS image.
*   You have created a Windows compute machine set.

{% leveloffset +1 %}{% include "./modules/windows-pod-placement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-runtimeclass.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sample-windows-workload-deployment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/wmco-supported-csi-drivers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-manually-scaling.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Host and container version compatibility (Microsoft Windows documentation)](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/update-containers#host-and-container-version-compatibility)
*   [Pod OS (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/pods/#pod-os)
*   [Windows container version compatibility (Microsoft Windows documentation)](https://learn.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/version-compatibility?tabs=windows-server-2022%2Cwindows-11-21H2)
*   [CSI Proxy (Kubernetes GitHub)](https://github.com/kubernetes-csi/csi-proxy)
*   [Production Drivers (Kubernetes CSI Developer Documentation)](https://kubernetes-csi.github.io/docs/drivers.html#production-drivers)
*   [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{%- endif %}
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)