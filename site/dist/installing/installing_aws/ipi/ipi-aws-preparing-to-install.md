---
title: Preparing to install a cluster on AWS
---

# Preparing to install a cluster on AWS {#ipi-aws-preparing-to-install}

To install an OpenShift Container Platform cluster on {{ aws_first }}, you must verify your internet connectivity, download the installation program, install the {{ oc_first }}, and generate an SSH key pair.

If required, you also need to manually create long-term credentials for {{ aws_short }} or configure an {{ aws_short }} cluster to use short-term credentials with Amazon Web Services Security Token Service ({{ aws_short }} STS).

The following list outlines in detail the steps to prepare to install an OpenShift Container Platform cluster on {{ aws_short }}:

- Verifying internet connectivity for your cluster.
- [Configuring an {{ aws_short }} account](/openshift-docs-markdown/installing/installing_aws/installing-aws-account#installing-aws-account).
- Downloading the installation program.

  > [!NOTE]
  > If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images).
- Installing the {{ oc_first }}.

  > [!NOTE]
  > If you are installing in a disconnected environment, install `oc` to the mirror host.
- Generating an SSH key pair. You can use this key pair to authenticate into the OpenShift Container Platform cluster’s nodes after it is deployed.
- If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, [manually creating long-term credentials for {{ aws_short }}](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations) or [configuring an {{ aws_short }} cluster to use short-term credentials](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations) with ({{ aws_short }} STS).

**Additional resources**

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
