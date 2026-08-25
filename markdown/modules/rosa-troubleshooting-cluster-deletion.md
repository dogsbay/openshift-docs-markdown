{%- set _mod_docs_content_type = "PROCEDURE" %}
# Repairing a cluster that cannot be deleted {id="rosa-troubleshooting-cluster-deletion_{{ context }}"}

In specific cases, the following error is displayed in {{ cluster_manager_url }} if you attempt to delete your cluster: {._abstract}

```terminal
Error deleting cluster
CLUSTERS-MGMT-400: Failed to delete cluster <hash>: sts_user_role is not linked to your account. sts_ocm_role is linked to your organization <org number> which requires sts_user_role to be linked to your Red Hat account <account ID>.Please create a user role and link it to the account: User Account <account ID> is not authorized to perform STS cluster operations

Operation ID: b0572d6e-fe54-499b-8c97-46bf6890011c
```

If you try to delete your cluster from the CLI, the following error is displayed:

```terminal
E: Failed to delete cluster <hash>: sts_user_role is not linked to your account. sts_ocm_role is linked to your organization <org_number> which requires sts_user_role to be linked to your Red Hat account <account_id>.Please create a user role and link it to the account: User Account <account ID> is not authorized to perform STS cluster operations
```

This error occurs when the `user-role` is unlinked or deleted.

**Procedure**

1.  Run the following command to create the `user-role` IAM resource:
    ```terminal
    $ rosa create user-role
    ```
1.  After you see that the role has been created, you can delete the cluster. The following confirms that the role was created and linked:
    ```terminal
    I: Successfully linked role ARN <user role ARN> with account <account ID>
    ```