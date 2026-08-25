{%- set _mod_docs_content_type = "REFERENCE" %}
# Updating a cluster in a disconnected environment {id="updating-clusters-overview-update-restricted-network-cluster_{{ context }}"}

Mirror release images to a disconnected environment so that you can update a cluster that does not have direct internet access. {._abstract}

[About cluster updates in a disconnected environment](/disconnected/updating/index#about-disconnected-updates): If your mirror host cannot access both the internet and the cluster, you can mirror the images to a file system that is disconnected from that environment. You can then bring that host or removable media across that gap. If the local container registry and the cluster are connected to the mirror host of a registry, you can directly push the release images to the local registry.

*   [Preparing your mirror host](/disconnected/updating/mirroring-image-repository#updating-disconnected-mirror-host_mirroring-ocp-image-repository)
*   [Configuring credentials that allow images to be mirrored](/disconnected/updating/mirroring-image-repository#installation-adding-registry-pull-secret_mirroring-ocp-image-repository_mirroring-ocp-image-repository)
*   [Mirroring {{ product_title }} images](/disconnected/updating/mirroring-image-repository#mirroring-ocp-image-repository_mirroring-ocp-image-repository)
*   [Updating the disconnected cluster](/disconnected/updating/disconnected-update#update-disconnected_updating-disconnected-cluster)
*   [Configuring image registry repository mirroring](/disconnected/updating/disconnected-update#images-configuration-registry-mirror_updating-disconnected-cluster)
*   [Widening the scope of the mirror image catalog to reduce the frequency of cluster node reboots](/disconnected/updating/disconnected-update#generating-icsp-object-scoped-to-a-registry_updating-disconnected-cluster)
*   [Installing the OpenShift Update Service Operator](/disconnected/updating/disconnected-update-osus#update-service-install_updating-disconnected-cluster-osus)
*   [Creating an OpenShift Update Service application](/disconnected/updating/disconnected-update-osus#update-service-create-service_updating-disconnected-cluster-osus)
*   [Deleting an OpenShift Update Service application](/disconnected/updating/uninstalling-osus#update-service-delete-service_updating-disconnected-cluster-osus)
*   [Uninstalling the OpenShift Update Service Operator](/disconnected/updating/uninstalling-osus#update-service-uninstall_updating-disconnected-cluster-osus)