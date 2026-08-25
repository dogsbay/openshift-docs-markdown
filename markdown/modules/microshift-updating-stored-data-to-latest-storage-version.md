{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating stored data to the latest storage version {id="microshift-updating-stored-data-to-latest-storage-version_{{ context }}"}

To update stored data to the latest Kubernetes storage version, perform a storage migration.  {._abstract}

The procedure shows an example of converting existing objects on the `v1beta1` version to the current version, such as `v1beta2`, to ensure compatibility with the cluster APIs.

**Procedure**

*   Either you or any controller that has support for the `StorageVersionMigration` API must trigger a migration request. Use the following example request for reference:
    ```terminal title="Example request"
    apiVersion: migration.k8s.io/v1alpha1
    kind: StorageVersionMigration
    metadata:
      name: v1beta1
    spec:
      resource:
        group: example.storage.k8s.io
        resource: volumeclasses
        version: v1alpha1
    # ...
    ```

    where:

    `resource.resource`
    :   Specifies the plural name of the resource.

    `resource.version`
    :   Specifies the version to update to.

**Verification**

*   To monitor the progress of the update, review the status of the `StorageVersionMigration` custom resource (CR).


:::note

A migration fails when you misname a group or resource. Incompatible versions between the previous and latest versions can also cause a migration to fail.

:::