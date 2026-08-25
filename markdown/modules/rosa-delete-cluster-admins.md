{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoking `cluster-admin` access using the ROSA CLI {id="rosa-delete-cluster-admins_{{ context }}"}

Only the user who created the cluster can revoke access for `cluster-admin` users. {._abstract}

**Prerequisites**

*   You have added an Identity Provider (IDP) to your cluster.
*   You have the IDP user name for the user whose privileges you are revoking.
*   You are logged in to the cluster.

**Procedure**

1.  Enter the following command to revoke the `cluster-admin` access of a user:
    ```terminal
    $ rosa revoke user cluster-admins --user=myusername --cluster=mycluster
    ```
1.  Enter the following command to verify that the user no longer has `cluster-admin` access. The output does not list the revoked user.
    ```terminal
    $ oc get groups cluster-admins
    ```