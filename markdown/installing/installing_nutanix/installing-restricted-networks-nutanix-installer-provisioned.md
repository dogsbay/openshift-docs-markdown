---
title: Installing a cluster on Nutanix in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Nutanix in a disconnected environment {id="installing-restricted-networks-nutanix-installer-provisioned"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-restricted-networks-nutanix-installer-provisioned" %}

In {{ product_title }} {{ product_version }}, you can install a cluster on Nutanix infrastructure in a restricted network by creating an internal mirror of the installation release content.

## Prerequisites {id="_prerequisites"}

*   You have reviewed details about the {{ product_title }} installation and update processes.
*   The installation program requires access to port 9440 on Prism Central and Prism Element. You verified that port 9440 is accessible.
*   If you use a firewall, you have met these prerequisites:
    *   You confirmed that port 9440 is accessible. Control plane nodes must be able to reach Prism Central and Prism Element on port 9440 for the installation to succeed.
    *   You configured the firewall to grant access to the sites that {{ product_title }} requires. This includes the use of Telemetry.
*   If your Nutanix environment is using the default self-signed SSL/TLS certificate, replace it with a certificate that is signed by a CA. The installation program requires a valid CA-signed certificate to access to the Prism Central API. For more information about replacing the self-signed certificate, see the Nutanix AOS Security Guide.

    If your Nutanix environment uses an internal CA to issue certificates, you must configure a cluster-wide proxy as part of the installation process. For more information, see "Configuring a custom PKI".

    :::important

    Use 2048-bit certificates. The installation fails if you use 4096-bit certificates with Prism Central 2022.x.
    
    :::

*   You have a container image registry, such as {{ quay }}. If you do not already have a registry, you can create a mirror registry using the _mirror registry for Red&#160;Hat OpenShift_.
*   You have used the oc-mirror OpenShift CLI (oc) plugin to mirror all of the required {{ product_title }} content and other images, including the Nutanix CSI Operator, to your mirror registry.

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::


{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-adding-nutanix-root-certificates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-nutanix-download-rhcos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Nutanix](/installing/installing_nutanix/installation-config-parameters-nutanix#installation-config-parameters-nutanix)

{% leveloffset +2 %}{% include "./modules/installation-nutanix-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configuring-nutanix-failure-domains.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-configure-iam-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-updating-restricted-cluster-manifests.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding a catalog to a cluster in Extensions](/extensions/catalogs/managing-catalogs#olmv1-adding-a-catalog-to-a-cluster_managing-catalogs)

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [{{ product_title }} installation and update processes](/architecture/architecture-installation#architecture-installation)
*   [Configuring your firewall to grant required access](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Nutanix AOS Security Guide](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_1:mul-security-ssl-certificate-pc-t.html)
*   [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
*   [_mirror registry for Red&#160;Hat OpenShift_](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)
*   [oc-mirror OpenShift CLI (oc) plugin](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)