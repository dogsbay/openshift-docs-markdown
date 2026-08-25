---
title: Using bound service account tokens
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using bound service account tokens {id="bound-service-account-tokens"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "bound-service-account-tokens" %}

You can use bound service account tokens, which improve the ability to integrate with cloud provider identity access management (IAM) services such as {{ product_title }} on {{ aws_short }} IAM or {{ gcp_full }} IAM.

{% leveloffset +1 %}{% include "./modules/bound-sa-tokens-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bound-sa-tokens-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bound-sa-tokens-configuring-externally.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Rebooting a node gracefully](/nodes/nodes/nodes-nodes-rebooting#nodes-nodes-rebooting-gracefully_nodes-nodes-rebooting)
{% endif %}
*   [Creating service accounts](/authentication/understanding-and-creating-service-accounts#service-accounts-managing_understanding-service-accounts)