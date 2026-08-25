---
title: Accessing the web console
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Accessing the web console {id="web-console"}

{%- set context = "web-console" %}

The {{ product_title }} web console is a user interface accessible from a web browser. You can use the web console to visualize, browse, and manage the contents of projects. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You must use one of the following supported web browsers: Edge, Chrome, Safari, or Mozilla Firefox. Internet Explorer 11 and earlier is not supported.
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   Review the {{ product_title }} 4.x Tested Integrations page before you create the supporting infrastructure for your cluster.
{%- endif %}

{% leveloffset +1 %}{% include "./modules/web-console-overview.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} 4.x Tested Integrations](https://access.redhat.com/articles/4128421)
*   [Enabling feature sets using the web console](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
{% endif %}