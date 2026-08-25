{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring user-defined tags for {{ azure_short }} {id="installing-azure-user-defined-tags_{{ context }}"}

In {{ product_title }}, you can use tags for grouping resources and for managing resource access and cost. Tags are applied only to the resources created by the {{ product_title }} installation program and its core Operators such as Machine API Operator, Cluster Ingress Operator, Cluster Image Registry Operator. The {{ product_title }} consists of the following types of tags:


{{ product_title }} tags
:   By default, {{ product_title }} installation program attaches the {{ product_title }} tags to the {{ azure_short }} resources. These {{ product_title }} tags are not accessible to the users. The format of the {{ product_title }} tags is `kubernetes.io_cluster.<cluster_id>:owned`, where `<cluster_id>` is the value of `.status.infrastructureName` in the infrastructure resource for the cluster.


User-defined tags
:   User-defined tags are manually created in `install-config.yaml` file during installation. When creating the user-defined tags, you must consider the following points:

    *   User-defined tags on {{ azure_short }} resources can only be defined during {{ product_title }} cluster creation, and cannot be modified after the cluster is created.
*   Support for user-defined tags is available only for the resources created in the {{ azure_short }} Public Cloud.
*   User-defined tags are not supported for the {{ product_title }} clusters upgraded to {{ product_title }} {{ product_version }}.