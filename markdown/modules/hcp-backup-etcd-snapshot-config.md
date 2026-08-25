{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the etcd snapshot method {id="hcp-backup-etcd-snapshot-config_{{ context }}"}

Before you can use the etcd snapshot method to back up your etcd data for {{ hcp }}, you must meet a few prerequisites and configure a plugin. {._abstract}

**Prerequisites**

*   The `HCPEtcdBackup` feature gate is enabled in the HyperShift Operator.
*   The {{ oadp_first }} Operator version 1.6 or later with the HyperShift plugin is deployed. For more information, see "Configuring {{ oadp_short }}" and "Automating the backup and restore process by using a DPA".
*   Object storage is configured. Use a Velero backup storage location that points to {{ aws_short }} S3.
*   Service publishing requirements:
    *   If you are restoring a hosted cluster to a different management cluster, use a fixed hostname that is configured through DNS so that you can update the DNS record to point to the endpoint of the new management cluster and make the migration transparent for existing nodes.
    *   For production environments, all services must have fixed hostnames. 
    *   On {{ aws_short }}, the API server can also use a `Route` service publishing strategy with a fixed hostname.
*   Platform-specific requirements:
    *   For {{ hcp }} on {{ aws_short }}, ensure that the OIDC provider configuration is accessible for any fixes that are needed after the restore process. If you use {{ aws_short }} S3 for backup storage, ensure that IAM roles and policies are configured according to "About installing {{ oadp_short }}". 
    *   For {{ hcp }} on bare metal with the Agent provider, ensure that the `InfraEnv` resource is in a separate namespace from the hosted control plane namespace. Be careful to not delete the `InfraEnv` resource during the backup or restore processes.

**Procedure**

1.  Configure the {{ oadp_short }} HyperShift plugin by creating a config map in the {{ oadp_short }} namespace and specifying the etcd backup method, as shown in the following example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: hypershift-oadp-plugin-config
      namespace: openshift-adp
    data:
      etcdBackupMethod: "etcdSnapshot"
    ```

    where:

    metadata.name
    :   Specifies the name of the config map. Use `hypershift-oadp-plugin-config` as the name of the config map.

    metadata.namespace
    :   Specifies the {{ oadp_short }} namespace.

    data.etcdBackupMethod
    :   Specifies the etcd backup method. The default is `volumeSnapshot`. Use `etcdSnapshot` to enable the etcd snapshot method. If the `etcdBackupMethod` parameter is set to `etcdSnapshot` but the `HCPEtcdBackup` custom resource is not installed, the plugin fails.

1.  Apply the configuration by entering the following command:
    ```terminal
    $ oc apply -f hypershift-oadp-plugin-config.yaml
    ```