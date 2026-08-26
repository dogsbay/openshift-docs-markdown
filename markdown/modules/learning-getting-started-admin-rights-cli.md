{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the {{ rosa_cli }} {id="learning-getting-started-admin-rights-cli_{{ context }}"}

To allow specific users to manage your environment, you can use the {{ rosa_cli }} to grant administrative access to your user roles. Assigning these permissions ensures that authorized team members can effectively configure and monitor your cluster’s resources. {._abstract}

Red&#160;Hat offers two types of admin privileges:

*   `cluster-admin`: `cluster-admin` privileges give the admin user full privileges within the cluster.
*   `dedicated-admin`: `dedicated-admin` privileges allow the admin user to complete most administrative tasks with certain limitations to prevent cluster damage. For best practice use `dedicated-admin` when elevated privileges are needed.

**Procedure**

1.  Assuming you are the user who created the cluster, run one of the following commands to grant admin privileges:
    *   For `cluster-admin`:
        ```terminal
        $ rosa grant user cluster-admin --user <idp_user_name> --cluster=<cluster-name>
        ```
    *   For `dedicated-admin`:
        ```terminal
        $ rosa grant user dedicated-admin --user <idp_user_name> --cluster=<cluster-name>
        ```
1.  Verify that the admin privileges were added by running the following command:
    ```terminal
    $ rosa list users --cluster=<cluster-name>
    ```

    **Example output**:
    ```terminal
    $ rosa list users --cluster=my-rosa-cluster
    ID                 GROUPS
    <idp_user_name>    cluster-admins
    ```
1.  If you are currently logged into the {{ hybrid_console }}, log out of the console and log back in to the cluster to see a new perspective with the "Administrator Panel". You might need an incognito or private window.

    ![cloud-experts-getting-started-admin-rights-admin-panel](/images/cloud-experts-getting-started-admin-rights-admin-panel.png)
1.  You can also test that admin privileges were added to your account by running the following command. Only a `cluster-admin` users can run this command without errors.
    ```terminal
    $ oc get all -n openshift-apiserver
    ```