{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring storage for the image registry in non-production clusters {id="installation-registry-storage-non-production_{{ context }}"}

You must configure storage for the Image Registry Operator. For non-production clusters, you can set the image registry to an empty directory, but you lose all images if you restart the registry. {._abstract}

**Procedure**

*   To set the image registry storage to an empty directory:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch '{"spec":{"storage":{"emptyDir":{}}}}'
    ```

    :::warning

    Configure this option only for non-production clusters.
    
    :::


    If you run this command before the Image Registry Operator initializes its components, the `oc patch` command fails with the following error:
    ```terminal title="Example output"
    Error from server (NotFound): configs.imageregistry.operator.openshift.io "cluster" not found
    ```

    Wait a few minutes and run the command again.