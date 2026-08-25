---
title: Troubleshoot backup and restore with the OADP CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Troubleshoot backup and restore with the OADP CLI {id="oadp-cli-tool"}
{%- set context = "oadp-cli-tool" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Use the {{ oadp_short }} CLI plugin for all backup and restore operations, including viewing logs and descriptions. You do not need to download the `velero` CLI tool to debug `Backup` and `Restore` custom resources (CRs) or troubleshoot failed operations. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-cli-installing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/velero-oadp-version-relationship.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-debugging-oc-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/migration-debugging-velero-resources.md" %}{% endleveloffset %}