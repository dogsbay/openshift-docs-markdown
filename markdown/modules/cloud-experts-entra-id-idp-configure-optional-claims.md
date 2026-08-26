{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure optional claims in Entra ID {id="cloud-experts-entra-id-idp-configure-optional-claims_{{ context }}"}

Configure the `email` and `preferred_username` optional claims in Entra ID so that {{ product_title }} can identify users during authentication. {._abstract}

**Procedure**

1.  Click the **Token configuration** sub-blade and click **Add optional claim**.

    ![Azure Portal - Add Optional Claims Page](/images/azure-portal_optional-claims-page.png)
1.  Select the **ID** radio button.

    ![Azure Portal - Add Optional Claims - Token Type](/images/azure-portal_add-optional-claims-page.png)
1.  Select the **email** claim checkbox.

    ![Azure Portal - Add Optional Claims - email](/images/azure-portal_add-optional-email-claims-page.png)
1.  Select the `preferred_username` claim checkbox. Then, click **Add** to configure the **email** and **preferred_username** claims your Entra ID application.

    ![Azure Portal - Add Optional Claims - preferred_username](/images/azure-portal_add-optional-preferred_username-claims-page.png)
1.  Follow the prompt in the dialog box to enable the necessary Microsoft Graph permissions.

    ![Azure Portal - Add Optional Claims - Graph Permissions Prompt](/images/azure-portal_add-optional-claims-graph-permissions-prompt.png)