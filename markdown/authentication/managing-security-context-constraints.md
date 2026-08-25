---
title: Managing security context constraints
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing security context constraints {id="managing-pod-security-policies"}
{%- set context = "configuring-internal-oauth" %}

In {{ product_title }}, you can use security context constraints (SCCs) to control permissions for the pods in your cluster. {._abstract}

Default SCCs are created during installation and when you install some Operators or other components. As a cluster administrator, you can also create your own SCCs by using the OpenShift CLI (`oc`).


:::important

Do not modify the default SCCs. Customizing the default SCCs can lead to issues when some of the platform pods deploy or
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_title }}
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
ROSA
{%- endif %}
is upgraded. Additionally, the default SCC values are reset to the defaults during some cluster upgrades, which discards all customizations to those SCCs.
{%- if openshift_origin or openshift_enterprise or openshift_webscale or openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

Instead of modifying the default SCCs, create and modify your own SCCs as needed. For detailed steps, see [Creating security context constraints](/authentication/managing-security-context-constraints#security-context-constraints-creating_configuring-internal-oauth).
{%- endif %}

:::


{% if openshift_dedicated %}

:::note

In {{ product_title }} deployments, you can create your own SCCs only for clusters that use the Customer Cloud Subscription (CCS) model. You cannot create SCCs for {{ product_title }} clusters that use a Red Hat cloud account, because SCC resource creation requires `cluster-admin` privileges.

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-pre-allocated-values.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-requiring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-rbac.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-command-reference.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_configuring-internal-oauth" ._additional-resources}

{% if not openshift_rosa_hcp %}
*   [Getting support](/support/getting-support#getting-support)
{% endif %}
{% if openshift_rosa_hcp %}
*   [Getting support](/support/getting-support#getting-support)
{% endif %}