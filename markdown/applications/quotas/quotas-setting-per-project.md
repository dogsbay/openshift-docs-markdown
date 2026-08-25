---
title: Resource quotas per project
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Resource quotas per project {id="quotas-setting-per-project"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "quotas-setting-per-project" %}

A resource quota, defined by a `ResourceQuota` object, limits aggregate resource consumption per project. It limits the quantity of objects that you can create in a project by type, and the total amount of compute resources and storage consumed by the resources in that project.

This guide describes how resource quotas work, how cluster administrators can set and manage resource quotas on a per project basis, and how developers and cluster administrators can view them.

{% leveloffset +1 %}{% include "./modules/quotas-resources-managed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-scopes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-enforcement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-requests-vs-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-sample-resource-quotas-def.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-creating-a-quota.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quotas-creating-object-count-quotas.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/setting-resource-quota-for-extended-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-viewing-quotas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-requiring-explicit-quota.md" %}{% endleveloffset %}