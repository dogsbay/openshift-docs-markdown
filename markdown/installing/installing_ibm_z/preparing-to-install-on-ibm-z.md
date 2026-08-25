---
title: Installation methods
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation methods {id="preparing-to-install-on-ibm-z"}
{%- set context = "preparing-to-install-on-ibm-z" %}

You can install an {{ product_title }} cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }} by using a variety of different installation methods. Choose the method that best fits your environment, such as a disconnected deployment or a minimally configured installation.


:::note

While this document refers only to {{ ibm_z_name }}, all information in it also applies to {{ ibm_linuxone_name }}.

:::


{% leveloffset +1 %}{% include "./modules/ibm-z-installation-methods-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibm-z-upi-installation-overview.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
*   [Agent-based Installer for {{ ibm_z_name }}](https://console.redhat.com/openshift/install/ibmz/agent-based)
*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)
*   [Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)
*   [Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in a disconnected environment](/installing/installing_ibm_z/upi/installing-restricted-networks-ibm-z#installing-restricted-networks-ibm-z)
*   [Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z-kvm#installing-ibm-z-kvm)
*   [Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }} in a disconnected environment](/installing/installing_ibm_z/upi/installing-restricted-networks-ibm-z-kvm#installing-restricted-networks-ibm-z-kvm)
*   [Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z-lpar#installing-ibm-z-lpar)
*   [Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }} in a disconnected environment](/installing/installing_ibm_z/upi/installing-restricted-networks-ibm-z-lpar#installing-restricted-networks-ibm-z-lpar)