{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling default CatalogSource objects at a local level {id="disabling-catalogsource-objects_{{ context }}"}

You can make persistent local changes to a `CatalogSource` object by disabling the default `CatalogSource` object. Otherwise, the Marketplace Operator automatically reverts any manual modifications to fields in the `spec.grpcPodConfig` section. {._abstract}

The Marketplace Operator, `openshift-marketplace`, manages the default custom resources (CRs) of the `OperatorHub`. The `OperatorHub` manages `CatalogSource` objects.

To apply persistent changes to `CatalogSource` object, you must first disable a default `CatalogSource` object.

**Procedure**

*   To disable all the default `CatalogSource` objects at a local level, enter the following command:
    ```terminal
    $ oc patch operatorhub cluster -p '{"spec": {"disableAllDefaultSources": true}}' --type=merge
    ```

    :::note

    You can also configure the default `OperatorHub` CR to either disable all `CatalogSource` objects or disable a specific object.
    
    :::