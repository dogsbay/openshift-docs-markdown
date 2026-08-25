{%- set _mod_docs_content_type = "REFERENCE" %}
# Adding worker nodes using the Assisted Installer API {id="ai-adding-worker-nodes-using-the-assisted-installer-api_{{ context }}"}

You can add worker nodes to clusters by writing command-line commands against the Assisted Installer REST API. This method provides an alternative to using the web console. {._abstract}

Before you add worker nodes, you must log in to [{{ cluster_manager }}](https://console.redhat.com/openshift/token/show) and authenticate against the API. After you authenticate, you can use the Assisted Installer REST API to add the nodes.