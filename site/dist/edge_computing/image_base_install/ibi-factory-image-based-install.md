---
title: Preinstalling {{ sno }} using an image-based installation
---

# Preinstalling {{ sno }} using an image-based installation {#ibi-factory-image-based-install}

Use the `openshift-install` program to create a live installation ISO for preinstalling {{ sno }} on bare-metal hosts. For more information about downloading the installation program, see "Installation process" in the "Additional resources" section.

The installation program takes a seed image URL and other inputs, such as the release version of the seed image and the disk to use for the installation process, and creates a live installation ISO. You can then start the host using the live installation ISO to begin preinstallation. When preinstallation is complete, the host is ready to ship to a remote site for the final site-specific configuration and deployment.

The following are the high-level steps to preinstall a {{ sno }} cluster using an image-based installation:

- Generate a seed image.
- Create a live installation ISO using the `openshift-install` installation program.
- Boot the host using the live installation ISO to preinstall the host.

**Additional resources**

- [Installation process](/openshift-docs-markdown/installing/overview/index#installation-process_ocp-installation-overview)

**Additional resources**

- [Reference specifications for the `image-based-installation-config.yaml` manifest](/openshift-docs-markdown/edge_computing/image_base_install/ibi_deploying_sno_clusters/ibi-edge-image-based-install-standalone#ibi-installer-configuration-config_ibi-edge-image-based-install)

**Additional resources**

- [Configuring a shared container partition between ostree stateroots](/openshift-docs-markdown/edge_computing/image_base_install/ibi-preparing-for-image-based-install#cnf-image-based-upgrade-shared-container-partition_ibi-preparing-image-based-install)
