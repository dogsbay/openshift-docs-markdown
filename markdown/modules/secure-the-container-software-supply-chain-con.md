{%- set _mod_docs_content_type = "CONCEPT" %}
# Secure the container software supply chain {id="secure-the-container-software-supply-chain-con_{{ context }}"}

Securing the path from source code to running container means starting from trusted base images, scanning what you add to them, rebuilding automatically when a dependency changes, and verifying signatures before deployment. Each checkpoint reduces the chance that unverified software reaches the cluster.