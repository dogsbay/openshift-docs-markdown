---
title: Configuring a dedicated network for live migration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring a dedicated network for live migration {id="virt-dedicated-network-live-migration"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-dedicated-network-live-migration" %}

You can configure a dedicated secondary network for live migration. A dedicated network minimizes the effects of network saturation on tenant workloads during live migration.

{% leveloffset +1 %}{% include "./modules/virt-configuring-secondary-network-vm-live-migration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-selecting-migration-network-ui.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Configuring live migration limits and timeouts](/virt/live_migration/virt-configuring-live-migration#virt-configuring-live-migration)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connecting a VM to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
{% endif %}