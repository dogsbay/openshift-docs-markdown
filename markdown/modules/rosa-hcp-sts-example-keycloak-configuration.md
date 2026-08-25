{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Keycloak as an external provider {id="rosa-hcp-sts-example-keycloak-configuration_{{ context }}"}

You can configure Keycloak as an external authentication provider for your {{ product_title }} cluster by using the {{ rosa_cli_first }}. Before you configure this provider, you must have a Keycloak server already set up. {._abstract}

For more information about setting up Keycloak, see the [Keycloak documentation](https://www.keycloak.org/server/configuration).

**Procedure**

1.  Create an external authentication provider that uses Keycloak by running the following command:

    :::note

    You must set your own environment variables with values specific to your Keycloak server.
    
    :::

    ```terminal
    $ rosa create external-auth-provider -c $CLUSTER_NAME \ 
    --claim-mapping-groups-claim groups \ 
        --claim-mapping-username-claim <authorized_user_name> \
        --console-client-id $CONSOLE_CLIENT_ID \ 
        --console-client-secret $CONSOLE_CLIENT_SECRET_VALUE \
        --issuer-audiences "$AUDIENCE_1,$AUDIENCE_2" \ 
        --issuer-ca-file ca-bundle.crt --issuer-url $ISSUER_URL --name keycloak
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

        The output should display the issuer URL for the external authentication provider.
        ```terminal
        NAME      ISSUER URL
        keycloak  https://keycloak-keycloak.apps.<keycloak_id>.openshift.org/realms/master
        ```
    1.  Display the external authentication configuration on a specified cluster by running the following command:
        ```terminal
        $ rosa describe external-auth-provider \
            -c <cluster_name> --name <name_of_external_authentication>
        ```

        The output displays the details of the external authentication provider.
        ```terminal
        ID:                                    keycloak
        Cluster ID:                            <cluster_id>
        Issuer audiences:
                                               - <audience_id_1>
                                               - <audience_id_2>
        Issuer Url:                            https://keycloak-keycloak.apps.<keycloak_id>.openshift.org/realms/master
        Claim mappings group:                  groups
        Claim mappings username:               <authorized_user_name>
        Console client id:                     console-test
        ```