{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Working with quotas {id="working-with-quotas"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "working-with-quotas" %}

A resource quota, defined by a `ResourceQuota` object, limits aggregate resource consumption per project. You can limit the quantity of objects that you can create in a project by type, and the total amount of compute resources and storage consumed by resources in that project. {._abstract}

An _object quota count_ places a defined quota on all standard namespaced resource
types. When using a resource quota, an object is charged against the quota if it
exists in server storage. These types of quotas are useful to protect against
exhaustion of storage resources.

This guide describes how resource quotas work and how developers can work with
and view them.

{% leveloffset +1 %}{% include "./modules/quotas-viewing-quotas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-resources-managed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-scopes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-enforcement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-requests-vs-limits.md" %}{% endleveloffset %}