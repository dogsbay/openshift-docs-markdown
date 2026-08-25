---
title: Installing a cluster on IBM PowerVC with customizations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on IBM PowerVC with customizations {id="installing-ibm-powervc-installer-custom"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-ibm-powervc-installer-custom" %}

To install a customized {{ product_title }} cluster on {{ ibm_power_vc_name }}, change the parameters in the `install-config.yaml` file before you run the installation program.

{% leveloffset +1 %}{% include "./modules/prereqs-ibm-powervc.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)

{% leveloffset +1 %}{% include "./modules/installation-ibm-powervc-infra-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-powervc-default-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-ibm-powervc-standard-config.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ ibm_power_vc_name }}](/installing/installing_ibm_powervc/installation-config-parameters-ibm-powervc#installation-config-parameters-ibm-powervc)

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-verifying-cluster-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

<a name="additional-resources_installing-ibm-powervc-customizations-console"></a>**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

<a name="additional-resources_installing-ibm-powervc-customizations-telemetry"></a>**Additional resources**

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)