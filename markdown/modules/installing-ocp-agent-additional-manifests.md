{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating additional manifest files {id="installing-ocp-agent-opt-manifests_{{ context }}"}

As an optional task, you can create additional manifests to further configure your cluster beyond the configurations available in the `install-config.yaml` and `agent-config.yaml` files. {._abstract}


:::important

Customizations to the cluster made by additional manifests are not validated, are not guaranteed to work, and might result in a nonfunctional cluster.

:::