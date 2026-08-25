---
title: "Configuring the {{ oadp_first }} with more than one Volume Snapshot Location"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the {{ oadp_first }} with more than one Volume Snapshot Location {id="configuring-oadp-multiple-vsl"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-oadp-multiple-vsl" -%}
{%- set configuring_oadp_multiple_vsl = true %}

Configure multiple Volume Snapshot Locations (VSLs) in the Data Protection Application (DPA) to store volume snapshots across different cloud provider regions. This provides geographic redundancy and regional disaster recovery capabilities.

{% leveloffset +1 %}{% include "./modules/oadp-configuring-dpa-multiple-vsl.md" %}{% endleveloffset %}

{%- set configuring_oadp_multiple_vsl = false -%}