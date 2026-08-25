{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure group claims {id="cloud-experts-entra-id-idp-configure-group-claims_{{ context }}"}

Configure group claims in Entra ID to allow {{ product_title }} to manage user group memberships and enable group-based role bindings in the cluster. {._abstract}


:::note

Configuring group claims is an optional step.

:::


**Procedure**

1.  From the **Token configuration** sub-blade, click **Add groups claim**.

    ![Azure Portal - Add Groups Claim Page](/_assets/images/azure-portal_optional-group-claims-page.png)
1.  To configure group claims for your Entra ID application, select **Security groups** and then click **Add**.

    :::note

    In this example, the group claim includes all of the security groups that a user is a member of. In a real production environment, ensure that the group claim only includes groups that apply to {{ product_title }}.
    
    :::


    ![Azure Portal - Edit Groups Claim Page](/_assets/images/azure-portal_edit-group-claims-page.png)