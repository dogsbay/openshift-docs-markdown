---
title: Getting support
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Getting support {id="getting-support"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "getting-support" %}

To resolve issues with your {{ product_title }} cluster, you can search the Red&#160;Hat Knowledgebase, submit a support case, and use remote health monitoring tools. {._abstract}

{% leveloffset +1 %}{% include "./modules/support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-knowledgebase-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-knowledgebase-search.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-submitting-a-case.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin) %}
{% leveloffset +1 %}{% include "./modules/about-self-service-tsr.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="getting-support-additional-resources" ._additional-resources}

*   [Using {{ red_hat_lightspeed }} to identify issues with your cluster](/support/remote_health_monitoring/using-insights-to-identify-issues-with-your-cluster#using-insights-to-identify-issues-with-your-cluster)