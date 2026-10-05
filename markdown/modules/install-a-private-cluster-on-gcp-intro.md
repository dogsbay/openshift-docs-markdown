{%- set _mod_docs_content_type = "CONCEPT" %}
# Install a private cluster on GCP {id="install-a-private-cluster-on-gcp-intro_{{ context }}"}

In {{ product_title }} version {{ product_version }}, you can install a private cluster into an existing VPC on {{ gcp_first }} with customizations by using installer-provisioned infrastructure. A private cluster keeps its endpoints internal, preventing direct internet exposure.