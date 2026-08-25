---
title: Enabling descheduler evictions on virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling descheduler evictions on virtual machines {id="virt-enabling-descheduler-evictions"}
{%- set context = "virt-enabling-descheduler-evictions" %}

{%- set FeatureName = "Descheduler eviction for virtual machines" %}

You can use the descheduler to evict pods so that the pods can be rescheduled onto more appropriate nodes. If the pod is a virtual machine, the pod eviction causes the virtual machine to be live migrated to another node. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-profiles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-descheduler-evictions.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Descheduler overview](/nodes/scheduling/descheduler/index#nodes-descheduler-about)