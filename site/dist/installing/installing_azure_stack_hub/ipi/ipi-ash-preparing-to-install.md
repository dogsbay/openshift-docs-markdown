---
title: Preparing to install a cluster on Azure Stack Hub
---

# Preparing to install a cluster on Azure Stack Hub {#ash-preparing-to-install-ipi}

Prepare to install an OpenShift Container Platform cluster on Azure Stack Hub by verifying connectivity, configuring your account, generating SSH keys, downloading the installation program, installing the CLI, and setting up cloud credentials.

- Verifying internet connectivity for your cluster.
- Configuring an Azure Stack Hub account. See "Configuring an Azure Stack Hub account".
- Generating an SSH key pair. You can use this key pair to authenticate into the OpenShift Container Platform cluster’s nodes after it is deployed.
- Downloading the installation program.
- Installing the {{ oc_first }}.
- The Cloud Credential Operator (CCO) only supports your cloud provider in manual mode. As a result, you must manually manage cloud credentials by specifying the identity and access management (IAM) secrets for your cloud provider. See "Manually manage cloud credentials".

**Additional resources**

- [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {#additional-resources_ash-preparing-to-install-ipi}

- [Configuring an Azure Stack Hub account](/installing/installing_azure_stack_hub/installing-azure-stack-hub-account#installing-azure-stack-hub-account)
- [Manually manage cloud credentials](/installing/installing_azure_stack_hub/ipi/installing-azure-stack-hub-default#manually-create-iam_installing-azure-stack-hub-default)
