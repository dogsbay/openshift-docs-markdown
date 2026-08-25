---
title: "Configuring the {{ oadp_first }} with more than one Backup Storage Location"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the {{ oadp_first }} with more than one Backup Storage Location {id="configuring-oadp-multiple-bsl"}
{%- set context = "configuring-oadp-multiple-bsl" -%}
{%- set configuring_oadp_multiple_bsl = true %}

Configure multiple backup storage locations (BSLs) in the Data Protection Application (DPA) to store backups across different regions or storage providers. This provides flexibility and redundancy for your backup strategy. {._abstract}

{{ oadp_short }} supports multiple credentials for configuring more than one BSL, so that you can specify the credentials to use with any BSL.

{% leveloffset +1 %}{% include "./modules/oadp-configuring-dpa-multiple-bsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-changing-default-bsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-multiple-bsl-use-case.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating profiles for different credentials](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#oadp-aws-secrets-for-different-credentials_installing-oadp-aws)

{%- set configuring_oadp_multiple_bsl = "" -%}