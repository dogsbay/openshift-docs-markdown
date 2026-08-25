{%- set _mod_docs_content_type = "CONCEPT" %}
# Required {{ azure_short }} roles {id="installation-azure-permissions_{{ context }}"}

Before you create the identity for an {{ product_title }} cluster on {{ azure_short }}, verify that your environment meets the role and permission requirements for the identity type you plan to use. {._abstract}

The following requirements must be met:

*   The Azure account that you use to create the identity is assigned the `User Access Administrator` and `Contributor` roles. These roles are required when:
    *   Creating a service principal or user-assigned managed identity.
    *   Enabling a system-assigned managed identity on a virtual machine.
*   If you are going to use a service principal to complete the installation, verify that the Azure account that you use to create the identity is assigned the `microsoft.directory/servicePrincipals/createAsOwner` permission in Microsoft Entra ID.