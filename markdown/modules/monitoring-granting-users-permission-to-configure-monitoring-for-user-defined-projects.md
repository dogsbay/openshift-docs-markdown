{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting users permission to configure monitoring for user-defined projects {id="granting-users-permission-to-configure-monitoring-for-user-defined-projects_{{ context }}"}

As a cluster administrator, you can assign the `user-workload-monitoring-config-edit` role to a user. This grants permission to configure and manage monitoring for user-defined projects without giving them permission to configure and manage core {{ product_title }} monitoring components.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   The user account that you are assigning the role to already exists.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Assign the `user-workload-monitoring-config-edit` role to a user in the `openshift-user-workload-monitoring` project:
    ```terminal
    $ oc -n openshift-user-workload-monitoring adm policy add-role-to-user \
      user-workload-monitoring-config-edit <user> \
      --role-namespace openshift-user-workload-monitoring
    ```
1.  Verify that the user is correctly assigned to the `user-workload-monitoring-config-edit` role by displaying the related role binding:
    ```terminal
    $ oc describe rolebinding <role_binding_name> -n openshift-user-workload-monitoring
    ```
    ```terminal title="Example command"
    $ oc describe rolebinding user-workload-monitoring-config-edit -n openshift-user-workload-monitoring
    ```
    ```terminal title="Example output"
    Name:         user-workload-monitoring-config-edit
    Labels:       <none>
    Annotations:  <none>
    Role:
      Kind:  Role
      Name:  user-workload-monitoring-config-edit
    Subjects:
      Kind  Name  Namespace
      ----  ----  ---------
      User  user1           (1)
    ```
    1.  In this example, `user1` is assigned to the `user-workload-monitoring-config-edit` role.