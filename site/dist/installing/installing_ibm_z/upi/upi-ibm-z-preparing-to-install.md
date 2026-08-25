---
title: Preparing to install a cluster on {{ ibm_z_title }} and {{ ibm_linuxone_title }} using user-provisioned infrastructure
---

# Preparing to install a cluster on {{ ibm_z_title }} and {{ ibm_linuxone_title }} using user-provisioned infrastructure {#upi-ibm-z-preparing-to-install}

Before installing OpenShift Container Platform on {{ ibm_z_name }} or {{ ibm_linuxone_name }} with user-provisioned infrastructure, you must verify connectivity, download the installation program, and prepare your pull secret and SSH key.

- Verifying internet connectivity for your cluster.
- Downloading the installation program.

  > [!NOTE]
  > If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see Mirroring images for a disconnected installation in the Additional resources section.
- Installing the {{ oc_first }}.

  > [!NOTE]
  > If you are installing in a disconnected environment, install `oc` to the mirror host.
- Generating an SSH key pair. You can use this key pair to authenticate into the OpenShift Container Platform cluster’s nodes after it is deployed.
- Validating DNS resolution.

## Additional resources {#additional-resources_upi-ibm-z-preparing-to-install}

- [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
