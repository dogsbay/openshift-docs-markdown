{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ azure_short }} managed identities {id="installation-using-azure-managed-identities_{{ context }}"}

To provide the identity that the installation program requires on {{ azure_short }}, you can use a system-assigned or user-assigned managed identity. {._abstract}

If you are unable to use a managed identity, you can use a service principal.

**Procedure**

1.  If you are using a system-assigned managed identity, enable it on the virtual machine that you will run the installation program from.
1.  If you are using a user-assigned managed identity:
    1.  Assign it to the virtual machine that you will run the installation program from.
    1.  Record its client ID. You require this value when installing the cluster.
1.  Verify that the required permissions are assigned to the managed identity.