---
title: "Installing a cluster on {{ ibm_cloud_title }} into an existing VPC"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ ibm_cloud_title }} into an existing VPC {id="installing-ibm-cloud-vpc"}
{%- set context = "installing-ibm-cloud-vpc" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into an existing Virtual Private Cloud (VPC) on {{ ibm_cloud_name }}. The installation program provisions the rest of the required infrastructure, which you can further customize.

{% leveloffset +1 %}{% include "./modules/prereqs-ibm-cloud-installer-provisioned.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring an {{ ibm_cloud_name }} account](/installing/installing_ibm_cloud/installing-ibm-cloud-account#installing-ibm-cloud-account)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Configuring IAM for {{ ibm_cloud_name }}](/installing/installing_ibm_cloud/configuring-iam-ibm-cloud#configuring-iam-ibm-cloud)

{% leveloffset +1 %}{% include "./modules/installation-custom-ibm-cloud-vpc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-export-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ ibm_cloud_name }}](/installing/installing_ibm_cloud/installation-config-parameters-ibm-cloud-vpc#installation-config-parameters-ibm-cloud-vpc)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-ibm-cloud-tested-machine-types.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-ibm-cloud-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-create-iam-ibm-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

<a name="additional-resources_installing-ibm-cloud-vpc-console"></a>**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_installing-ibm-cloud-vpc"}
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)