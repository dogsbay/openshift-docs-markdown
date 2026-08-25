---
title: Supported limits
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Supported limits {id="virt-supported-limits"}
{%- set context = "virt-supported-limits" %}

Refer to tested object maximums when planning your environment for your specific use case, and consider all factors that can impact cluster scaling. For information options that impact performance, see the "{{ VirtProductName }} - Tuning & Scaling Guide" in the Red&#160;Hat Knowledgebase. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-tested-maximums.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [{{ VirtProductName }} - Tuning & Scaling Guide](https://access.redhat.com/articles/6994974)
*   [Virtualization limits for Red Hat&#160;Enterprise Linux with KVM](https://access.redhat.com/articles/rhel-kvm-limits)
*   [Planning your environment according to object maximums](/scalability_and_performance/planning-your-environment-according-to-object-maximums#planning-your-environment-according-to-object-maximums)
*   [Managing the maximum number of pods per node](/nodes/nodes/nodes-nodes-managing-max-pods#nodes-nodes-managing-max-pods)
*   [{{ rh_rhacm_title }} documentation](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes)