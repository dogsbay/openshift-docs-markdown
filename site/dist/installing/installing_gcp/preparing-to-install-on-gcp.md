---
title: Preparing to install on {{ gcp_short }}
---

# Preparing to install on {{ gcp_short }} {#preparing-to-install-on-gcp}

## Prerequisites {#preparing-to-install-on-gcp-prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).

## Requirements for installing OpenShift Container Platform on {{ gcp_short }} {#requirements-for-installing-ocp-on-gcp}

Before installing OpenShift Container Platform on {{ gcp_first }}, you must create a service account and configure a {{ gcp_short }} project. See [Configuring a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) for details about creating a project, enabling API services, configuring DNS, {{ gcp_short }} account limits, and supported {{ gcp_short }} regions.

If the cloud Identity and Access Management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, see [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-with-short-term-creds_installing-gcp-customizations), [Manually creating long-term credentials for {{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations), or both for other options.

## Choosing a method to install OpenShift Container Platform on {{ gcp_short }} {#choosing-an-method-to-install-ocp-on-gcp}

You can install OpenShift Container Platform on installer-provisioned or user-provisioned infrastructure. The default installation type uses installer-provisioned infrastructure, where the installation program provisions the underlying infrastructure for the cluster. You can also install OpenShift Container Platform on infrastructure that you provision. If you do not use infrastructure that the installation program provisions, you must manage and maintain the cluster resources yourself.

See [Installation process](/architecture/architecture-installation#installation-process_architecture-installation) for more information about installer-provisioned and user-provisioned installation processes.

### Installing a cluster on installer-provisioned infrastructure {#choosing-an-method-to-install-ocp-on-gcp-installer-provisioned}

You can install a cluster on {{ gcp_short }} infrastructure that is provisioned by the OpenShift Container Platform installation program, by using one of the following methods:

- *[***Installing a cluster quickly on {{ gcp_short }}***](/installing/installing_gcp/installing-gcp-default#installing-gcp-default)*: You can install OpenShift Container Platform on {{ gcp_short }} infrastructure that is provisioned by the OpenShift Container Platform installation program. You can install a cluster quickly by using the default configuration options.
- *[***Installing a customized cluster on {{ gcp_short }}***](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)*: You can install a customized cluster on {{ gcp_short }} infrastructure that the installation program provisions. You can customize your OpenShift Container Platform network configuration during installation, so that your cluster can coexist with your existing IP address allocations and adhere to your network requirements. The installation program allows for some customization to be applied at the installation stage. Many other customization options are available [post-installation](/post_installation_configuration/cluster-tasks#post-install-cluster-tasks).
- *[***Installing a cluster on {{ gcp_short }} in a restricted network***](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#installing-restricted-networks-gcp-installer-provisioned)*: You can install OpenShift Container Platform on {{ gcp_short }} on installer-provisioned infrastructure by using an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components. While you can install OpenShift Container Platform by using the mirrored content, your cluster still requires internet access to use the {{ gcp_short }} APIs.
- *[***Installing a cluster into an existing Virtual Private Cloud***](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc)*: You can install OpenShift Container Platform on an existing {{ gcp_short }} Virtual Private Cloud (VPC). You can use this installation method if you have constraints set by the guidelines of your company, such as limits on creating new accounts or infrastructure.
- *[***Installing a private cluster on an existing VPC***](/installing/installing_gcp/installing-gcp-private#installing-gcp-private)*: You can install a private cluster on an existing {{ gcp_short }} VPC. You can use this method to deploy OpenShift Container Platform on an internal network that is not visible to the internet.

### Installing a cluster on user-provisioned infrastructure {#choosing-an-method-to-install-ocp-on-gcp-user-provisioned}

You can install a cluster on {{ gcp_short }} infrastructure that you provision, by using one of the following methods:

- *[***Installing a cluster on {{ gcp_short }} with user-provisioned infrastructure***](/installing/installing_gcp/installing-gcp-user-infra#installing-gcp-user-infra)*: You can install OpenShift Container Platform on {{ gcp_short }} infrastructure that you provide. You can use the provided Infrastructure Manager templates to assist with the installation.
- *[***Installing a cluster with shared VPC on user-provisioned infrastructure in {{ gcp_short }}***](/installing/installing_gcp/installing-gcp-user-infra-vpc#installing-gcp-user-infra-vpc)*: You can use the provided Infrastructure Manager templates to create {{ gcp_short }} resources in a shared VPC infrastructure.
- *[***Installing a cluster on {{ gcp_short }} in a restricted network with user-provisioned infrastructure***](/installing/installing_gcp/installing-restricted-networks-gcp#installing-restricted-networks-gcp)*: You can install OpenShift Container Platform on {{ gcp_short }} in a restricted network with user-provisioned infrastructure. By creating an internal mirror of the installation release content, you can install a cluster that does not require an active internet connection to obtain the software components. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.

## Next steps {#preparing-to-install-on-gcp-next-steps}

- [Configuring a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account)
