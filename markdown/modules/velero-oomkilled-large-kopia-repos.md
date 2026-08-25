{%- set _mod_docs_content_type = "PROCEDURE" %}

# Velero server terminates with OOMKilled when accessing large Kopia repositories {id="velero-oomkilled-large-kopia-repos_{{ context }}"}

If the Velero server accesses large Kopia repositories, the Velero pod might crash and report an `OOMKilled` event. {._abstract}

During operations that access large Kopia repositories, such as backup deletion or checking repository existence, the Velero pod crashes and reports an `OOMKilled` event.

This issue is typically caused by high memory usage when the Velero server loads many Kopia index blobs and related repository metadata. When the Backup Repository controller accesses a large-scale repository, the required memory can exceed the default limits.

To resolve this issue, identify the peak memory usage and increase the memory limits in the `DataProtectionApplication` (DPA) custom resource (CR) so that the Velero server has enough memory to load the repository metadata.

**Procedure**

1.  Check the Velero logs around the time of the `OOMKilled` event for repository-open or index-loading activity.
1.  Note the approximate maximum memory usage observed for the Velero pod by using a command such as `oc top pods`.
1.  Edit the `DataProtectionApplication` CR:
    ```terminal
    $ oc edit dpa __<dpa_name>__ -n openshift-adp
    ```

    where:

    `<dpa_name>`
    :   Specifies the name of your `DataProtectionApplication` CR.

1.  Increase the Velero container memory request or limit in the `spec.configuration.velero.podConfig` block to exceed the observed peak. For example:
    ```yaml
    spec:
      configuration:
        velero:
          podConfig:
            resourceAllocations:
              limits:
                memory: __<memory_limit>__
              requests:
                memory: 512Mi
    ```

    where:

    `<memory_limit>`
    :   Specifies a value that exceeds the maximum memory usage you observed in the logs, for example, `2Gi`.

1.  Save your changes.

    The Velero pod redeploys automatically with the new limits.
1.  Monitor the environment and repeat the process if necessary until `OOMKilled` events no longer occur.
1.  Record the final stable memory values for your environment to use for future sizing guidance.