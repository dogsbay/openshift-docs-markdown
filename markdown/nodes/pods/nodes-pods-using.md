---
title: Using pods
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-using-ssy" %}
# Using pods {id="nodes-pods-using-pp"}
{% include "./_attributes/common-attributes.md" %}

To run your application containers in {{ product_title }}, you must use pods. Pods allow you to group tightly coupled containers together on a single host for shared networking and storage.

{% leveloffset +1 %}{% include "./modules/nodes-pods-using-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-using-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-understanding-requests-limits.md" %}{% endleveloffset %}

{%- if not openshift_rosa_hcp %}
## Additional resources {id="_additional_resources"}

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Understanding ephemeral storage](/storage/understanding-ephemeral-storage#understanding-ephemeral-storage)
{% endif %}
*   [Example pod configurations](/nodes/pods/nodes-pods-using#nodes-pods-using-example_nodes-pods-using-ssy)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Huge pages](/post_installation_configuration/node-tasks#post-install-huge-pages_post-install-node-tasks)
{% endif %}