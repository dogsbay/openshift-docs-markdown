{%- set _mod_docs_content_type = "REFERENCE" %}
# Platform {id="sdpolicy-platform_{{ context }}"}

This guide outlines the automated backup measures provided by the {{ product_title }} service and clarifies the steps you must take to protect your unique application data. {._abstract}

## Cluster backup policy {id="cluster-backup-policy_{{ context }}"}


:::important

It is critical that customers have a backup plan for their applications and application data.

:::

Application and application data backups are not a part of the {{ product_title }} service.
All Kubernetes objects in each {{ product_title }} cluster are backed up to facilitate a prompt recovery in the unlikely event that a cluster becomes irreparably inoperable.

The backups are stored in a secure object storage (Multi-AZ) bucket in the same account as the cluster.
Node root volumes are not backed up because Red Hat Enterprise Linux CoreOS is fully managed by the {{ OCP }} cluster and no stateful data should be stored on the root volume of a node.

The following table shows the frequency of backups:
| Component | Snapshot Frequency | Retention | Notes |
| --- | --- | --- | --- |
| Full object store backup | Daily at 0100 UTC | 7 days | This is a full backup of all Kubernetes objects. No persistent volumes (PVs) are backed up in this backup schedule. |
| Full object store backup | Weekly on Mondays at 0200 UTC | 30 days | This is a full backup of all Kubernetes objects. No PVs are backed up in this backup schedule. |
| Full object store backup | Hourly at 17 minutes past the hour | 24 hours | This is a full backup of all Kubernetes objects. No PVs are backed up in this backup schedule. |

## Autoscaling {id="autoscaling_{{ context }}"}
Node autoscaling is available on {{ product_title }}. See [About autoscaling nodes on a cluster](https://docs.openshift.com/dedicated/osd_cluster_admin/osd_nodes/osd-nodes-about-autoscaling-nodes.html) for more information on autoscaling nodes on a cluster.

## Daemon sets {id="daemon-sets_{{ context }}"}
Customers may create and run DaemonSets on {{ product_title }}. In order to restrict DaemonSets to only running on worker nodes, use the following nodeSelector:

```yaml
...
spec:
  nodeSelector:
    role: worker
...
```

## Multiple availability zone {id="multi-availability-zones_{{ context }}"}
In a multiple availability zone cluster, control nodes are distributed across availability zones and at least three worker nodes are required in each availability zone.

## Node labels {id="node-labels_{{ context }}"}
Custom node labels are created by Red Hat during node creation and cannot be changed on {{ product_title }} clusters at this time.

## OpenShift version {id="openshift-version_{{ context }}"}
{{ product_title }} is run as a service and is kept up to date with the latest {{ OCP }} version.

## Upgrades {id="upgrades_{{ context }}"}
Refer to [{{ product_title }} Life Cycle](https://access.redhat.com/support/policy/updates/openshift/dedicated) for more information on the upgrade policy and procedures.

## Windows containers {id="windows-containers_{{ context }}"}
Windows containers are not available on {{ product_title }} at this time.

## Container engine {id="container-engine_{{ context }}"}
{{ product_title }} runs on OpenShift 4 and uses [CRI-O ](https://www.redhat.com/en/blog/red-hat-openshift-container-platform-4-now-defaults-cri-o-underlying-container-engine) as the only available container engine.

## Operating system {id="operating-system_{{ context }}"}
{{ product_title }} runs on OpenShift 4 and uses Red Hat Enterprise Linux CoreOS as the operating system for all control plane and worker nodes.

## Red Hat Operator support {id="_red_hat_operator_support"}
<a name="sdpolicy-red-hat-operator_{{ context }}"></a>

Red Hat workloads typically refer to Red Hat-provided Operators made available through Operator Hub. Red Hat workloads are not managed by the Red Hat SRE team, and must be deployed on worker nodes. These Operators may require additional Red Hat subscriptions, and may incur additional cloud infrastructure costs. Examples of these Red Hat-provided Operators are:

*   {{ rhq_short }}
*   Red Hat Advanced Cluster Management
*   Red Hat Advanced Cluster Security
*   {{ SMProductName }}
*   {{ ServerlessProductName }}
*   {{ logging_sd }}
*   {{ pipelines_title }}

## Kubernetes Operator support {id="kubernetes-operator-support_{{ context }}"}
All Operators listed in the software catalog marketplace should be available for installation. Operators installed from the software catalog, including Red Hat Operators, are not SRE managed as part of the {{ product_title }} service. Refer to the [Red Hat Customer Portal](https://access.redhat.com/solutions/4807821) for more information on the supportability of a given Operator.