---
title: Installing a cluster on Nutanix
---

# Installing a cluster on Nutanix {#installing-nutanix-installer-provisioned}

In OpenShift Container Platform version 4.22, you can choose one of the following options to install a cluster on your Nutanix instance:

***Using installer-provisioned infrastructure***: Use the procedures in the following sections to use installer-provisioned infrastructure. Installer-provisioned infrastructure is ideal for installing in connected or disconnected network environments. The installer-provisioned infrastructure includes an installation program that provisions the underlying infrastructure for the cluster.

***Using the Assisted Installer***: The {{ ai_full }} is hosted at console.redhat.com. The {{ ai_full }} cannot be used in disconnected environments. The {{ ai_full }} does not provision the underlying infrastructure for the cluster, so you must provision the infrastructure before you run the {{ ai_full }}. Installing with the {{ ai_full }} also provides integration with Nutanix, enabling autoscaling.

***Using user-provisioned infrastructure***: You provision the underlying infrastructure yourself and then complete the relevant installation steps.

**Additional resources**

- [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
- [Installing an on-premise cluster using the {{ ai_full }}](/installing/installing_on_prem_assisted/installing-on-prem-assisted#installing-on-prem-assisted)
- [Installing a cluster on any platform](/installing/installing_platform_agnostic/installing-platform-agnostic#installing-platform-agnostic)

## Prerequisites {#_prerequisites}

- You have reviewed details about the OpenShift Container Platform installation and update processes.
- The installation program requires access to port 9440 on Prism Central and Prism Element. You verified that port 9440 is accessible.
- If you use a firewall, you have met these prerequisites:

  - You confirmed that port 9440 is accessible. Control plane nodes must be able to reach Prism Central and Prism Element on port 9440 for the installation to succeed.
  - You configured the firewall to grant access to the sites that OpenShift Container Platform requires. This includes the use of Telemetry.
- If your Nutanix environment is using the default self-signed SSL certificate, replace it with a certificate that is signed by a CA. The installation program requires a valid CA-signed certificate to access to the Prism Central API. For more information about replacing the self-signed certificate, see the Nutanix AOS Security Guide.

  If your Nutanix environment uses an internal CA to issue certificates, you must configure a cluster-wide proxy as part of the installation process. For more information, see "Configuring a custom PKI".

  > [!IMPORTANT]
  > Use 2048-bit certificates. The installation fails if you use 4096-bit certificates with Prism Central 2022.x.

**Additional resources**

- [Installation configuration parameters for Nutanix](/installing/installing_nutanix/installation-config-parameters-nutanix#installation-config-parameters-nutanix)

## Additional resources {#_additional_resources}

- [OpenShift Container Platform installation and update processes](/architecture/architecture-installation#architecture-installation)
- [Configuring your firewall to grant required access](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Nutanix AOS Security Guide](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_1:mul-security-ssl-certificate-pc-t.html)
- [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
- [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
