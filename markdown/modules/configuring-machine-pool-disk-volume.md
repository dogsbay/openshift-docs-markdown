{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring machine pool disk volume {id="configuring-machine-pool-disk-volume_{{ context }}"}

Machine pool disk volume size can be configured for additional flexibility. The default disk size is 300 GiB.

{% if openshift_rosa %}
For {{ product_title }} clusters version 4.13 or earlier, the disk size can be configured from a minimum of 128 GiB to a maximum of 1 TiB. For version 4.14 and later, the disk size can be configured to a minimum of 128 GiB to a maximum of 16 TiB.
{% endif %}

{% if openshift_rosa_hcp %}
For {{ product_title }} clusters, the disk size can be configured from a minimum of 75 GiB to a maximum of 16,384 GiB.
{% endif %}

You can configure the machine pool disk size for your cluster by using {{ cluster_manager }} or the {{ rosa_cli_first }}.


:::note

Existing cluster and machine pool node volumes cannot be resized.

:::