---
title: Including a self-signed CA certificate during backup
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Including a self-signed CA certificate during backup {id="oadp-use-case-enable-ca-cert"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-use-case-enable-ca-cert" %}

You can include a self-signed Certificate Authority (CA) certificate in the Data Protection Application (DPA) and then back up an application. You store the backup in a NooBaa bucket provided by {{ odf_first }}.

{% leveloffset +1 %}{% include "./modules/oadp-usecase-include-ca-cert-backup.md" %}{% endleveloffset %}