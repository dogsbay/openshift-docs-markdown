---
title: Estimating the number of pods your OpenShift Container Platform nodes can hold
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-resource-levels" %}
# Estimating the number of pods your {{ product_title }} nodes can hold {id="nodes-cluster-resource-levels"}
{% include "./_attributes/common-attributes.md" %}

As a cluster administrator, you can use the OpenShift Cluster Capacity Tool to view the number of pods that can be scheduled in your cluster. This allows you to increase the current resources before they become exhausted and to ensure any future pods can be scheduled. This capacity comes from an individual node host in a cluster, and includes CPU, memory, disk space, and others.

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-levels-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-levels-command.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-levels-job.md" %}{% endleveloffset %}

## Additional resources {id="nodes-cluster-resource-levels_additional-resources"}

*   [OpenShift Cluster Capacity Tool](https://catalog.redhat.com/software/containers/openshift4/ose-cluster-capacity/5cca0324d70cc57c44ae8eb6?container-tabs=overview)
*   [cluster-capacity repository](https://github.com/openshift/cluster-capacity)