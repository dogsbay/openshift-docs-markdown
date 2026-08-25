{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot {{ product_title }} account roles with an AWS STS external ID {id="troubleshooting-sts-external-ids_{{ context }}"}

If the `Installer` and `Support` roles contain mismatched external IDs, you can delete and re-create the account roles with a consistent external ID to resolve cluster creation failures. {._abstract}

**Procedure**

1.  Delete the existing account roles by running the following command. Replace `ManagedOpenShift` with your custom prefix if you used a custom prefix:

    :::important

    Deleting account roles affects all clusters that use those roles. Before proceeding, ensure that no other clusters depend on these account roles.
    
    :::

    ```terminal
    $ rosa delete account-roles -p ManagedOpenShift --mode auto --yes
    ```
1.  When you get confirmation that you successfully deleted the account roles, re-create account roles with your external ID by running the following command:
    ```terminal
    $ rosa create account-roles --mode auto --external-id "my-secure-unique-id-123" --yes
    ```
1.  Continue with your cluster creation process.

**Verification**

1.  Verify that the re-created account roles contain the correct external ID by running the following command for each role:
    ```terminal
    $ aws iam get-role --role-name ManagedOpenShift-HCP-ROSA-Installer-Role --query 'Role.AssumeRolePolicyDocument'
    ```
1.  In the output, confirm that the `sts:ExternalId` value matches your external ID string.