---
title: Backing up data from one cluster and restoring it to another cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Backing up data from one cluster and restoring it to another cluster {id="oadp-backing-up-data-one-cluster-restoring-another-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-backing-up-data-one-cluster-restoring-another-cluster" %}

Explore how to back up application data from one {{ product_title }} cluster and restore it to another cluster. While more complex than single-cluster operations, {{ oadp_full }} provides the tools to manage this cross-cluster data recovery.

{% leveloffset +1 %}{% include "./modules/oadp-about-backing-and-restoring-from-cluster-to-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-pod-volume-backup.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-backing-up-opt-in.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-backing-up-opt-out.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cluster-to-cluster-uid-and-gid-ranges.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-backing-and-restoring-from-cluster-to-cluster.md" %}{% endleveloffset %}

{%- set oadp_backing_up_data_one_cluster_restoring_another_cluster = false -%}