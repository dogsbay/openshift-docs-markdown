{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a {{ gcp_short }} project {id="installation-gcp-project_{{ context }}"}

To install {{ product_title }}, you must create a project in your {{ gcp_first }} account to host the cluster.

**Procedure**

*   Create a project to host your {{ product_title }} cluster. See
[Creating and Managing Projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects) in the {{ gcp_short }} documentation.

    :::important

    Your {{ gcp_short }} project must use the Premium Network Service Tier if you are using installer-provisioned infrastructure. The Standard Network Service Tier is not supported for clusters installed using the installation program. The installation program configures internal load balancing for the `api-int.<cluster_name>.<base_domain>` URL; the Premium Tier is required for internal load balancing.
    
    :::