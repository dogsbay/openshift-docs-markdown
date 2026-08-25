---
title: Cluster API configuration options for Amazon Web Services
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Cluster API configuration options for Amazon Web Services {id="cluster-api-config-options-aws"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cluster-api-config-options-aws" %}

You can change the configuration of your {{ aws_first }} Cluster API machines by updating values in the Cluster API custom resource manifests.

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

The YAML file examples show configurations for an {{ aws_full }} cluster.

You can enable features by updating values in the Cluster API custom resource manifests.

{% leveloffset +1 %}{% include "./modules/capi-yaml-machine-template-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/capi-yaml-machine-set-aws.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-existing-placement-group.md" %}{% endleveloffset %}

**Additional resources**

*   [Elastic Fabric Adapter ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html)
*   [Placement groups for your Amazon EC2 instances (AWS documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#limitations-placement-groups)
*   [Supported instance types ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html#efa-instance-types)

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-imds-options.md" %}{% endleveloffset %}

**Additional resources**

*   [IMDSv2 ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html)
*   [Instance metadata access considerations ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html#imds-considerations)

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-dedicated-instances.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-dedicated-hosts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-dedicated-hosts-byo-template.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-feature-agnostic-nonguaranteed-instances.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-throughput-capi.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-feature-agnostic-capacity-reservation.md" %}{% endleveloffset %}

**Additional resources**

*   [On-Demand Capacity Reservations and Capacity Blocks for ML ({{ aws_short }} documentation)](https://docs.aws.amazon.com/en_us/AWSEC2/latest/UserGuide/capacity-reservation-overview.html)

{% leveloffset +2 %}{% include "./modules/machine-feature-aws-add-nvidia-gpu-node.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ aws_short }} G4dn instance type](https://aws.amazon.com/ec2/instance-types/#Accelerated_Computing)
*   [NVIDIA GPU Operator Community support matrix (NVIDIA documentation)](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html)
*   [NVIDIA AI Enterprise support matrix (NVIDIA documentation)](https://docs.nvidia.com/ai-enterprise/latest/product-support-matrix/index.html)