---
title: Installation methods
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation methods {id="preparing-to-install-on-vsphere"}
{%- set context = "preparing-to-install-on-vsphere" %}

You can install an {{ product_title }} cluster on vSphere by using a variety of installation methods. Each method is suitable for different use cases, such as disconnected environments or minimal configuration. {._abstract}

{% leveloffset +1 %}{% include "./modules/preparing-to-install-on-vsphere-assisted-installer-reference.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
*   [Installing an on-premise cluster using the {{ ai_full }}](/installing/installing_on_prem_assisted/installing-on-prem-assisted#installing-on-prem-assisted)

{% leveloffset +1 %}{% include "./modules/preparing-to-install-on-vsphere-agent-based-installer-reference.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/preparing-to-install-on-vsphere-installer-provisioned-reference.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing a cluster on vSphere](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned#installing-vsphere-installer-provisioned)
*   [Installing a cluster on vSphere with customizations](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned-customizations#installing-vsphere-installer-provisioned-customizations)
*   [Installing a cluster on vSphere in a disconnected environment](/installing/installing_vsphere/ipi/installing-restricted-networks-installer-provisioned-vsphere#installing-restricted-networks-installer-provisioned-vsphere)

{% leveloffset +1 %}{% include "./modules/preparing-to-install-on-vsphere-user-provisioned-reference.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing a cluster on vSphere with user-provisioned infrastructure](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)
*   [Installing a cluster on vSphere in a disconnected environment with user-provisioned infrastructure](/installing/installing_vsphere/upi/installing-restricted-networks-vsphere#installing-restricted-networks-vsphere)
*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)