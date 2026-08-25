---
title: "Destroying a hosted cluster on {{ aws_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Destroying a hosted cluster on {{ aws_short }} {id="hcp-destroy-aws"}
{%- set context = "hcp-destroy-aws" %}

You might want to remove a hosted cluster if you are no longer using it, you are trying to reduce resources, or the hosted cluster is experiencing issues that are difficult to resolve. {._abstract}

{% leveloffset +1 %}{% include "./modules/hcp-destroy-aws-cli.md" %}{% endleveloffset %}