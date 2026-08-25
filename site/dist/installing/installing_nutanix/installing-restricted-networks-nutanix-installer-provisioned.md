---
title: Installing a cluster on Nutanix in a disconnected environment
---

# Installing a cluster on Nutanix in a disconnected environment {#installing-restricted-networks-nutanix-installer-provisioned}

In OpenShift Container Platform 4.22, you can install a cluster on Nutanix infrastructure in a restricted network by creating an internal mirror of the installation release content.

## Prerequisites {#_prerequisites}

- You have reviewed details about the OpenShift Container Platform installation and update processes.
- The installation program requires access to port 9440 on Prism Central and Prism Element. You verified that port 9440 is accessible.
- If you use a firewall, you have met these prerequisites:

  - You confirmed that port 9440 is accessible. Control plane nodes must be able to reach Prism Central and Prism Element on port 9440 for the installation to succeed.
  - You configured the firewall to grant access to the sites that OpenShift Container Platform requires. This includes the use of Telemetry.
- If your Nutanix environment is using the default self-signed SSL/TLS certificate, replace it with a certificate that is signed by a CA. The installation program requires a valid CA-signed certificate to access to the Prism Central API. For more information about replacing the self-signed certificate, see the Nutanix AOS Security Guide.

  If your Nutanix environment uses an internal CA to issue certificates, you must configure a cluster-wide proxy as part of the installation process. For more information, see "Configuring a custom PKI".

  > [!IMPORTANT]
  > Use 2048-bit certificates. The installation fails if you use 4096-bit certificates with Prism Central 2022.x.
- You have a container image registry, such as {{ quay }}. If you do not already have a registry, you can create a mirror registry using the *mirror registry for Red Hat OpenShift*.
- You have used the oc-mirror OpenShift CLI (oc) plugin to mirror all of the required OpenShift Container Platform content and other images, including the Nutanix CSI Operator, to your mirror registry.

  > [!IMPORTANT]
  > Because the installation media is on the mirror host, you can use that computer to complete all installation steps.

**Additional resources**

- [Installation configuration parameters for Nutanix](/openshift-docs-markdown/installing/installing_nutanix/installation-config-parameters-nutanix#installation-config-parameters-nutanix)

**Additional resources**

- [Adding a catalog to a cluster in Extensions](/openshift-docs-markdown/extensions/catalogs/managing-catalogs#olmv1-adding-a-catalog-to-a-cluster_managing-catalogs)

## Additional resources {#_additional_resources}

- [OpenShift Container Platform installation and update processes](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Configuring your firewall to grant required access](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Nutanix AOS Security Guide](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_1:mul-security-ssl-certificate-pc-t.html)
- [Configuring a custom PKI](/openshift-docs-markdown/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
- [*mirror registry for Red Hat OpenShift*](/openshift-docs-markdown/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)
- [oc-mirror OpenShift CLI (oc) plugin](/openshift-docs-markdown/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Registering your disconnected cluster](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
