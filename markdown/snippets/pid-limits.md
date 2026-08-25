{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

As of {{ product_title }} 4.11, the default per-pod PID limit is `4096`. If you want to enable this PID limit, you must upgrade your {{ product_title }} clusters to this version or later. {{ product_title }} clusters running versions earlier than 4.11 use a default PID limit of `1024`.

{% if openshift_rosa %}
You can configure the per-pod PID limit on a {{ product_title }} cluster by using the ROSA CLI. For more information, see "Configuring PID limits".
{% endif %}

{% if openshift_dedicated %}
You cannot configure the per-pod PID limit on any {{ product_title }} cluster.
{%- endif %}

:::