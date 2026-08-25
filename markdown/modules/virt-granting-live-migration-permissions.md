{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting live migration permissions {id="virt-granting-live-migration-permissions_{{ context }}"}

You can grant trusted users or groups the ability to create, delete, and update live migration instances. {._abstract}

**Prerequisites**

*   The {{ oc_first }} is installed.
*   You have cluster administrator permissions.

**Procedure**

*   (Optional) To change the default behavior so that namespace administrators always have permission to create, delete, and update live migrations, aggregate the `kubevirt.io:migrate` role into the `admin` cluster role by running the following command:
    ```terminal
    $ oc label --overwrite clusterrole kubevirt.io:migrate rbac.authorization.k8s.io/aggregate-to-admin=true
    ```
*   Bind the `kubevirt.io:migrate` cluster role to trusted users or groups by running one of the following commands, replacing `<namespace>`, `<first_user>`, `<second_user>`, and `<group_name>` with your own values.
    *   To bind the role at the namespace level, run the following command:
        ```terminal
        $ oc create -n <namespace> rolebinding kvmigrate --clusterrole=kubevirt.io:migrate --user=<first_user> --user=<second_user> --group=<group_name>
        ```
    *   To bind the role at the cluster level, run the following command:
        ```terminal
        $ oc create clusterrolebinding kvmigrate --clusterrole=kubevirt.io:migrate --user=<first_user> --user=<second_user> --group=<group_name>
        ```