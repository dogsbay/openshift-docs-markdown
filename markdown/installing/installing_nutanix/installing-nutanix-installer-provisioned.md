---
title: Installing a cluster on Nutanix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on Nutanix {id="installing-nutanix-installer-provisioned"}
{%- set context = "installing-nutanix-installer-provisioned" -%}
{%- set platform = "Nutanix" %}

In {{ product_title }} version {{ product_version }}, you can choose one of the following options to install a cluster on your Nutanix instance: {._abstract}

**Using installer-provisioned infrastructure**: Use the procedures in the following sections to use installer-provisioned infrastructure. Installer-provisioned infrastructure is ideal for installing in connected or disconnected network environments. The installer-provisioned infrastructure includes an installation program that provisions the underlying infrastructure for the cluster.

**Using the Assisted Installer**: The {{ ai_full }} is hosted at console.redhat.com. The {{ ai_full }} cannot be used in disconnected environments. The {{ ai_full }} does not provision the underlying infrastructure for the cluster, so you must provision the infrastructure before you run the {{ ai_full }}. Installing with the {{ ai_full }} also provides integration with Nutanix, enabling autoscaling.

**Using user-provisioned infrastructure**: You provision the underlying infrastructure yourself and then complete the relevant installation steps.

**Additional resources**
{._additional-resources}

*   [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
*   [Installing an on-premise cluster using the {{ ai_full }}](/installing/installing_on_prem_assisted/installing-on-prem-assisted#installing-on-prem-assisted)
*   [Installing a cluster on any platform](/installing/installing_platform_agnostic/installing-platform-agnostic#installing-platform-agnostic)

## Prerequisites {id="_prerequisites" ._additional-resources}

*   You have reviewed details about the {{ product_title }} installation and update processes.
*   The installation program requires access to port 9440 on Prism Central and Prism Element. You verified that port 9440 is accessible.
*   If you use a firewall, you have met these prerequisites:
    *   You confirmed that port 9440 is accessible. Control plane nodes must be able to reach Prism Central and Prism Element on port 9440 for the installation to succeed.
    *   You configured the firewall to grant access to the sites that {{ product_title }} requires. This includes the use of Telemetry.
*   If your Nutanix environment is using the default self-signed SSL certificate, replace it with a certificate that is signed by a CA. The installation program requires a valid CA-signed certificate to access to the Prism Central API. For more information about replacing the self-signed certificate, see the Nutanix AOS Security Guide.

    If your Nutanix environment uses an internal CA to issue certificates, you must configure a cluster-wide proxy as part of the installation process. For more information, see "Configuring a custom PKI".

    :::important

    Use 2048-bit certificates. The installation fails if you use 4096-bit certificates with Prism Central 2022.x.
    
    :::

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nutanix-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-adding-nutanix-root-certificates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for Nutanix](/installing/installing_nutanix/installation-config-parameters-nutanix#installation-config-parameters-nutanix)

{% leveloffset +2 %}{% include "./modules/installation-nutanix-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configuring-nutanix-failure-domains.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-configure-iam-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-nutanix-ccm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-services-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-configuring-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [{{ product_title }} installation and update processes](/architecture/architecture-installation#architecture-installation)
*   [Configuring your firewall to grant required access](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Nutanix AOS Security Guide](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_1:mul-security-ssl-certificate-pc-t.html)
*   [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)