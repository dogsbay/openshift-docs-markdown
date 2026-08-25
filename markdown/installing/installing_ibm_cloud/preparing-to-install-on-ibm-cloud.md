---
title: Installation methods
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation methods {id="preparing-to-install-on-ibm-cloud"}
{%- set context = "preparing-to-install-on-ibm-cloud" %}

You can install {{ product_title }} on {{ ibm_cloud_name }} by using installer-provisioned infrastructure. Choose an installation method based on your network connectivity, VPC configuration, and customization requirements. {._abstract}

Installing {{ product_title }} on {{ ibm_cloud_name }} by using user-provisioned infrastructure is not supported at this time.

## Installing a cluster on installer-provisioned infrastructure {id="choosing-an-method-to-install-ocp-on-ibm-cloud-installer-provisioned"}

You can install a cluster on {{ ibm_cloud_name }} infrastructure that is provisioned by the {{ product_title }} installation program by using one of the following methods:

*   Installing a customized cluster on {{ ibm_cloud_name }}: You can install a customized cluster on {{ ibm_cloud_name }} infrastructure that the installation program provisions. The installation program allows for some customization to be applied at the installation stage. Many other customization options are available post-installation.
*   Installing a cluster on {{ ibm_cloud_name }} with network customizations: You can customize your {{ product_title }} network configuration during installation, so that your cluster can coexist with your existing IP address allocations and adhere to your network requirements.
*   Installing a cluster on {{ ibm_cloud_name }} into an existing VPC: You can install {{ product_title }} on an existing {{ ibm_cloud_name }} Virtual Private Cloud (VPC). You can use this installation method if you have constraints set by the guidelines of your company, such as limits when creating new accounts or infrastructure.
*   Installing a private cluster on an existing VPC: You can install a private cluster on an existing VPC. You can use this method to deploy {{ product_title }} on an internal network that is not visible to the internet.
*   Installing a cluster on {{ ibm_cloud_title }} in a restricted network: You can install {{ product_title }} on {{ ibm_cloud_title }} on installer-provisioned infrastructure by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components.

## Additional resources {id="additional-resources_preparing-to-install-on-ibm-cloud" ._additional-resources}

*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)
*   [Configuring an {{ ibm_cloud_name }} account](/installing/installing_ibm_cloud/installing-ibm-cloud-account#installing-ibm-cloud-account)
*   [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#post-install-cluster-tasks)
*   [Installing a cluster on {{ ibm_cloud_name }} with customizations](/installing/installing_ibm_cloud/installing-ibm-cloud-customizations#installing-ibm-cloud-customizations)
*   [Installing a cluster on {{ ibm_cloud_name }} into an existing VPC](/installing/installing_ibm_cloud/installing-ibm-cloud-vpc#installing-ibm-cloud-vpc)
*   [Installing a private cluster on {{ ibm_cloud_title }}](/installing/installing_ibm_cloud/installing-ibm-cloud-private#installing-ibm-cloud-private)
*   [Installing a cluster on {{ ibm_cloud_title }} in a disconnected environment](/installing/installing_ibm_cloud/installing-ibm-cloud-restricted#installing-ibm-cloud-restricted)