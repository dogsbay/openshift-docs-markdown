{%- set _mod_docs_content_type = "CONCEPT" %}
# Install on Azure with customizations by using installer-provisioned infrastructure {id="install-on-azure-with-customizations-ipi-intro_{{ context }}"}

In {{ product_title }} version {{ product_version }}, you can install a cluster with a customized configuration or a customized network configuration on infrastructure that the installation program provisions on {{ azure_first }}. To install a cluster with customizations or with network customizations, modify parameters in the `install-config.yaml` file before you install the cluster.