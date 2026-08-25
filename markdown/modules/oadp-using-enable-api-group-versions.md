{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using Enable API Group Versions {id="oadp-using-enable-api-group-versions_{{ context }}"}

Configure the `EnableAPIGroupVersions` feature flag to back up all Kubernetes API group versions that are supported on a cluster, not only the preferred one. This helps you maintain compatibility across different API groups in your cluster. {._abstract}


:::note

Enable API Group Versions is still in beta.

:::


**Procedure**

*   Configure the `EnableAPIGroupVersions` feature flag:
    ```yaml
    apiVersion: oadp.openshift.io/vialpha1
    kind: DataProtectionApplication
    ...
    spec:
      configuration:
        velero:
          featureFlags:
          - EnableAPIGroupVersions
    ```

**Additional resources**
{._additional-resources}

*   [Enable API Group Versions Feature](https://velero.io/docs/v1.9/enable-api-group-versions-feature/)