{%- set _mod_docs_content_type = "PROCEDURE" %}

# Assign storage migration permissions {id="virt-migrating-storage-permissions_{{ context }}"}

Cluster administrators must grant users permission to perform storage migrations. Permissions to perform storage migrations are not part of the administrative or editing roles in the cluster by default. {._abstract}

**Prerequisites**

*   You have cluster administrator privileges.

**Procedure**

1.  (Optional) To assign the user single namespace storage migration permissions, run the following command:
    ```terminal
    $ kubectl create rolebinding <role_binding_name> \
        --clusterrole=migrations.kubevirt.io:storagemigrate \
        --user=<user_name> -n <namespace>
    ```

    where:

    &lt;role_binding_name>
    :    The name to assign to this role binding instance.

    &lt;user_name>
    :    The user to assign the storage migration permission.

    &lt;namespace>
    :    The applicable namespace for this role binding instance.

1.  (Optional) To assign the user multiple namespace storage migration permissions, run the following command:
    ```terminal
    $ kubectl create clusterrolebinding <role_binding_name> \
        --clusterrole=migrations.kubevirt.io:storagemigrate-multins \
        --user=<user_name>
    ```

    where:

    &lt;role_binding_name>
    :    The name to assign to this role binding instance.

    &lt;user_name>
    :    The user to assign the storage migration permission.