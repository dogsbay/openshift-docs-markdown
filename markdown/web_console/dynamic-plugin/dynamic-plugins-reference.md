---
title: Dynamic plugin reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Dynamic plugin reference {id="dynamic-plugins-reference_{{ context }}"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "dynamic-plugins-reference" %}

You can add extensions that allow you to customize your plugin. Those extensions are then loaded to the console at runtime.

{% leveloffset +1 %}{% include "./modules/dynamic-plugin-sdk-extensions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dynamic-plugin-api.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-dynamic-plugin.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
**Additional resources**

*   [Understanding service serving certificates](/security/certificates/service-serving-certificate#understanding-service-serving_service-serving-certificate)
{% endif %}