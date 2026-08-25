{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a proxy after installation {id="configuring-a-proxy-after-installation_{{ context }}"}

{% if openshift_dedicated %}
You can configure an HTTP or HTTPS proxy after you install an {{ product_title }} with Customer Cloud Subscription (CCS) cluster into an existing Virtual Private Cloud (VPC). You can configure the proxy after installation by using {{ cluster_manager_first }}.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
You can configure an HTTP or HTTPS proxy after you install a {{ product_title }} cluster into an existing Virtual Private Cloud (VPC). You can configure the proxy after installation by using {{ cluster_manager_first }} or the ROSA CLI (`rosa`).
{% endif %}