{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:83541 - {{ product_title }} {{ product_version }}.19 bug fix and security update {id="zstream-4-22-19_{{ context }}"}

Issued: 20 October 2026

{{ product_title }} release {{ product_version }}.19 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:83541](https://access.redhat.com/errata/RHSA-2026:83541) advisory. The RPM packages that are included in the update are provided by the [RHBA-2026:83539](https://access.redhat.com/errata/RHBA-2026:83539) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.19 --pullspecs
```

## Fixed issues {id="zstream-4-22-19-fixed-issues_{{ context }}"}

*   Before this update, when the ingress capability was disabled on a hosted cluster, the console Operator still attempted to reconcile unavailable ingress resources and run route health checks. As a consequence, the console Operator reported degraded or progressing conditions. With this release, the Operator skips route and health check controllers and ingress-dependent reconciliation when ingress is disabled, and resumes normal operation if ingress is later enabled. As a result, the console Operator no longer reports those conditions when ingress is disabled. ([OCPBUGS-113612](https://issues.redhat.com/browse/OCPBUGS-113612))
*   Before this update, the Namespace column was hidden on the **Node Pods** tab when a specific namespace was selected. As a consequence, you could not identify which namespace pods belonged to on the **Node Details** page, even though nodes are cluster-scoped and can display pods from multiple namespaces. With this release, the Namespace column displays on the **Node Pods** tab regardless of project selector state. As a result, you can identify the namespace for each pod on the **Node Details** page. ([OCPBUGS-123201](https://issues.redhat.com/browse/OCPBUGS-123201))
*   Before this update, the `nmstate-metrics` deployment retained an obsolete `kube-rbac-proxy` sidecar with an empty image, causing API validation errors, Operator degradation, and `CrashLoopBackOff` due to port 8443 conflicts during 4.22 upgrades. With this release, the unused sidecar plumbing is removed. As a result, successful Operator reconciliation and normal pod execution is enabled after upgrading to 4.22. ([OCPBUGS-127277](https://issues.redhat.com/browse/OCPBUGS-127277))
*   Before this update, the boot image controller required an exact match between a `MachineSet` `providerSpec` workspace and an `Infrastructure` failure domain on all five fields. As a consequence, `MachineSet` resources on clusters without failure domains or with a datastore not listed in any failure domain were silently skipped for boot image management, and boot image skew could grow over time. With this release, matching logic is improved so that eligible `MachineSet` resources are not skipped in those cases. As a result, boot images stay managed for `MachineSet` resources that had no matching failure domain. ([OCPBUGS-129268](https://issues.redhat.com/browse/OCPBUGS-129268))
*   Before this update, when 4.21 clusters that used the multi-arch payload upgraded to 4.22.15 or later, nodes could fail to update in place because of an `rpm-ostree` defect that omitted Open vSwitch (OVS) binaries from the {{ op_system_first }} image. As a consequence, affected nodes could become unrecoverable during the update. With this release, the Machine Config Daemon works around that `rpm-ostree` defect so that nodes update properly across this transition. As a result, multi-arch payload clusters can complete the update and clusters that use a single-arch payload are not affected. ([OCPBUGS-129375](https://issues.redhat.com/browse/OCPBUGS-129375))
*   Before this update, {{ vmw_first }} machine reconciliation made redundant vCenter API calls and repeated operations. As a consequence, heavy API load, duplicate tasks, and slower provisioning in large clusters occurred. With this release, VM state and tag lookups are cached, queries are batched, and task references are retained. As a result, provisioning is more reliable and vCenter load is reduced. ([OCPBUGS-129423](https://issues.redhat.com/browse/OCPBUGS-129423))

## Updating {id="zstream-4-22-19-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).