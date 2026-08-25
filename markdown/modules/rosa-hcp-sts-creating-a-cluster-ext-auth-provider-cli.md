{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an external authentication provider {id="rosa-hcp-sts-creating-a-cluster-external-auth-provider-cli_{{ context }}"}
{%- set source_highlighter = "pygments" -%}
{%- set pygments_style = "emacs" -%}
{%- set icons = "font" %}

After you have created a {{ hcp_title }} cluster with external authentication providers, you must create a provider using the ROSA CLI.


:::note

Similar to the `rosa create|delete|list idp[s]` command in the ROSA CLI, you cannot edit an existing identity provider that you created using `rosa create external-auth-provider`. Instead, you must delete the external authentication provider and create a new one.

:::


The following table shows the possible CLI flags you can use when creating your external authentication provider:

| CLI Flag | Description |
| --- | --- |
| `--cluster`  | The name or the ID of your cluster. |
| `--name` | A name that is used to refer to the external authentication provider. |
| `--console-client-secret` | This string is the client secret that is used to associate your account with the application. If you do not include the client secret, this command uses a public OIDC OAuthClient. |
| `--issuer-audiences`  | This is a comma-separated list of token audiences. |
| `--issuer-url` | The URL of the token issuer. |
| `--claim-mapping-username-claim`  | The name of the claim that should be used to construct user names for the cluster identity. |
| `--claim-mapping-groups-claim` | The name of the claim that should be used to construct group names for the cluster identity. |

**Procedure**

*   To use the interactive command interface, run the following commands:
    ```terminal
    $ rosa create external-auth-provider -c <cluster_name>
    ```

    **Example output**

    ```terminal
    I: Enabling interactive mode
    ? Name: (1)
    ? Issuer audiences: (2)
    ? The serving url of the token issuer: (3)
    ? CA file path (optional): (4)
    ? Claim mapping username: (5)
    ? Claim mapping groups: (6)
    ? Claim validation rule (optional): (7)
    ? Console client id (optional): (8)
    ```
    1.  The name of your external authentication provider. This name should be a lower-case with numbers and dashes.
    1.  The audience IDs that this authentication provider issues tokens for.
    1.  The issuer’s URL that serves the token.
    1.  Optional: The certificate file to use when making requests.
    1.  The name of the claim that is used to construct the user names for cluster identity, such as using `email`.
    1.  The method with which to transform the ID token into a cluster identity, such as using `groups`.
    1.  Optional: The rules that help validate token claims which authenticate your users. This field should be formatted as `:<required_value>`.
    1.  Optional: The application or client ID that your app registration uses for the console.
*   You can include the required IDs to create your external authentication provider with the following command:
    ```terminal
    rosa create external-auth-provider --cluster=<cluster_id> \
        --name=<provider_name> --issuer-url=<issuing_url> \
        --issuer-audiences=<audience_id> \ 
        --claim-mapping-username-claim=email \ 
        --claim-mapping-groups-claim=groups \
        --console-client-id=<client_id_for_app_registration> \
        --console-client-secret=<client_secret>
    ```
    ```terminal title="Example output"
    I: Successfully created an external authentication provider for cluster '<cluster_id>'
    ```

**Verification**

*   View the external authentication configuration on your cluster by running the following commands:
    ```terminal
    $ rosa list external-auth-provider -c <cluster_name> 
    ```

    **Example output**

    The following example shows a configured Microsoft Entra ID external authentication provider:
    ```terminal
    NAME        ISSUER URL
    m-entra-id  https://login.microsoftonline.com/<group_id>/v2.0
    ```
*   Display the external authentication configuration on a specified cluster by using the following command:
    ```terminal
    $ rosa describe external-auth-provider \
        -c <cluster_name> --name <name_of_external_authentication>
    ```
    ```terminal title="Example output"
    ID:                          ms-entra-id
    Cluster ID:                  <cluster_id>
    Issuer audiences:
                                 - <audience_id>
    Issuer Url:                  https://login.microsoftonline.com/<group_id>/v2.0
    Claim mappings group:        groups
    Claim mappings username:     email
    ```