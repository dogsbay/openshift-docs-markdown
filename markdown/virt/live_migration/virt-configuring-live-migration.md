---
title: Configuring live migration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring live migration {id="virt-configuring-live-migration"}


{%- set context = "virt-configuring-live-migration" %}

You can configure live migration settings to ensure that the migration processes do not overwhelm the cluster. You can configure live migration policies to apply different migration configurations to groups of virtual machines (VMs). {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-configuring-live-migration-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-live-migration-heavy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-live-migration-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-a-live-migration-policy.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Configuring a dedicated network for live migration](/virt/vm_networking/virt-dedicated-network-live-migration#virt-configuring-secondary-network-vm-live-migration_virt-dedicated-network-live-migration)
{% endif %}