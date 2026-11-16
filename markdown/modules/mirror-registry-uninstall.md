{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the mirror registry for Red Hat OpenShift {id="uninstalling-mirror-registry_{{ context }}"}

You can uninstall the _mirror registry for Red&#160;Hat OpenShift_ from your local host. {._abstract}

**Prerequisites**

*   You have installed the _mirror registry for Red&#160;Hat OpenShift_ on the local host.

**Procedure**

*   Uninstall the _mirror registry for Red&#160;Hat OpenShift_ from your local host by running the following command:
    ```terminal
    $ ./mirror-registry uninstall -data-dir /var/lib/quay
    ```

    You are prompted for confirmation before the registry is removed. To skip the confirmation prompt and also delete the data directory, add the `-auto-approve` flag:
    ```terminal
    $ ./mirror-registry uninstall -data-dir /var/lib/quay -auto-approve
    ```

    :::note

    You must pass the same `-data-dir` path that was used during installation. The uninstall command stops the `quay.service`, removes the systemd Quadlet unit file, and, when `-auto-approve` is specified, deletes the data directory.
    
    :::