---
title: Using device plugins to access external resources with pods
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-device" %}
# Using device plugins to access external resources with pods {id="nodes-pods-device"}
{% include "./_attributes/common-attributes.md" %}

Device plugins allow you to use a particular device type (GPU, InfiniBand,
or other similar computing resources that require vendor-specific initialization
and setup) in your {{ product_title }} pod without needing to write custom code.

{% leveloffset +1 %}{% include "./modules/nodes-pods-plugins-about.md" %}{% endleveloffset %}

**Additional resources**

*   [Nvidia GPU device plugin for COS-based operating system](https://github.com/GoogleCloudPlatform/Container-engine-accelerators/tree/master/cmd/nvidia_gpu)
*   [Nvidia official GPU device plugin](https://github.com/NVIDIA/k8s-device-plugin)
*   [Solarflare device plugin](https://github.com/vikaschoudhary16/sfc-device-plugin)
*   [KubeVirt device plugins: vfio and kvm](https://github.com/kubevirt/kubernetes-device-plugins)
*   [Kubernetes device plugin for {{ ibm_name }} Crypto Express (CEX) cards](https://github.com/ibm-s390-cloud/k8s-cex-dev-plugin)

{% leveloffset +1 %}{% include "./modules/nodes-pods-plugins-device-mgr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-plugins-install.md" %}{% endleveloffset %}