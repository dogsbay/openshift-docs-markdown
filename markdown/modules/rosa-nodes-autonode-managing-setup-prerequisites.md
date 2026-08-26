{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for setting up the {{ autonode }} {id="rosa-autonode-setup-prerequisites_{{ context }}"}

Before you set up the {{ autonode }}, ensure your environment meets the following requirements. {._abstract}

*   You have installed the {{ rosa_cli_first }} version 1.2.61 or later.
*   You have an {{ ocp_short }} cluster version 4.22.0 or later.
*   You have installed the `jq` CLI tool.
*   You have installed the `oc` CLI tool.
*   You have the required AWS Identity and Access Management (IAM) permissions to create policies and roles.


:::note

If you want to use Spot instances with Karpenter, you must configure your AWS account based on the AWS instructions. For more information, see _Additional resources_.

:::