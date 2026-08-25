{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster guidelines for image-based installation and deployment {id="ibi-image-based-install-cluster-guide_{{ context }}"}

For a successful image-based installation and deployment, see the following guidelines. {._abstract}

## Cluster guidelines {id="ibi-cluster-guidelines_{{ context }}"}

*   If you are using {{ rh_rhacm_first }}, to avoid including any {{ rh_rhacm }} resources in your seed image, you need to disable all optional {{ rh_rhacm }} add-ons before generating the seed image.
*   In a deployed cluster, the `clusterversion` resource shows a `creationTimestamp` that reflects the creation date of the seed cluster, not the deployment date of the new cluster.
To determine the deployment date of a new cluster, check the `creationTimestamp` field for the `Node` resource instead.

## Seed cluster guidelines {id="ibi-seed-cluster-guidelines_{{ context }}"}

*   If your cluster deployment at the edge of the network requires a proxy configuration, you must create a seed image from a seed cluster featuring a proxy configuration. The proxy configurations do not have to match.
*   The `clusterNetwork` and `serviceNetwork` network configurations in the seed cluster persist to the deployed cluster. The Lifecycle Agent embeds these settings in the seed image. You cannot change these settings later in the image-based installation and deployment process.
*   If you set a maximum transmission unit (MTU) in the seed cluster, you must set the same MTU value in the static network configuration for the image-based configuration ISO.
*   Your {{ sno }} seed cluster must have a shared `/var/lib/containers` directory for precaching images during an image-based installation. For more information see "Configuring a shared container partition between ostree stateroots".
*   Create a seed image from a {{ sno }} cluster that uses the same hardware as your target bare-metal host. The seed cluster must reflect your target cluster configuration for the following items:
    *   CPU topology
        *   CPU architecture
        *   Number of CPU cores
        *   Tuned performance configuration, such as number of reserved CPUs
    *   IP version configuration, either IPv4, IPv6, or dual-stack networking
    *   Disconnected registry

        :::note

        If the target cluster uses a disconnected registry, your seed cluster must use a disconnected registry. The registries do not have to be the same.
        
        :::

    *   FIPS configuration