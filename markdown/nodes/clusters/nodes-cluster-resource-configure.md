---
title: Configuring cluster memory to meet container memory and risk requirements
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-resource-configure" %}
# Configuring cluster memory to meet container memory and risk requirements {id="nodes-cluster-resource-configure"}
{% include "./_attributes/common-attributes.md" %}

As a cluster administrator, you can manage application memory usage to help your clusters operate more efficiently. 

You can perform any of the following tasks to manage application memory:

*   Determine the memory and risk requirements of a containerized application component and configuring the container memory parameters to suit those requirements.
*   Configure containerized application runtimes (for example, OpenJDK) to adhere optimally to the configured container memory parameters.
*   Diagnose and resolve memory-related error conditions associated with running in a container.

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-configure-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-configure-jdk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-configure-request-limit.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-configure-oom.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-configure-evicted.md" %}{% endleveloffset %}

{% if openshift_origin or openshift_online or openshift_webscale or openshift_enterprise %}
**Additional resources**

*   [Understanding compute resources and containers](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-reserving-memory_nodes-cluster-overcommit)
{% endif %}