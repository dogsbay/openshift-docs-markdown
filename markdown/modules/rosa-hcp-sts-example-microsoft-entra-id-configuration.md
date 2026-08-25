{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Microsoft Entra ID as an external provider {id="rosa-hcp-sts-example-microsoft-entra-id-configuration_{{ context }}"}
{%- set source_highlighter = "pygments" -%}
{%- set pygments_style = "emacs" -%}
{%- set icons = "font" %}

You can configure Microsoft Entra ID as an external authentication provider for your {{ product_title }} cluster by using the {{ rosa_cli_first }}. Before you configure this provider, you must have a Microsoft Entra ID server already set up. {._abstract}

For more information about setting up Microsoft Entra ID, see the [Microsoft Entra ID documentation](https://learn.microsoft.com/en-us/entra/identity/?culture=en-us&country=us).

**Procedure**

1.  Create an external authentication provider that uses Microsoft Entra ID by running the following command:

    :::note

    You must set your own environment variables with values specific to your Microsoft Entra ID server.
    
    :::

    ```terminal
    $ rosa create external-auth-provider -c $CLUSTER_NAME \  
        --claim-mapping-groups-claim groups \
        --claim-mapping-username-claim <authorized_user_name> \ 
        --console-client-id $CONSOLE_CLIENT_ID \ 
        --console-client-secret $CONSOLE_CLIENT_SECRET_VALUE \ 
        --issuer-audiences "$AUDIENCE_1" \
        --issuer-ca-file ca-bundle.crt --issuer-url $ISSUER_URL \
        --name m-entra-id
    ```

    The output should indicate that the external authentication provider was successfully created.
    ```terminal
    I: Successfully created an external authentication provider for cluster 'ext-auth-test'. It can take a few minutes for the creation of an external authentication provider to become fully effective.
    ```
1.  List the external authentication provider for your cluster to see the issuer URL, or use `rosa describe` to see all details, by running one of the following commands:
    1.  List the external authentication configuration on a specified cluster by running the following command:
        ```terminal
        $ rosa list external-auth-provider -c <cluster_name>
        ```

        The output should show the issuer URL for the external authentication provider.
        ```terminal
        NAME        ISSUER URL
        m-entra-id  https://login.microsoftonline.com/<group_id>/v2.0
        ```
    1.  Display the external authentication configuration on a specified cluster by running the following command:
        ```terminal
        $ rosa describe external-auth-provider \
            -c <cluster_name> --name <name_of_external_authentication>
        ```

        The output displays the details of the external authentication provider.
        ```terminal
        ID:                          ms-entra-id
        Cluster ID:                  <cluster_id>
        Issuer audiences:
                                     - <audience_id>
        Issuer Url:                  https://login.microsoftonline.com/<group_id>/v2.0
        Claim mappings group:        groups
        Claim mappings username:     email
        ```