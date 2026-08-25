---
title: Understanding ephemeral storage
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding ephemeral storage {id="understanding-ephemeral-storage"}
{%- set context = "understanding-ephemeral-storage" %}

Ephemeral storage provides temporary per-pod storage for scratch data, caches, and logs that do not persist beyond the pod’s lifetime. Understanding different ephemeral storage types and resource management helps you choose options for stateless workloads while preventing node storage exhaustion. {._abstract}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-storage-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-storage-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-storage-manage-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-ephemeral-storage-manage-requests-and-limits.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**
{._additional-resources}

*   [Resources managed by quotas](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project_quotas-setting-per-project)
{% endif %}

{% leveloffset +2 %}{% include "./modules/storage-ephemeral-storage-manage-config-and-eviction.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-ephemeral-storage-monitoring.md" %}{% endleveloffset %}