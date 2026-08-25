{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an external authentication provider {id="rosa-hcp-sts-creating-a-cluster-external-auth-provider-delete-cli_{{ context }}"}
{%- set source_highlighter = "pygments" -%}
{%- set pygments_style = "emacs" -%}
{%- set icons = "font" %}

Delete external authentication providers by using the ROSA CLI.

**Procedure**

1.  Display your external authentication provider on your cluster by running the following command:
    ```terminal
    $ rosa list external-auth-provider -c <cluster_name>
    ```
    ```terminal title="Example output"
    NAME        ISSUER URL
    entra-test  https://login.microsoftonline.com/<group_id>/v2.0
    ```
1.  Delete the external authentication provider by running the following command:
    ```terminal
    $ rosa delete external-auth-provider <name_of_provider> -c <cluster_name>
    ```
    ```terminal title="Example output"
    ? Are you sure you want to delete external authentication provider entra-test on cluster rosa-ext-test? Yes
    I: Successfully deleted external authentication provider 'entra-test' from cluster 'rosa-ext-test'
    ```

**Verification**

*   Query for any external authentication providers on your cluster by running the following command:
    ```terminal
    $ rosa list external-auth-provider -c <cluster_name>
    ```
    ```terminal title="Example output"
    E: there are no external authentication providers for this cluster
    ```