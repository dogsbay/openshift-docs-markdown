{%- set _mod_docs_content_type = "REFERENCE" %}
# Change management {id="policy-change-management_{{ context }}"}

Manage changes to your cluster and its configuration. {._abstract}

## Customer-initiated changes {id="policy-customer-initiated-changes_{{ context }}"}

You can initiate changes using self-service capabilities such as cluster deployment, worker node scaling, or cluster deletion.

Change history is captured in the **Cluster History** section in the OpenShift Cluster Manager **Overview tab**, and is available for you to view. The change history includes, but is not limited to, logs from the following changes:

*   Adding or removing identity providers
*   Adding or removing users to or from the `dedicated-admins` group
*   Scaling the cluster compute nodes
*   Scaling the cluster load balancer
*   Scaling the cluster persistent storage
*   Upgrading the cluster

You can implement a maintenance exclusion by avoiding changes in {{ cluster_manager }} for the following components:

*   Deleting a cluster
*   Adding, modifying, or removing identity providers
*   Adding, modifying, or removing a user from an elevated group
*   Installing or removing add-ons
*   Modifying cluster networking configurations
*   Adding, modifying, or removing machine pools
*   Enabling or disabling user workload monitoring
*   Initiating an upgrade


:::important

To enforce the maintenance exclusion, ensure machine pool autoscaling or automatic upgrade policies have been disabled. After the maintenance exclusion has been lifted, proceed with enabling machine pool autoscaling or automatic upgrade policies as desired.

:::


## Red Hat-initiated changes {id="policy-red-hat-initiated-changes_{{ context }}"}

Red Hat site reliability engineering (SRE) manages the infrastructure, code, and configuration of {{ product_title }} using a GitOps workflow and fully automated CI/CD pipelines. This process ensures that Red Hat can safely introduce service improvements on a continuous basis without negatively impacting customers.

Every proposed change undergoes a series of automated verifications immediately upon check-in. Changes are then deployed to a staging environment where they undergo automated integration testing. Finally, changes are deployed to the production environment. Each step is fully automated.

An authorized SRE reviewer must approve advancement to each step. The reviewer cannot be the same individual who proposed the change. All changes and approvals are fully auditable as part of the GitOps workflow.

Some changes are released to production incrementally, using feature flags to control availability of new features to specified clusters or customers.

## Patch management {id="patch-management_{{ context }}"}

OpenShift Container Platform software and the underlying immutable Red Hat Enterprise Linux CoreOS (RHCOS) operating system image are patched for bugs and vulnerabilities in regular z-stream upgrades. Read more about [RHCOS architecture](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.6/html/architecture/architecture-rhcos) in the OpenShift Container Platform documentation.

## Release management {id="release-management_{{ context }}"}

Red Hat does not automatically upgrade your clusters. You can schedule to upgrade the clusters at regular intervals (recurring upgrade) or just once (individual upgrade) using the {{ cluster_manager }} web console. Red Hat might forcefully upgrade a cluster to a new z-stream version only if the cluster is affected by a critical impact CVE. You can review the history of all cluster upgrade events in the {{ cluster_manager }} web console. For more information about releases, see the [Life Cycle policy](https://docs.openshift.com/dedicated/osd_policy/osd-life-cycle.html).