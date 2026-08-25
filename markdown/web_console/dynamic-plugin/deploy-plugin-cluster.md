---
title: Deploy your plugin on a cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Deploy your plugin on a cluster {id="deploy-plugin-cluster_{{ context }}"}

{%- set context = "deploy-plugin-cluster" %}

You can deploy the plugin to  
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
an {{ product_title }} 
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa %}
a {{ product_title }} 
{%- endif %}
cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/build-image-docker.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployment-plug-in-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dynamic-plugin-proxy-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_enabling-dynamic-plugin-using-cli.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

**Additional resources**
{._additional-resources}

*   [Service CA certificates](/security/certificate_types_descriptions/service-ca-certificates#service-ca-certificates)
*   [Securing service traffic using service serving certificate secrets](/security/certificates/service-serving-certificate#service-serving-certificate)
*   [Dynamic plugin API](/web_console/dynamic-plugin/dynamic-plugins-reference#dynamic-plugin-api_dynamic-plugins-reference)
{% endif %}

{% leveloffset +1 %}{% include "./modules/disabling-plug-in-browser.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="dynamic-plugins_additional-resources" ._additional-resources}

*   [Understanding Helm](/applications/working_with_helm_charts/understanding-helm#understaning-helm)
{% endif %}