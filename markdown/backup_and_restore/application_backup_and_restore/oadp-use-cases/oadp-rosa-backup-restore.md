---
title: Backing up workloads on OADP with OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up workloads on OADP with {{ product_title }} {id="oadp-rosa-backing-up-and-cleaning-example"}
{%- set context = "oadp-rosa-backing-up-and-cleaning-example" %}

To back up and restore workloads on
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
ROSA,
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }},
{%- endif %}
you can use {{ oadp_short }}. You can create a backup of a workload, restore it from the backup, and verify the restoration. You can also clean up the {{ oadp_short }} Operator, backup storage, and {{ aws_short }} resources when they are no longer needed. {._abstract}

{% leveloffset +1 %}{% include "./modules/performing-a-backup-oadp-rosa-sts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cleanup-a-backup-oadp-rosa-sts.md" %}{% endleveloffset %}