{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing the OpenShift Update Service Operator {id="update-service-install_{{ context }}"}

To install the OpenShift Update Service, you must first install the OpenShift Update Service Operator by using the {{ product_title }} web console or CLI. {._abstract}


:::note

For clusters that are installed in disconnected environments, also known as disconnected clusters, Operator Lifecycle Manager by default cannot access the Red Hat-provided software catalog sources hosted on remote registries because those remote sources require full internet connectivity. For more information, see "Using Operator Lifecycle Manager in disconnected environments".

:::