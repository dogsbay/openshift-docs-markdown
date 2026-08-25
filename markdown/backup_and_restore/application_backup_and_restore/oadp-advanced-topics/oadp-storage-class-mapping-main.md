---
title: OADP storage class mapping
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OADP storage class mapping {id="oadp-storage-class-mapping-main"}
{%- set context = "oadp-storage-class-mapping-main" %}

Map your storage classes with {{ oadp_full }} to define rules for how different data types are stored. This helps you automate storage assignments to optimize cost and efficiency during backup and restore operations. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-storage-class-mapping.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-storage-class-mapping-oadp.md" %}{% endleveloffset %}

{%- set oadp_storage_class_mapping_main = "" -%}