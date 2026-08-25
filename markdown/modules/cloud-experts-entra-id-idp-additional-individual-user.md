{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant additional permissions to individual users {id="cloud-experts-entra-id-idp-additional-individual-user_{{ context }}"}

Grant the `cluster-admin` role to individual Entra ID users so that they have full access and control over the cluster. {._abstract}

**Procedure**

*   Grant a user access to the `cluster-admin` role by running the following command:
    ```terminal
    $ rosa grant user cluster-admin --user=<USERNAME> --cluster=${CLUSTER_NAME}
    ```
    where:


    `<USERNAME>`
    :   Provide the Entra ID username that you want to have cluster admin permissions.