---
title: Allocating resources for nodes in an OpenShift Container Platform cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Allocating resources for nodes in an {{ product_title }} cluster {id="nodes-nodes-resources-configuring"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nodes-nodes-resources-configuring" %}

By default, upon node start up {{ product_title }} automatically calculates and reserves a portion of the CPU and memory resources for use by the underlying node components, such as `kubelet` and `kube-proxy`, and the remaining system components, such as `sshd` and `NetworkManager`. Review the information in this section to determine if these automatic settings are appropriate for your cluster.

You can modify the CPU and memory resources for these node and system components, as needed, by creating a `Kubelet Config` CR.


:::important

If you updated your cluster from a version earlier than 4.21, automatic allocation of system resources is disabled by default. To enable the feature, delete the `50-worker-auto-sizing-disabled` machine config. 

:::


{% leveloffset +1 %}{% include "./modules/nodes-nodes-resources-configuring-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sd-understanding-process-id-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/risks-setting-higher-process-id-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-resources-configuring-setting.md" %}{% endleveloffset %}

## Additional resources {id="nodes-nodes-resources-configuring_additional-resources"}

*   [Creating a KubeletConfig CR to edit kubelet parameters](/machine_configuration/machine-configs-custom#create-a-kubeletconfig-crd-to-edit-kubelet-parameters_machine-configs-custom)
*   [Node metrics data (Kubernetes documentation)](https://kubernetes.io/docs/reference/instrumentation/node-metrics/)