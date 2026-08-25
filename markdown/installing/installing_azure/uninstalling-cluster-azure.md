---
title: Uninstalling a cluster on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Uninstalling a cluster on Azure {id="uninstalling-cluster-azure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "uninstall-cluster-azure" %}

When you no longer need an {{ product_title }} cluster on Microsoft Azure, you can uninstall the cluster and remove related cloud resources. Complete uninstallation so you avoid ongoing costs and leave no orphaned infrastructure.

{% leveloffset +1 %}{% include "./modules/installation-uninstall-clouds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-ccoctl-deleting-sts-resources.md" %}{% endleveloffset %}