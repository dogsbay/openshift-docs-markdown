---
title: Accessing hosts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Accessing hosts {id="accessing-hosts"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "accessing-hosts" %}

To establish secure administrative access to {{ product_title }} instances and control plane nodes, create a bastion host.

Configuring a bastion host provides an entry point for Secure Shell (SSH) traffic, ensuring that your cluster remains protected while allowing for remote management.

{% leveloffset +1 %}{% include "./modules/accessing-hosts-on-aws.md" %}{% endleveloffset %}