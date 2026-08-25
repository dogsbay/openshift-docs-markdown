{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling a default catalog {id="olmv1-disabling-a-default-catalog_{{ context }}"}

You can disable the Red&#160;Hat-provided catalogs that are included with {{ product_title }} by default. {._abstract}

**Procedure**

*   Disable a default catalog by running the following command:
    ```terminal
    $ oc patch clustercatalog openshift-certified-operators -p \
      '{"spec": {"availabilityMode": "Unavailable"}}' --type=merge
    ```
    ```text title="Example output"
    clustercatalog.olm.operatorframework.io/openshift-certified-operators patched
    ```

**Verification**

*   Verify the catalog is disabled by running the following command:
    ```terminal
    $ oc get clustercatalog openshift-certified-operators
    ```
    ```text title="Example output"
    NAME                            LASTUNPACKED   SERVING   AGE
    openshift-certified-operators                  False     6h54m
    ```