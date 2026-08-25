---
title: Prerequisites for virtualized control planes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Prerequisites for virtualized control planes {id="vcp-prerequisites"}
{%- set context = "vcp-prerequisites" %}

Before deploying a virtualized control plane cluster, ensure your environment meets the following requirements.

{%- set FeatureName = "KubeVirt Redfish" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/con_virt-vcp-hosting-cluster-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_virt-vcp-storage-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_virt-vcp-network-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_virt-vcp-control-plane-vm-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_virt-vcp-kubevirt-redfish-requirements.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Recommended resources for the agent-based installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-based-installer-recommended-resources_preparing-to-install-with-agent-based-installer)
*   [Effects of disk latency on etcd](/etcd/etcd-performance#etcd-disk-latency_etcd-performance)