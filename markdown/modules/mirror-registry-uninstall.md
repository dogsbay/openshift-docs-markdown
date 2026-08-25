{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the mirror registry for Red Hat OpenShift {id="uninstalling-mirror-registry_{{ context }}"}

You can uninstall the _mirror registry for Red&#160;Hat OpenShift_ from your local host. {._abstract}

**Prerequisites**

*   You have installed _mirror registry for Red&#160;Hat OpenShift_ on a local host.

**Procedure**

*   Uninstall the _mirror registry for Red&#160;Hat OpenShift_ from your local host by running the following command:
    ```terminal
    $ ./mirror-registry uninstall -v \
      --quayRoot <example_directory_name>
    ```

    :::note

    *   Deleting the _mirror registry for Red&#160;Hat OpenShift_ prompts the user before deletion. You can use `--autoApprove` to skip this prompt.
    *   Users who install the _mirror registry for Red&#160;Hat OpenShift_ with the `--quayRoot` flag must include the `--quayRoot` flag when uninstalling. For example, if you installed the _mirror registry for Red&#160;Hat OpenShift_ with `--quayRoot example_directory_name`, you must include that string to properly uninstall the mirror registry.
    
    :::