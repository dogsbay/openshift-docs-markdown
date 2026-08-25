---
title: Installing a cluster with the support for configuring multi-architecture compute machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster with the support for configuring multi-architecture compute machines {id="upi-aws-multiarch-support"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "upi-aws-multiarch-support" %}

To run workloads across `x86_64` and ARM nodes, you can install an {{ product_title }} cluster on {{ aws_first }} with multi-architecture compute machine support.


:::note

When you have nodes with multiple architectures in your cluster, the architecture of your image must be consistent with the architecture of the node. You must ensure that the pod is assigned to the node with the appropriate architecture and that it matches the image architecture.

:::


You can install an {{ aws_short }} cluster with the support for configuring multi-architecture compute machines. After installing the {{ aws_short }} cluster, you can add multi-architecture compute machines to the cluster in the following ways:

*   Adding 64-bit x86 compute machines to a cluster that uses 64-bit ARM control plane machines and already includes 64-bit ARM compute machines. In this case, 64-bit x86 is considered the secondary architecture.
*   Adding 64-bit ARM compute machines to a cluster that uses 64-bit x86 control plane machines and already includes 64-bit x86 compute machines. In this case, 64-bit ARM is considered the secondary architecture.

{% include "./snippets/about-multiarch-tuning-operator.md" %}

{% leveloffset +1 %}{% include "./modules/installing-a-cluster-with-multiarch-support.md" %}{% endleveloffset %}

**Additional resources**

*   [Deploying the cluster](/installing/installing_aws/ipi/installing-aws-localzone#installation-launching-installer_installing-aws-localzone)
*   [Scheduling workloads on clusters with multi-architecture compute machines](/post_installation_configuration/configuring-multi-arch-compute-machines/multi-architecture-compute-managing#scheduling-workloads-on-clusters-with-multi-architecture-compute-machines)
*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)