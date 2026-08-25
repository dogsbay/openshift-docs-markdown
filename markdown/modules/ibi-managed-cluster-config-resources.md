{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster configuration resources for deploying a preinstalled host {id="ibi-managed-cluster-config-resources_{{ context }}"}

To complete a deployment for a preinstalled host at a remote site, you must configure the following site-specifc cluster configuration resources in the hub cluster for each bare-metal host. {._abstract}

**Cluster configuration resources reference**

| Resource | Description |
| --- | --- |
| `Namespace` | Namespace for the managed {{ sno }} cluster. |
| `BareMetalHost` | Describes the physical host and its properties, such as the provisioning and hardware configuration. |
| `Secret` for the bare-metal host | Credentials for the host BMC. |
| `Secret` for the bare-metal host static network configuration | Optional: Describes static network configuration for the target host. |
| `Secret` for the image registry | Credentials for the image registry. The secret for the image registry must be of type `kubernetes.io/dockerconfigjson`. |
| `ImageClusterInstall` | References the bare-metal host, deployment, and image set resources. |
| `ClusterImageSet` | Describes the release images to use for the cluster. |
| `ClusterDeployment` | Describes networking, authentication, and platform-specific settings. |
| `ManagedCluster` | Describes cluster details to enable {{ rh_rhacm_first }} to register and manage. |
| `ConfigMap` | Optional: Describes additional configurations for the cluster deployment, such as adding a bundle of trusted certificates for the host to ensure trusted communications for cluster services. |