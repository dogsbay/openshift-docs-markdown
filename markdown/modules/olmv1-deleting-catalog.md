{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a catalog {id="olmv1-deleting-catalog_{{ context }}"}

You can delete a catalog by deleting its custom resource (CR). {._abstract}

**Prerequisites**

*   You have a catalog installed.

**Procedure**

*   Delete a catalog by running the following command:
    ```terminal
    $ oc delete clustercatalog <catalog_name>
    ```
    ```text title="Example output"
    clustercatalog.olm.operatorframework.io "my-redhat-operators" deleted
    ```

**Verification**

*   Verify the catalog is deleted by running the following command:
    ```terminal
    $ oc get clustercatalog
    ```