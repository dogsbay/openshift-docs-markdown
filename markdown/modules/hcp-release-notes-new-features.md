{%- set _mod_docs_content_type = "REFERENCE" %}
# New features and enhancements {id="hcp-release-notes-new-features_{{ context }}"}

This release adds improvements related to the following components and concepts:


Monitor connectivity from the data plane to the control plane
:   In this release, you can monitor connectivity from the data plane to the control plane by using the `ControlPlaneConnectionAvailable` condition. For more information, see [Connectivity monitoring from the data plane to the control plane](/hosted_control_planes/hcp-observability#hcp-connect-control-plane_hcp-observability).


Implement network segmentation for hosted clusters
:   In this release, you can configure network isolation for hosted clusters with container-based isolation, VM-based isolation, or physical isolation. For more information, see [Network isolation for hosted clusters](/hosted_control_planes/hcp-networking#hcp-isolation-overview_hcp-networking).


Enable Amazon Spot Instance support
:   In this release, you can enable Amazon Spot Instance support for compute nodes to reduce cloud infrastructure costs. Amazon Spot Instances are suitable for hosted cluster workloads that are fault-tolerant, stateless, and flexible. For more information, see [Amazon Spot Instance support for node pools](/hosted_control_planes/hcp-manage/hcp-manage-aws#hcp-aws-spot-instance_hcp-managing-aws).


Back up etcd data for {{ hcp }} by using the etcd snapshot method (Technology Preview)
:   As an alternative for the default volume snapshot approach, you can use the etcd snapshot approach to back up and restore etcd data for {{ hcp }}. The etcd snapshot method is a Technology Preview feature. For more information, see [Backing up etcd data for {{ hcp }} by using the etcd snapshot method](/hosted_control_planes/hcp_high_availability/hcp-backup-etcd-snapshot#hcp-backup-etcd-snapshot).


Deploy self-managed {{ hcp }} on {{ azure_first }} (Technology Preview)
:   In this release, you can create public or private hosted clusters on {{ azure_short }} as a Technology Preview feature. For more information, see [Deploying {{ hcp }} on {{ azure_short }}](/hosted_control_planes/hcp-deploy/hcp-deploy-azure#hcp-deploy-azure). 


Control which optional capabilities are enabled in a hosted cluster
:   Typically, most optional capabilities in a hosted cluster are enabled by default. In this release, you can control which optional capabilities are enabled to reduce resource consumption and prevent unnecessary Operators and operands from being deployed. For more information, see [Capabilities for hosted clusters](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-cluster-capabilities_hcp-deploy-aws).