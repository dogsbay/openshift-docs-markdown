---
title: Overview of machine management
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Overview of machine management {id="overview-of-machine-management"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "overview-of-machine-management" %}

You can use machine management to flexibly work with underlying infrastructure such as Amazon Web Services (AWS), Microsoft Azure, {{ gcp_first }}, {{ rh_openstack_first }}, and VMware vSphere to manage the {{ product_title }} cluster.
You can control the cluster and perform auto-scaling, such as scaling up and down the cluster based on specific workload policies.

It is important to have a cluster that adapts to changing workloads. The {{ product_title }} cluster can horizontally scale up and down when the load increases or decreases.

Machine management is implemented as a custom resource definition (CRD).
A CRD object defines a new unique object `Kind` in the cluster and enables the Kubernetes API server to handle the object’s entire lifecycle.

The Machine API Operator provisions the following resources:

*   `MachineSet`
*   `Machine`
*   `ClusterAutoscaler`
*   `MachineAutoscaler`
*   `MachineHealthCheck`

{% leveloffset +1 %}{% include "./modules/machine-api-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Machine phases and lifecycle](/machine_management/machine-phases-lifecycle#machine-phases-lifecycle)

{% leveloffset +1 %}{% include "./modules/machine-managing-compute-machines.md" %}{% endleveloffset %}

**Additional resources**

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)
*   [Boot image management](/machine_configuration/mco-update-boot-images#mco-update-boot-images)

{% leveloffset +1 %}{% include "./modules/machine-control-plane-machines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-applying-autoscaling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-adding-compute-machines-upi.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding compute machines to clusters with user-provisioned infrastructure manually](/machine_management/user_infra/adding-compute-user-infra-general#adding-compute-user-infra-general)