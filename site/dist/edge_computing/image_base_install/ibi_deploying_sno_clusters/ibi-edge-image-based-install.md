---
title: About image-based deployments for managed {{ sno }}
---

# About image-based deployments for managed {{ sno }} {#ibi-edge-image-based-install}

When a host preinstalled with {{ sno }} using an image-based installation arrives at a remote site, a technician can easily reconfigure and deploy the host in a matter of minutes.

For clusters with a hub-and-spoke architecture, to complete the deployment of a preinstalled host, you must first define site-specific configuration resources on the hub cluster for each host. These resources contain configuration information such as the properties of the bare-metal host, authentication details, and other deployment and networking information.

The Image Based Install (IBI) Operator creates a configuration ISO from these resources, and then boots the host with the configuration ISO attached. The host mounts the configuration ISO and runs the reconfiguration process. When the reconfiguration completes, the {{ sno }} cluster is ready.

> [!NOTE]
> You must create distinct configuration resources for each bare-metal host.

See the following high-level steps to deploy a preinstalled host in a cluster with a hub-and-spoke architecture:

1. Install the IBI Operator on the hub cluster.
2. Create site-specific configuration resources in the hub cluster for each host.
3. The IBI Operator creates a configuration ISO from these resources and boots the target host with the configuration ISO attached.
4. The host mounts the configuration ISO and runs the reconfiguration process. When the reconfiguration completes, the {{ sno }} cluster is ready.

> [!NOTE]
> Alternatively, you can manually deploy a preinstalled host for a cluster without using a hub cluster. You must define an `ImageBasedConfig` resource and an installation manifest, and provide these as inputs to the `openshift-install` installation program. For more information, see "Deploying a {{ sno }} cluster using the `openshift-install` program".

**Additional resources**

- [Deploying a {{ sno }} cluster using the `openshift-install` program](/openshift-docs-markdown/edge_computing/image_base_install/ibi_deploying_sno_clusters/ibi-edge-image-based-install-standalone#create-standalone-config-iso_ibi-edge-image-based-install)

**Additional resources**

- [Using image pull secrets](/openshift-docs-markdown/openshift_images/managing_images/using-image-pull-secrets)
- [Cluster configuration resources for deploying a preinstalled host](/openshift-docs-markdown/edge_computing/image_base_install/ibi_deploying_sno_clusters/ibi-edge-image-based-install#ibi-managed-cluster-config-resources_ibi-edge-image-based-install)

**Additional resources**

- [About the BareMetalHost resource](/openshift-docs-markdown/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-about-the-baremetalhost-resource_bare-metal-postinstallation-configuration)
- [Using image pull secrets](/openshift-docs-markdown/openshift_images/managing_images/using-image-pull-secrets)
- [Reference specifications for the image-based-config.yaml manifest](/openshift-docs-markdown/edge_computing/image_base_install/ibi-factory-image-based-install#ibi-installer-installation-config_ibi-factory-image-based-install)
