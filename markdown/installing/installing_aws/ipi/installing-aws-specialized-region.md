---
title: "Installing a cluster on {{ aws_short }} into a specialized region"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ aws_short }} into a specialized region {id="installing-aws-specialized-region"}
{%- set context = "installing-aws-specialized-region" %}

You can install a cluster on {{ aws_first }} into specialized regions, including secret and top secret regions, government regions, and China regions. To configure the region, modify parameters in the `install-config.yaml` file before you install the cluster. {._abstract}

The following specialized regions are supported:

**Specialized regions**

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


:::warning

In {{ product_title }} {{ product_version }}, the installation program uses Cluster API instead of Terraform to provision cluster infrastructure during installations on AWS. Installing a cluster on {{ aws_short }} into a secret or top-secret region by using the Cluster API implementation has not been tested as of the release of {{ product_title }} {{ product_version }}. This document will be updated when installation into a secret region has been tested.

There is a known issue with Network Load Balancers' support for security groups in secret or top secret regions that causes installations in these regions to fail. For more information, see "OCPBUGS-33311".

The maximum supported MTU in the {{ aws_short }} SC2S and C2S regions is not the same as
the public regions. For more information about configuring MTU during installation,
see the _Cluster Network Operator configuration object_ section in _Installing
a cluster on {{ aws_short }} with network customizations_

:::


{% leveloffset +1 %}{% include "./modules/installing-aws-specialized-region-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-about-government-region.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-marketplace-government.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +1 %}{% include "./modules/installation-aws-regions-with-no-ami.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/private-clusters-default.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/private-clusters-about-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-custom-aws-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-security-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-upload-custom-rhcos-ami.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Import a disk as an EBS snapshot using VM Import/Export ({{ aws_short }} documentation)](https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html)
*   [Create an AMI from a snapshot ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot)

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-aws-config-yaml-customizations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-aws-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-applying-aws-security-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-aws-alternatives-storing-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/config-aws-short-term-creds.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-individually.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [OCPBUGS-33311](https://issues.redhat.com/browse/OCPBUGS-33311)
*   [Accessing the web console](/web_console/web-console#web-console)
*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Removing cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)