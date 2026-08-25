---
title: Installing the File Integrity Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the File Integrity Operator {id="installing-file-integrity-operator"}
{%- set context = "file-integrity-operator-installation" %}

Install the File Integrity Operator on your cluster by using the {{ product_title }} web console or the {{ oc_first }}. {._abstract}


:::important

All cluster nodes must have the same release version in order for this Operator to function properly.
As an example, for nodes running {{ op_system }}, all nodes must have the same {{ op_system }} version.

:::


{% leveloffset +1 %}{% include "./modules/file-integrity-operator-installing-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/file-integrity-operator-installing-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-installing-the-file-integrity-operator" ._additional-resources}

*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)