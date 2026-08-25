---
title: Usage of oc and kubectl commands
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Usage of oc and kubectl commands {id="usage-oc-kubectl"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "usage-oc-kubectl" %}

Because {{ product_title }} is a certified Kubernetes distribution, you can use the Kubernetes CLI (`kubectl`) that ships with {{ product_title }} to interact with your cluster. You can also gain extended functionality specific to {{ product_title }} by using the {{ oc_first }} binary.

{% leveloffset +1 %}{% include "./modules/oc-usage-oc.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**

*   [Understanding authentication](/authentication/understanding-authentication#understanding-authentication)
{% endif %}

{% leveloffset +1 %}{% include "./modules/oc-usage-kubectl.md" %}{% endleveloffset %}

**Additional resources**

*   [kubectl (Kubernetes documentation)](https://kubernetes.io/docs/reference/kubectl/overview/)
*   [Getting started with the OpenShift CLI](/cli_reference/openshift_cli/getting-started-cli#cli-getting-started)