{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting PVC viewing permissions {id="pvc-cli-command-usage_{{ context }}"}

To monitor storage resources, verify that you have the necessary privileges to view Persistent Volume Claim (PVC) usage statistics. Ensuring you have the correct permissions means that you can access usage data and track resource consumption effectively. {._abstract}

To view PVC usage statistics, you must have the necessary privileges.

**Procedure**

*   If you have admin privileges, log on to {{ microshift_short }} as an `admin`.
*   If you do not have admin privileges, complete the following steps:
    *   Create cluster roles for the user by running the following command:
        ```terminal
        $ oc create clusterrole routes-view --verb=get,list --resource=routes
        ```
    *   Add the `routes-view` cluster role for the user by running the following command:
        ```terminal
        $ oc admin policy add-cluster-role-to-user routes-view _<user_name>_
        ```
    *   Replace `_<user_name>_` with the user name.
    *   Add the `cluster-monitoring-view` cluster role for the user by running the following command:
        ```terminal
        $ oc admin policy add-cluster-role-to-user cluster-monitoring-view _<user_name>_
        ```
    *   Replace `_<user_name>_` with the user name.