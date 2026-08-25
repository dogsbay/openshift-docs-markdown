{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the ROSA CLI {id="cloud-experts-getting-started-admin-rights-cli_{{ context }}"}

As the cluster creator, you can use the {{ rosa_cli_first }} tool to create your grant admin credentials to a user. {._abstract}

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

    **Example output**
    ```terminal
    $ rosa list users --cluster=my-rosa-cluster
    ID                 GROUPS
    <idp_user_name>    cluster-admins
    ```
1.  If you are currently logged into the {{ hybrid_console }}, log out of the console and log back in to the cluster to see a new perspective with the "Administrator Panel". You might need an incognito or private window.

    ![cloud-experts-getting-started-admin-rights-admin-panel](/_assets/images/cloud-experts-getting-started-admin-rights-admin-panel.png)
1.  You can also test that admin privileges were added to your account by running the following command. Only a `cluster-admin` users can run this command without errors.
    ```terminal
    $ oc get all -n openshift-apiserver
    ```