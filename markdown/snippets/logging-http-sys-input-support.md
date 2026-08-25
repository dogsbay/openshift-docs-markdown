{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

{{ feature_name }} is only supported for the following scenarios:

*   Logging is installed on {{ hcp }}. 
*   When logs originate from a Red&#160;Hat-supported product that is installed on the same cluster as the {{ CLO }}. For example:
    {%- if feature-name == "Syslog receiver input" %}
    *   Red Hat OpenStack Services on OpenShift (RHOSO)
        {%- endif %}
    *   {{ VirtProductName }}

:::