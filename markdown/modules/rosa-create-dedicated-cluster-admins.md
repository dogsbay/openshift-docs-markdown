{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting `dedicated-admin` access {id="rosa-create-dedicated-cluster-admins_{{ context }}"}

Only the user who created the cluster can grant cluster access to other `cluster-admin` or `dedicated-admin` users. Users with `dedicated-admin` access have fewer privileges. As a best practice, grant `dedicated-admin` access to most of your administrators. {._abstract}

**Prerequisites**

*   You have added an identity provider (IDP) to your cluster.
*   You have the IDP user name for the user you are creating.
*   You are logged in to the cluster.

**Procedure**

1.  Enter the following command to promote your user to a `dedicated-admin`:
    ```terminal
    $ rosa grant user dedicated-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
1.  Enter the following command to verify that your user now has `dedicated-admin` access:
    ```terminal
    $ oc get groups dedicated-admins
    ```
    ```terminal title="Example output"
    NAME               USERS
    dedicated-admins   rh-rosa-test-user
    ```

    :::note

    A `Forbidden` error displays if user without `dedicated-admin` privileges runs this command.
    
    :::