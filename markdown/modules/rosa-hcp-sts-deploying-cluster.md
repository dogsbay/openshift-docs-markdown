{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy a {{ product_title }} cluster {id="rosa-hcp-sts-deploying-cluster_{{ context }}"}

During the cluster creation process, the {{ rosa_cli_first }} creates the required JSON files for you and outputs the commands you need, and if necessary, it can also run the commands for you. The {{ rosa_cli }} can automatically create the roles, or you can manually create them by using the `--mode manual` or `--mode auto` flags. {._abstract}

Deploying a {{ product_title }} cluster consists of the following general steps.

**Procedure**

1.  Create the account-wide roles.
1.  Create the Operator roles.
    *   Red&#160;Hat uses AWS IAM STS to send the required permissions to AWS that allow AWS to create and attach the corresponding AWS-managed Operator policies.
1.  Create the OIDC provider.
1.  Create the cluster.