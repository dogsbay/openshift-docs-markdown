{%- set _mod_docs_content_type = "PROCEDURE" %}
# Use a Bash script {id="rosa-using-bash-script_{{ context }}"}

This example workflow shows how to use a Bash script with the {{ rosa_cli_first }}. {._abstract}

**Prerequisites**

Make sure that AWS credentials are available as one of the following options:

*   AWS profile
*   Environment variables (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`)

**Procedure**

1.  Initialize `rosa` using a {{ cluster_manager_first }} offline token [from Red&#160;Hat](https://console.redhat.com/openshift/token/rosa):
    ```terminal
    $ rosa init --token=<token>
    ```
1.  Create the {{ product_title }} cluster:
    ```terminal
    $ rosa create cluster --cluster-name=<cluster_name>
    ```
1.  Add an identity provider (IDP):
    ```terminal
    $ rosa create idp --cluster=<cluster_name> --type=<identity_provider> [arguments]
    ```
1.  Add a `dedicated-admin` user:
    ```terminal
    $ rosa grant user dedicated-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```