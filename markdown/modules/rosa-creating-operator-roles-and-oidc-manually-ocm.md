{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating the Operator roles and OIDC provider using {{ cluster_manager }} {id="rosa-creating-operator-roles-and-oidc-manually-ocm_{{ context }}"}

If you use {{ cluster_manager_first }} to install your cluster and opt to create the required AWS IAM Operator roles and the OIDC provider using `manual` mode, you are prompted to select one of the following methods to install the resources. The options are provided to enable you to choose a resource creation method that suits the needs of your organization: {._abstract}


AWS CLI (`aws`)
:   With this method, you can download and extract an archive file that contains the `aws` commands and policy files required to create the IAM resources. Run the provided CLI commands from the directory that contains the policy files to create the Operator roles and the OIDC provider.


The {{ product_title }} (ROSA) CLI, `rosa`
:   You can run the commands provided by this method to create the Operator roles and the OIDC provider for your cluster using `rosa`.

If you use `auto` mode, {{ cluster_manager }} creates the Operator roles and the OIDC provider automatically, using the permissions provided through the {{ cluster_manager }} IAM role. To use this feature, you must apply admin privileges to the role.