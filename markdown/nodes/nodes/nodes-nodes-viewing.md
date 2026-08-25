---
title: Viewing and listing the nodes in your OpenShift Container Platform cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Viewing and listing the nodes in your {{ product_title }} cluster {id="nodes-nodes-viewing"}
{%- set context = "nodes-nodes-viewing" %}

You can list all the nodes in your cluster to obtain information such as status, age, memory usage, and details about the nodes. {._abstract}

When you perform node management operations, the CLI interacts with node objects that are representations of actual node hosts.
The master uses the information from node objects to validate nodes with health checks.

{% if openshift_rosa or openshift_rosa_hcp %}
{% include "./snippets/rosa-node-lifecycle.md" %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-viewing-listing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-viewing-listing-pods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-viewing-memory.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
{% endif %}
{% if openshift_rosa %}
*   [Node lifecycle](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-node-lifecycle_rosa-service-definition)
{% endif %}
{% if openshift_rosa_hcp %}
*   [Node lifecycle](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-service-definition#rosa-sdpolicy-node-lifecycle_rosa-hcp-service-definition)
{% endif %}