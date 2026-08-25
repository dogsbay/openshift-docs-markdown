---
title: About live migration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About live migration {id="virt-about-live-migration"}
{%- set context = "virt-about-live-migration" %}

Live migration moves a running virtual machine to another node without interrupting the workload. It enables smooth transitions during cluster upgrades and node maintenance. Traffic is encrypted using TLS by default. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-live-migration-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-live-migration-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-preserving-lm-perms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-granting-live-migration-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-vm-migration-tuning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-vm-migration-dual-stream.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Default cluster roles for {{ VirtProductName }}](/virt/about_virt/virt-security-policies#default-cluster-roles-for-virt_virt-security-policies)
*   [Prometheus queries for live migration](/virt/monitoring/virt-prometheus-queries#virt-live-migration-metrics_virt-prometheus-queries)
*   [Configure eviction and run strategies](/virt/nodes/virt-eviction-strategies#virt-eviction-strategies)