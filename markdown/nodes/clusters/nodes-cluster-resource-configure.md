---
title: Configuring cluster memory for container requirements
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-resource-configure" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring cluster memory for container requirements {id="nodes-cluster-resource-configure"}

As a cluster administrator, you can manage application memory usage to help your clusters operate more efficiently.  {._abstract}

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
{._additional-resources}

*   [Understanding compute resources and containers](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-reserving-memory_nodes-cluster-overcommit)
*   [Tuning Java’s footprint in OpenShift (Part 1)](https://developers.redhat.com/blog/2014/07/15/dude-wheres-my-paas-memory-tuning-javas-footprint-in-openshift-part-1/)
*   [Tuning Java’s footprint in OpenShift (Part 2)](https://developers.redhat.com/blog/2014/07/22/dude-wheres-my-paas-memory-tuning-javas-footprint-in-openshift-part-2/)
*   [OpenJDK and Containers](https://developers.redhat.com/blog/2017/04/04/openjdk-and-containers/)
{% endif %}