{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoking `dedicated-admin` access using the ROSA CLI {id="rosa-delete-dedicated-admins_{{ context }}"}

You can revoke access for a `dedicated-admin` user if you are the user who created the cluster, the organization administrator user, or the super administrator user. {._abstract}

**Prerequisites**

*   You have added an Identity Provider (IDP) to your cluster.
*   You have the IDP user name for the user whose privileges you are revoking.
*   You are logged in to the cluster.

**Procedure**

1.  Enter the following command to revoke the `dedicated-admin` access of a user:
    ```terminal
    $ rosa revoke user dedicated-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
1.  Enter the following command to verify that your user no longer has `dedicated-admin` access. The output does not list the revoked user.
    ```terminal
    $ oc get groups dedicated-admins
    ```