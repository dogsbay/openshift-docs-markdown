{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using flags to specify instance types and preferences {id="virt-using-flags-specify_{{ context }}"}

You can specify instance types and preferences by using flags. {._abstract}

**Prerequisites**

*   You must have an instance type, preference, or both on the cluster.

**Procedure**

1.  To specify an instance type when creating a VM, use the `--instancetype` flag. To specify a preference, use the `--preference` flag. The following example includes both flags:

    ```terminal
    $ virtctl create vm --instancetype <my_instancetype> --preference <my_preference>
    ```
1.  Optional: To specify a namespaced instance type or preference, include the `kind` in the value passed to the `--instancetype` or `--preference` flag command. The namespaced instance type or preference must be in the same namespace you are creating the VM in. The following example includes flags for a namespaced instance type and a namespaced preference:

    ```terminal
    $ virtctl create vm --instancetype virtualmachineinstancetype/<my_instancetype> --preference virtualmachinepreference/<my_preference>
    ```