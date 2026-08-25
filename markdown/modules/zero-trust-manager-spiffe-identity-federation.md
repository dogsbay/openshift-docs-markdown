{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Azure with the SPIFFE identity federation {id="zero-trust-manager-spiffe-identity-federation_{{ context }}"}

Configure {{ azure_first }} with SPIFFE identity federation to enable password-free, automated authentication for the demonstration application. This federates the User Managed Identity with the SPIFFE identity associated with your workload application. {._abstract}

**Procedure**

*   Federate the identities between the User Managed Identity and the SPIFFE identity associated with the workload application by running the following command:
    ```terminal
    $ az identity federated-credential create \
     --name ${NAME} \
     --identity-name ${USER_ASSIGNED_IDENTITY_NAME} \
     --resource-group ${RESOURCE_GROUP} \
     --issuer https://$JWT_ISSUER_ENDPOINT \
     --subject spiffe://$APP_DOMAIN/ns/$APP_NAMESPACE/sa/$APP_NAME \
     --audience api://AzureADTokenExchange
    ```