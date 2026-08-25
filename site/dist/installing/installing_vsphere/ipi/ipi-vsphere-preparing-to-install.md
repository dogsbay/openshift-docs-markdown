---
title: Preparing to install a cluster using installer-provisioned infrastructure
---

# Preparing to install a cluster using installer-provisioned infrastructure {#ipi-vsphere-preparing-to-install}

You should familiarize yourself with the steps you must perform before install an OpenShift Container Platform cluster on vSphere.

You prepare to install an OpenShift Container Platform cluster on vSphere by completing the following steps:

- Downloading the installation program.

  > [!NOTE]
  > If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see "Mirroring images for a disconnected installation".
- Installing the {{ oc_first }}.

  > [!NOTE]
  > If you are installing in a disconnected environment, install `oc` to the mirror host.
- Generating an SSH key pair. You can use this key pair to authenticate into the OpenShift Container Platform cluster’s nodes after it is deployed.
- Adding your vCenter’s trusted root CA certificates to your system trust.

## Additional resources {#additional-resources_ipi-vsphere-preparing-to-install}

- [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
