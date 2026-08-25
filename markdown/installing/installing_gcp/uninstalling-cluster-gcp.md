---
title: "Uninstalling a cluster on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling a cluster on {{ gcp_short }} {id="uninstalling-cluster-gcp"}
{%- set context = "uninstalling-cluster-gcp" %}

You can remove a cluster that you deployed to {{ gcp_first }} and delete the associated cloud provider resources when you no longer need the cluster, to free up cloud resources and stop incurring costs. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-uninstall-clouds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-ccoctl-deleting-sts-resources.md" %}{% endleveloffset %}