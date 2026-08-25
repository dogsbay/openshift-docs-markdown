{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a {{ product_title }} cluster with STS {id="rosa-getting-started-creating-a-cluster_{{ context }}"}

Choose from one of the following methods to deploy a {{ product_title }} cluster that uses the AWS Security Token Service (STS). In each scenario, you can deploy your cluster by using {{ cluster_manager_first }} or the {{ rosa_cli }} (`rosa`): {._abstract}

*   **Creating a {{ product_title }} cluster with STS using the default options**: You can create a {{ product_title }} cluster with STS quickly by using the default options and automatic STS resource creation.
*   **Creating a {{ product_title }} cluster with STS using customizations**: You can create a {{ product_title }} cluster with STS using customizations. You can also choose between the `auto` and `manual` modes when creating the required STS resources.