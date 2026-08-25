---
title: Configuring the web console in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the web console in {{ product_title }} {id="configuring-web-console"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "configuring-web-console" %}

You can change the {{ product_title }} web console to set a logout redirect URL or disable the quick start tutorials.

## Prerequisites {id="_prerequisites"}

*   Deploy an {{ product_title }} cluster.

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/web-console-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disable-quickstarts-admin-console.md" %}{% endleveloffset %}

{% endif %}