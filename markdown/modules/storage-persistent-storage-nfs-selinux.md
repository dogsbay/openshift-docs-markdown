{%- set _mod_docs_content_type = "PROCEDURE" %}
# SELinux {id="nfs-selinux_{{ context }}"}

For non-{{ op_system_base }} and non-{{ op_system }} systems, SELinux does not allow writing from a pod to a remote NFS server. The NFS volume mounts correctly but it is read-only. You need to manually enable the correct SELinux permissions. {._abstract}

{{ op_system_base_full }} and {{ op_system_first }} systems are configured to use SELinux on remote NFS servers by default.

The following procedure shows how to enable the correct SELinux permissions.

**Prerequisites**

*   The `container-selinux` package must be installed. This package provides the `virt_use_nfs` SELinux boolean.

**Procedure**

*   Enable the `virt_use_nfs` boolean using the following command. The `-P` option makes this boolean persistent across reboots.
    ```terminal
    # setsebool -P virt_use_nfs 1
    ```