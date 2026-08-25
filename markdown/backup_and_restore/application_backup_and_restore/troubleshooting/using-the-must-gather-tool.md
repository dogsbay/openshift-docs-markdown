---
title: Using the must-gather tool
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using the must-gather tool {id="using-the-must-gather-tool"}
{%- set toc = true %}

{%- set context = "using-the-must-gather-tool" -%}
{%- set must_gather_v1_5 = "registry.redhat.io/oadp/oadp-mustgather-rhel9:v1.5" %}

Collect logs and information about {{ oadp_short }} custom resources by using the `must-gather` tool. The `must-gather` data must be attached to all customer cases. {._abstract}

The `must-gather` tool is a container and does not run all the time. The tool runs for a few minutes only after you start the tool by running the `must-gather` command.

{% leveloffset +1 %}{% include "./modules/using-must-gather.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Gathering cluster data](/support/gathering-cluster-data#gathering-cluster-data)