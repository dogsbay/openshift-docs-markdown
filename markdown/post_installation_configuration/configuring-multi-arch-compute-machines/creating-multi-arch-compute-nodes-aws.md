---
title: Creating a cluster with multi-architecture compute machines on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "creating-multi-arch-compute-nodes-aws" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a cluster with multi-architecture compute machines on AWS {id="creating-multi-arch-compute-nodes-aws"}

To deploy a cluster on {{ aws_first }} with multi-architecture compute machines, you must first create a single-architecture installer-provisioned cluster that uses the multi-architecture installer binary.  {._abstract}

You can also migrate your current cluster with single-architecture compute machines to a cluster with multi-architecture compute machines. After creating a multi-architecture cluster, you can add nodes with different architectures to the cluster. 

{% leveloffset +1 %}{% include "./modules/multi-architecture-modify-machine-set-aws.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing a cluster on AWS with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
*   [Tested instance types for AWS 64-bit ARM](/installing/installing_aws/ipi/installing-aws-customizations#installation-aws-arm-tested-machine-types_installing-aws-customizations)
*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)