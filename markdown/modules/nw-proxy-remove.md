{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the cluster-wide proxy {id="nw-proxy-remove_{{ context }}"}

The `cluster` Proxy object cannot be deleted. To remove the cluster-wide proxy configuration from your {{ product_title }} cluster, you can remove all spec fields from the `Proxy` object by using the `oc edit` command. {._abstract}

**Prerequisites**

*   Cluster administrator permissions
*   {{ product_title }} `oc` CLI tool installed

**Procedure**

1.  Use the `oc edit` command to modify the proxy:
    ```terminal
    $ oc edit proxy/cluster
    ```
1.  Remove all `spec` fields from the Proxy object. For example:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Proxy
    metadata:
      name: cluster
    spec: {}
    ```
1.  Save the file to apply the changes.