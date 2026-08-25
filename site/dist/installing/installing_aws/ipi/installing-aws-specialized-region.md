---
title: Installing a cluster on {{ aws_short }} into a specialized region
---

# Installing a cluster on {{ aws_short }} into a specialized region {#installing-aws-specialized-region}

You can install a cluster on {{ aws_first }} into specialized regions, including secret and top secret regions, government regions, and China regions. To configure the region, modify parameters in the `install-config.yaml` file before you install the cluster.

The following specialized regions are supported:

***Specialized regions***

<table>
<thead>
<tr>
  <th>Region type</th>
  <th>Supported regions</th>
</tr>
</thead>
<tbody>
<tr>
  <td>China</td>
  <td><ul><li><code>cn-north-1</code> (Beijing)</li><li><code>cn-northwest-1</code> (Ningxia)</li></ul></td>
</tr>
<tr>
  <td>Secret and Top Secret</td>
  <td><ul><li><code>us-isob-east-1</code> (SC2S)</li><li><code>us-iso-east-1</code> (C2S)</li></ul></td>
</tr>
<tr>
  <td>Government</td>
  <td><ul><li><code>us-gov-east-1</code></li><li><code>us-gov-west-1</code></li></ul></td>
</tr>
</tbody>
</table>

> [!WARNING]
> In OpenShift Container Platform 4.22, the installation program uses Cluster API instead of Terraform to provision cluster infrastructure during installations on AWS. Installing a cluster on {{ aws_short }} into a secret or top-secret region by using the Cluster API implementation has not been tested as of the release of OpenShift Container Platform 4.22. This document will be updated when installation into a secret region has been tested.
>
> There is a known issue with Network Load Balancers' support for security groups in secret or top secret regions that causes installations in these regions to fail. For more information, see [OCPBUGS-33311](https://issues.redhat.com/browse/OCPBUGS-33311).
>
> The maximum supported MTU in the {{ aws_short }} SC2S and C2S regions is not the same as the public regions. For more information about configuring MTU during installation, see the *Cluster Network Operator configuration object* section in *Installing a cluster on {{ aws_short }} with network customizations*

**Additional resources**

- [Installation configuration parameters for AWS](/openshift-docs-markdown/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

**Additional resources**

- [Import a disk as an EBS snapshot using VM Import/Export ({{ aws_short }} documentation)](https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html)
- [Create an AMI from a snapshot ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot)

**Additional resources**

- [Installation configuration parameters for AWS](/openshift-docs-markdown/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

**Additional resources**

- [Installation configuration parameters for AWS](/openshift-docs-markdown/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

## Additional resources {#additional-resources_installing-aws-specialized-region}

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)
- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Removing cloud provider credentials](/openshift-docs-markdown/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)
