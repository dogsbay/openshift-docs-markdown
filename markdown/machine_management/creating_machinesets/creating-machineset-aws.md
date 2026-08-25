---
title: "Creating a compute machine set on {{ aws_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on {{ aws_short }} {id="creating-machineset-aws"}
{%- set context = "creating-machineset-aws" %}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on {{ aws_first }}. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)

{% leveloffset +1 %}{% include "./modules/machineset-aws-existing-placement-group.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating-imds-options.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Use the Instance Metadata Service to access instance metadata ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html)
*   [Boot image management](/machine_configuration/mco-update-boot-images#mco-update-boot-images)

{% leveloffset +1 %}{% include "./modules/machineset-creating-gp3-throughput.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating-dedicated-instances.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-dedicated-hosts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-dedicated-hosts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-dedicated-hosts-byo-machineset.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-non-guaranteed-instance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-non-guaranteed-instances.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-capacity-reservation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nvidia-gpu-aws-adding-a-gpu-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nvidia-gpu-aws-deploying-the-node-feature-discovery-operator.md" %}{% endleveloffset %}