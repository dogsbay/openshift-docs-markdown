{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling a CLI installation {id="kmm-uninstalling-kmmo-cli_{{ context }}"}

To uninstall a Kernel Module Management (KMM) Operator CLI installation from {{ product_title }}, you can run `oc delete -k` against the upstream configuration manifest. {._abstract}

**Procedure**

*   Run the following command to uninstall the KMM Operator:
    ```terminal
    $ oc delete -k https://github.com/rh-ecosystem-edge/kernel-module-management/config/default
    ```

    :::note

    Using this command deletes the ``Module`` CRD and all ``Module`` instances in the cluster.
    
    :::