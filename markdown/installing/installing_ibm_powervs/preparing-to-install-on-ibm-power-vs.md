---
title: Installation methods
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation methods {id="preparing-to-install-on-ibm-power-vs"}
{%- set context = "preparing-to-install-on-ibm-power-vs" %}

Before you install {{ product_title }} on {{ ibm_power_server_name }}, review the available installer-provisioned infrastructure methods and configure the Cloud Credential Operator utility. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-methods-ibm-power-vs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing a cluster on {{ ibm_power_name }}](/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power)
*   [Rotating API keys](/post_installation_configuration/changing-cloud-credentials-configuration#refreshing-service-ids-ibm-cloud_changing-cloud-credentials-configuration)
*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)
*   [Installing a customized cluster on {{ ibm_power_server_name }}](/installing/installing_ibm_powervs/installing-ibm-power-vs-customizations#installing-ibm-power-vs-customizations)
*   [Installing a cluster on {{ ibm_power_server_name }} into an existing VPC](/installing/installing_ibm_powervs/installing-ibm-powervs-vpc#installing-ibm-powervs-vpc)
*   [Installing a private cluster on {{ ibm_power_server_name }}](/installing/installing_ibm_powervs/installing-ibm-power-vs-private-cluster#installing-ibm-power-vs-private-cluster)
*   [Installing a cluster on {{ ibm_power_server_name }} in a restricted network](/installing/installing_ibm_powervs/installing-restricted-networks-ibm-power-vs#installing-restricted-networks-ibm-power-vs)
*   [Configuring an {{ ibm_cloud_name }} account](/installing/installing_ibm_powervs/installing-ibm-cloud-account-power-vs#installing-ibm-cloud-account-power-vs)