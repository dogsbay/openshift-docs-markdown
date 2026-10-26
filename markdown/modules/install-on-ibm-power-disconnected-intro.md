{%- set _mod_docs_content_type = "CONCEPT" %}
# Install on IBM Power in a disconnected environment {id="install-on-ibm-power-disconnected-intro_{{ context }}"}

You can install {{ product_title }} on {{ ibm_power_name }} infrastructure that you provision in a disconnected environment by mirroring the required release images to an internal registry and then running the installation program. {._abstract}


:::important

Additional considerations exist for non-bare metal platforms. Review the guidelines for deploying {{ product_title }} on non-tested platforms before you install an {{ product_title }} cluster.

:::