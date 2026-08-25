---
title: Disabling the web console in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disabling the web console in {{ product_title }} {id="disabling-web-console"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "disabling-web-console" %}

You can disable the {{ product_title }} web console.

## Prerequisites {id="_prerequisites"}

*   Deploy  
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
an {{ product_title }} 
{% endif %}
{% if openshift_rosa_hcp %}
a {{ rosa_short }} 
{% endif %}
{% if openshift_rosa %}
a {{ rosa_classic_short }} 
{%- endif %}
cluster.

{% leveloffset +1 %}{% include "./modules/web-console-disable.md" %}{% endleveloffset %}