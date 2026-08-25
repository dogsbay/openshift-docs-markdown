---
title: OADP installation issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# OADP installation issues {id="oadp-installation-issues"}
{%- set toc = true %}

{%- set context = "installation-issues" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Resolve common installation issues with the Data Protection Application (DPA), such as invalid backup storage directories and incorrect cloud provider credentials. This helps you successfully install and configure {{ oadp_short }} in your environment. {._abstract}

{% leveloffset +1 %}{% include "./modules/resolving-backup-storage-contains-invalid-directories-issue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolving-incorrect-aws-credentials-issue.md" %}{% endleveloffset %}