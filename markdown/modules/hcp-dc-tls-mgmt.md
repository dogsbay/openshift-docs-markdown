{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding the registry CA to the management cluster {id="hcp-dc-tls-mgmt_{{ context }}"}

To ensure proper function in a disconnected deployment, you need to configure the registry CA certificates in the management cluster. {._abstract}

To add the registry CA to the management cluster, complete the following steps.

**Procedure**

1.  Create a config map that resembles the following example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: <config_map_name>
      namespace: <config_map_namespace>
    data:
      <registry_name>..<port>: |
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----
      <registry_name>..<port>: |
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----
      <registry_name>..<port>: |
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----
    ```
    *   `metadata.name` specifies the name of the config map.
    *   `metadata.namespace` specifies the namespace for the config map.
    *   `data` specifies the registry names and the registry certificate content. Replace `<port>` with the port where the registry server is running; for example, `5000`. Ensure that the data in the config map is defined by using `|` only instead of other methods, such as `| -`. If you use other methods, issues can occur when the pod reads the certificates.
1.  Patch the cluster-wide object, `image.config.openshift.io` to include the following specification:
    ```yaml
    spec:
      additionalTrustedCA:
        name: registry-config
    ```

    As a result of this patch, the control plane nodes can retrieve images from the private registry and the HyperShift Operator can extract the {{ product_title }} payload for hosted cluster deployments.

    The process to patch the object might take several minutes to be completed.