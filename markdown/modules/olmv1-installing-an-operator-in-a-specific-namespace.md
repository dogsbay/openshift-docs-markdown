{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring a watch namespace for a cluster extension (Technology Preview) {id="olmv1-deploying-a-ce-in-a-specific-namespace_{{ context }}"}

You can configure the watch namespace for extensions that support namespace-scoped resource watching. {._abstract}

{%- set FeatureName = "Configuring watch namespace for a cluster extension" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have enabled the `TechPreviewNoUpgrade` feature set on the cluster.
*   You have created a service account and assigned enough role-based access controls (RBAC) to install, update, and manage the extension. For more information, see "Cluster extension permissions".
*   You have verified the supported install modes for the extension and determined the required `watchNamespace` configuration.

**Procedure**

1.  Create a custom resource (CR) based on where you want the extension to watch for resources:
    *   To configure the extension to watch its own installation namespace:
        ```yaml
        apiVersion: olm.operatorframework.io/v1
        kind: ClusterExtension
        metadata:
          name: <extension_name>
        spec:
          namespace: <installation_namespace>
          config:
            configType: Inline
            inline:
              watchNamespace: <installation_namespace>
          serviceAccount:
            name: <service_account>
          source:
            sourceType: Catalog
            catalog:
              packageName: <package_name>
              version: <version>
              upgradeConstraintPolicy: CatalogProvided
        ```

        where:

        `config.inline.watchNamespace`
        :    Specifies the namespace to watch for resources. For requirements and valid values, see "Extension configuration".

    *   To configure the extension to watch a different namespace:
        ```yaml
        apiVersion: olm.operatorframework.io/v1
        kind: ClusterExtension
        metadata:
          name: <extension_name>
        spec:
          namespace: <installation_namespace>
          config:
            configType: Inline
            inline:
              watchNamespace: <watched_namespace>
          serviceAccount:
            name: <service_account>
          source:
            sourceType: Catalog
            catalog:
              packageName: <package_name>
              version: <version>
              upgradeConstraintPolicy: CatalogProvided
        ```
1.  Apply the CR to the cluster by running the following command:
    ```terminal
    $ oc apply -f <cluster_extension_cr>.yaml
    ```

**Verification**

*   Verify that the extension installed successfully by running the following command:
    ```terminal
    $ oc get clusterextension <extension_name> -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: olm.operatorframework.io/v1
    kind: ClusterExtension
    metadata:
      name: <extension_name>
    spec:
      namespace: <installation_namespace>
      config:
        configType: Inline
        inline:
          watchNamespace: <installation_namespace>
    status:
      conditions:
      - type: Installed
        status: "True"
        reason: Succeeded
    ```