---
title: OpenShift Container Platform installation overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ product_title }} installation overview {id="ocp-installation-overview"}
{%- set context = "ocp-installation-overview" %}

Learn about the installation methods, requirements, and process for deploying an {{ product_title }} cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing a cluster without an external registry](/installing/installing_with_agent_based_installer/installing-ove#installing-ove)

{% leveloffset +2 %}{% include "./modules/install-openshift-common-terms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-process.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Control plane node sizing](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#master-node-sizing_recommended-control-plane-practices)
*   [Red Hat OpenShift Network Calculator](https://access.redhat.com/labs/ocpnc/)

{% leveloffset +2 %}{% include "./modules/ipi-verifying-nodes-after-installation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Getting the BareMetalHost resource](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-getting-the-baremetalhost-resource_bare-metal-postinstallation-configuration)
*   [Following the progress of the installation](/installing/installing_bare_metal/ipi/ipi-install-installing-a-cluster#ipi-install-following-the-progress-of-the-installation_ipi-install-installing-a-cluster)
*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
*   [Assisted Installer for OpenShift Container Platform](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)

{% leveloffset +2 %}{% include "./modules/installation-overview-scope-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-openshift-local.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/supported-platforms-for-openshift-clusters.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Supported installation methods for different platforms](/installing/overview/installing-preparing#installing-preparing-supported-installation-methods-reference_installing-preparing)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Red Hat OpenShift Network Calculator](https://access.redhat.com/labs/ocpnc/)