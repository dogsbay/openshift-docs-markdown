{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure live migration for heavy workloads {id="virt-configuring-live-migration-heavy_{{ context }}"}

When migrating a VM running a heavy workload, such as database processing, higher memory dirty rates can prevent the migration from completing. To address this, you can enable post copy mode, which allows the migration to complete when the pre-copy phase cannot converge. {._abstract}

Configure live migration for heavy workloads by updating the `HyperConverged` custom resource (CR) in the `{{ CNVNamespace }}`{minja} namespace.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `HyperConverged` CR and add the necessary parameters for migrating heavy workloads:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```

    Example configuration file:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      liveMigrationConfig:
        bandwidthPerMigration: 0Mi
        completionTimeoutPerGiB: 150
        parallelMigrationsPerCluster: 5
        parallelOutboundMigrationsPerNode: 1
        progressTimeout: 150
        allowPostCopy: true
    ```

    where:

    `bandwidthPerMigration`
    :   Specifies the bandwidth of each migration in bytes per second. The default is `0`, which is unlimited.

    `completionTimeoutPerGiB`
    :   Specifies the length of time, in seconds per GiB of memory, at which the migration is canceled if it has not completed and post copy mode is triggered, if enabled. You can lower `completionTimeoutPerGiB` to trigger post copy mode earlier in the migration process, or raise the  `completionTimeoutPerGiB` to trigger post copy mode later in the migration process.

    `parallelMigrationsPerCluster`
    :   Specifies the number of migrations running in parallel in the cluster. The default is `5`. Keeping the `parallelMigrationsPerCluster` setting low is better when migrating heavy workloads.

    `parallelOutboundMigrationsPerNode`
    :   Specifies the maximum number of outbound migrations per node. Configure a single VM per node for heavy workloads.

    `progressTimeout`
    :   Specifies the length of time, in seconds, at which the migration is canceled if memory copy fails to make progress. Increase this parameter for large memory sizes running heavy workloads.

    `allowPostCopy`
    :   Specifies whether the post copy mode is enabled. You can enable post copy mode to allow the migration of one node to another to converge, even if a VM is running a heavy workload and the memory dirty rate is too high. Set allowPostCopy to true to enable post copy mode.
1.  Optional: If your main network is too busy for the migration, configure a secondary, dedicated migration network.

    :::note

    Post copy mode can impact performance during the transfer, and should not be used for critical data, or with unstable networks.
    
    :::