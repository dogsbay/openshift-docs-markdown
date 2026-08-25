{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying libguestfs by using virtctl {id="virt-deploying-libguestfs-with-virtctl_{{ context }}"}

You can use the `virtctl guestfs` command to deploy an interactive container with `libguestfs-tools` and a persistent volume claim (PVC) attached to it. {._abstract}

**Procedure**

*   To deploy a container with `libguestfs-tools`, mount the PVC, and attach a shell to it, run the following command:
    ```terminal
    $ virtctl guestfs -n <namespace> <pvc_name>
    ```

    :::important

    The `<pvc_name>` argument is required. If you do not include it, an error message appears.
    
    :::