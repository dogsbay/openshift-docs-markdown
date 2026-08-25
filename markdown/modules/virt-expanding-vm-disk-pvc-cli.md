{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expanding a VM disk PVC by using the CLI {id="virt-expanding-vm-disk-pvc-cli_{{ context }}"}

You can increase the size of a virtual machine (VM) disk by expanding the persistent volume claim (PVC) of the disk. To specify the increased PVC volume, you can edit the `PersistentVolumeClaim` manifest by using the {{ oc_first }}. {._abstract}


:::note

If the PVC uses the file system volume mode, the disk image file expands to the available size while reserving some space for file system overhead.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `PersistentVolumeClaim` manifest of the VM disk that you want to expand:
    ```terminal
    $ oc edit pvc <pvc_name>
    ```
1.  Update the disk size:
    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
       name: vm-disk-expand
    spec:
      accessModes:
{%- if openshift_dedicated %}
         - ReadWriteOnce
           {% endif %}
           {% if not openshift_dedicated %}
         - ReadWriteMany
           {%- endif %}
      resources:
        requests:
           storage: 3Gi
    # ...
    ```
    *   `spec.resources.requests.storage` specifies the new disk size.