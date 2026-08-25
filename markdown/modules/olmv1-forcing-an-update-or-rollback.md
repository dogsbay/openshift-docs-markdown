{%- set _mod_docs_content_type = "PROCEDURE" %}

# Forcing an update or rollback {id="olmv1-forcing-an-update-or-rollback_{{ context }}"}

{{ olmv1 }} does not support automatic updates to the next major version or rollbacks to an earlier version. If you want to perform a major version update or rollback, you must verify and force the update manually. {._abstract}


:::warning

You must verify the consequences of forcing a manual update or rollback. Failure to verify a forced update or rollback might have catastrophic consequences such as data loss.

:::


**Prerequisites**

*   You have a catalog installed.
*   You have an Operator or extension installed.
*   You have created a service account and assigned enough role-based access controls (RBAC) to install, update, and manage the extension you want to install. For more information, see _Creating a service account_.

**Procedure**

1.  Edit the custom resource (CR) of your Operator or extension as shown in the following example:
    ```yaml title="Example CR"
    apiVersion: olm.operatorframework.io/v1
      kind: ClusterExtension
      metadata:
        name: <clusterextension_name>
      spec:
        namespace: <installed_namespace>
        serviceAccount:
          name: <service_account_installer_name>
        source:
          sourceType: Catalog
          catalog:
            packageName: <package_name>
            channels:
              - <channel_name>
            version: <version_or_version_range>
            upgradeConstraintPolicy: SelfCertified
    ```

    where:

    `spec.namespace`
    :   Specifies the namespace where you want the bundle installed, such as `pipelines` or `my-extension`. Extensions are still cluster-scoped and might contain resources that are installed in different namespaces.

    `spec.serviceAccount.name`
    :   Specifies the name of the service account you created to install, update, and manage your extension.

    `spec.source.catalog.channels`
    :   Specifies channel names as an array, such as `pipelines-1.14` or `latest`. This field is optional.

    `spec.source.catalog.version`
    :   Specifies the version or version range, such as `1.14.0`, `1.14.x`, or `>=1.16`, of the package you want to install or update. This field is optional.

    `spec.source.catalog.upgradeConstraintPolicy`
    :   Specifies the upgrade constraint policy. To force an update or rollback, set the field to `SelfCertified`. If unspecified, the default setting is `CatalogProvided`. The `CatalogProvided` setting only updates if the new version satisfies the upgrade constraints set by the package author. This field is optional.

1.  Apply the changes to your Operator or extensions CR by running the following command:
    ```terminal
    $ oc apply -f <extension_name>.yaml
    ```