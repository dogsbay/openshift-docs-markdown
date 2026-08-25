{%- set _mod_docs_content_type = "PROCEDURE" %}
# Inspect catalog contents by using the oc-mirror plugin {id="microshift-oc-mirror-list-operators-catalogs_{{ context }}"}

Use the following example procedure to select a catalog and list Operators to add to your oc-mirror plugin image set configuration file. {._abstract}


:::note

If you use your own catalogs and Operators, you can push the images directly to your internal registry.

:::


**Prerequisites**

*   You uninstalled {{ oc_first }}.
*   You installed the Operator Lifecycle Manager (OLM).
*   You installed the oc-mirror plugin.

**Procedure**

1.  Get a list of available Red&#160;Hat-provided Operator catalogs to filter by running the following command:
    ```terminal
    $ oc mirror list operators --version {{ product_version }} --catalogs --v2
    ```
1.  Get a list of Operators in the Red Hat Operators catalog by running the following command:
    ```terminal
    $ oc mirror list operators --catalog=<catalog_source> --v2
    ```

    Replace `<catalog_source>` with your catalog source, such as `registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}` or `quay.io/operatorhubio/catalog:latest`.
1.  Select an Operator. This example uses the `amq-broker-rhel9` Operator.
1.  Optional: To inspect the channels and versions of the Operator you want to filter, enter the following commands:
    1.  Get a list of channels by running the following command:
        ```terminal
        $ oc mirror list operators --catalog=registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }} --package=amq-broker-rhel9 --v2
        ```
    1.  Get a list of versions within a channel by running the following command:
        ```terminal
        $ oc mirror list operators --catalog=registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }} --package=amq-broker-rhel9 --channel=7.13.x --v2
        ```

**Next steps**

*   Create and edit an image set configuration file using the information gathered in this procedure.
*   Mirror the images from the transformed image set configuration file to a mirror registry or disk.