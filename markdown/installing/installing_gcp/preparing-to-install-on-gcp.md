---
title: "Preparing to install on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install on {{ gcp_short }} {id="preparing-to-install-on-gcp"}
{%- set context = "preparing-to-install-on-gcp" %}

Before you install {{ product_title }} on {{ gcp_first }}, review the requirements, supported methods, and preparation steps to plan your installation. {._abstract}

## Prerequisites {id="{{ context }}-prerequisites"}

*   You reviewed details about the {{ product_title }} installation and update processes. For more information, see "Installation and update".
*   You read the documentation on selecting a cluster installation method and preparing it for users. For more information, see "Selecting a cluster installation method and preparing it for users".

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)

## Requirements for installing {{ product_title }} on {{ gcp_short }} {id="requirements-for-installing-ocp-on-gcp" ._additional-resources}

Before installing {{ product_title }} on {{ gcp_first }}, you must create a service account and configure a {{ gcp_short }} project by creating a project, enabling API services, configuring DNS, setting {{ gcp_short }} account limits, and selecting supported {{ gcp_short }} regions. For more information, see "Configuring a {{ gcp_short }} project".

If the cloud Identity and Access Management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can configure your cluster to use short-term credentials, manually create long-term credentials, or both. For more information, see "Configuring a {{ gcp_short }} cluster to use short-term credentials" and "Manually creating long-term credentials".

**Additional resources**
{._additional-resources}

*   [Configuring a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account)
*   [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-with-short-term-creds_installing-gcp-customizations)
*   [Manually creating long-term credentials](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations)

## Choosing a method to install {{ product_title }} on {{ gcp_short }} {id="choosing-an-method-to-install-ocp-on-gcp" ._additional-resources}

You can install {{ product_title }} on installer-provisioned or user-provisioned infrastructure. The default installation type uses installer-provisioned infrastructure, where the installation program provisions the underlying infrastructure for the cluster. You can also install {{ product_title }} on infrastructure that you provision. If you do not use infrastructure that the installation program provisions, you must manage and maintain the cluster resources yourself. For more information about installer-provisioned and user-provisioned installation processes, see "Installation process".

**Additional resources**
{._additional-resources}

*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)

{% leveloffset +2 %}{% include "./modules/installing-gcp-ipi-methods.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-gcp-upi-methods.md" %}{% endleveloffset %}