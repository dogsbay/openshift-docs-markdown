{%- set _mod_docs_content_type = "CONCEPT" %}
# Platform {id="rosa-sdpolicy-platform_{{ context }}"}
{%- set productwinc = "Red&#160;Hat OpenShift support for Windows Containers" %}

This section provides information about the service definition for the
{%- if openshift_rosa_hcp %}
{{ hcp_title_first }} platform.
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }} (ROSA) platform.
{%- endif %}

## Autoscaling {id="rosa-sdpolicy-autoscaling_{{ context }}"}
Node autoscaling is available on
{%- if openshift_rosa_hcp %}
{{ hcp_title }}.
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}.
{%- endif %}
You can configure the autoscaler option to automatically scale the number of machines in a cluster.

{% if openshift_rosa %}
## Daemonsets {id="rosa-sdpolicy-daemonsets_{{ context }}"}

Customers can create and run daemonsets on{{ product_title }}.
 To restrict daemonsets to only running on worker nodes, use the following `nodeSelector`:

```yaml
spec:
  nodeSelector:
    role: worker
```
{% endif %}
## Multiple availability zone {id="rosa-sdpolicy-multiple-availability-zone_{{ context }}"}

{% if openshift_rosa_hcp %}
Control plane components are always deployed across multiple availability zones, regardless of a customer’s worker node configuration.
{% endif %}
{% if not openshift_rosa_hcp %}
In a multiple availability zone cluster, control plane nodes are distributed across availability zones and at least one worker node is required in each availability zone.
{% endif %}

## Node labels {id="rosa-sdpolicy-node-labels_{{ context }}"}
Custom node labels are created by Red&#160;Hat during node creation and cannot be changed on
{%- if openshift_rosa_hcp %}
{{ hcp_title }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
clusters at this time. However, custom labels are supported when creating new machine pools.

## Node lifecycle {id="rosa-sdpolicy-node-lifecycle_{{ context }}"}

Worker nodes are not guaranteed longevity, and may be replaced at any time as part of the normal operation and management of OpenShift.

A worker node might be replaced in the following circumstances:

*   Machine health checks are deployed and configured to ensure that a worker node with a `NotReady` status is replaced to ensure smooth operation of the cluster.
*   AWS EC2 instances may be terminated when AWS detects irreparable failure of the underlying hardware that hosts the instance.
{%- if openshift_rosa %}
*   During upgrades, a new node is first provisioned to account for any loss of cluster resources during the upgrade process. Once this new node has been successfully integrated into the cluster via the previously described automated health checks, an older node is then removed from the cluster.
{%- endif %}
{%- if openshift_rosa_hcp %}
*   During upgrades, a new, upgraded node is first created and joined to the cluster. Once this new node has been successfully integrated into the cluster via the previously described automated health checks, an older node is then removed from the cluster.
{%- endif %}

For all containerized workloads running on a Kubernetes based system, it is best practice to configure applications to be resilient of node replacements.

## Cluster backup policy {id="rosa-sdpolicy-backup-policy_{{ context }}"}

Red Hat recommends object-level backup solutions for ROSA clusters. OpenShift API for Data Protection (OADP) is included in OpenShift but not enabled by default. Customers can configure OADP on their clusters to achieve object-level backup and restore capabilities.

Red Hat does not back up customer applications or application data. Customers are solely responsible for applications and their data, and must put their own backup and restore capabilities in place.


:::warning

Customers are solely responsible for backing up and restoring their applications and application data. For more information about customer responsibilities, see "Shared responsibility matrix".

:::


## OpenShift version {id="rosa-sdpolicy-openshift-version_{{ context }}"}
{%- if openshift_rosa_hcp %}
{{ hcp_title }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
{%- if openshift_rosa_hcp %}
is run as a service. Red&#160;Hat SRE team will force upgrade when end of life (EOL) is reached.
{%- endif %}
{%- if openshift_rosa %}
is run as a service and is kept up to date with
the latest OpenShift Container Platform version.
{%- endif %}
Upgrade scheduling to the latest version is available.

## Upgrades {id="rosa-sdpolicy-upgrades_{{ context }}"}
Upgrades can be scheduled using the ROSA CLI, `rosa`, or through {{ cluster_manager }}.

See the [{{ product_title }} Life Cycle](https://docs.openshift.com/rosa/rosa_policy/rosa-life-cycle.html) for more information on the upgrade policy and procedures.

## Windows Containers {id="rosa-sdpolicy-window-containers_{{ context }}"}
{{ productwinc }} is not available on {{ product_title }} at this time.
{%- if openshift_rosa_hcp %}
Alternatively, it is supported to run Windows based virtual machines on OpenShift Virtualization running on a ROSA cluster.
{%- endif %}

## Container engine {id="rosa-sdpolicy-container-engine_{{ context }}"}
{%- if openshift_rosa_hcp %}
{{ hcp_title }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
runs on OpenShift 4 and uses [CRI-O](https://www.redhat.com/en/blog/red-hat-openshift-container-platform-4-now-defaults-cri-o-underlying-container-engine) as the only available container engine
{%- if openshift_rosa_hcp %}
(container runtime interface).
{%- endif %}
## Operating system {id="rosa-sdpolicy-operating-system_{{ context }}"}
{%- if openshift_rosa_hcp %}
{{ hcp_title }}
{%- endif %}
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
runs on OpenShift 4 and uses Red&#160;Hat CoreOS (RHCOS) as the operating system for all cluster nodes.

## Red&#160;Hat Operator support {id="rosa-sdpolicy-red-hat-operator_{{ context }}"}
Red&#160;Hat workloads typically refer to Red&#160;Hat-provided Operators made available through Operator Hub. Red&#160;Hat workloads are not managed by the Red&#160;Hat SRE team, and must be deployed on worker nodes. These Operators may require additional Red&#160;Hat subscriptions, and may incur additional cloud infrastructure costs. Examples of these Red&#160;Hat-provided Operators are:

*   {{ rhq_short }}
*   Red&#160;Hat Advanced Cluster Management
*   Red&#160;Hat Advanced Cluster Security
*   {{ SMProductName }}
*   {{ ServerlessProductName }}
*   {{ logging_sd }}
*   {{ pipelines_title }}
*   {{ VirtProductName }}

## Kubernetes Operator support {id="rosa-sdpolicy-kubernetes-operator_{{ context }}"}

All Operators listed in the software catalog marketplace should be available for installation. These Operators are considered customer workloads, and are not monitored nor managed by Red&#160;Hat SRE. Operators authored by Red&#160;Hat are supported by Red&#160;Hat.