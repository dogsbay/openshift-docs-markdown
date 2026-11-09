{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:95347 - {{ product_title }} {{ product_version }}.22 bug fix and security update {id="zstream-4-22-22_{{ context }}"}

Issued: 5 November 2026

{{ product_title }} release {{ product_version }}.22 is now available. The list of fixed bugs that are included in the update is documented in the [RHSA-2026:95347](https://access.redhat.com/errata/RHSA-2026:95347) advisory. The RPM packages that are included in the update are provided by the [RHBA-2026:95345](https://access.redhat.com/errata/RHBA-2026:95345) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.22 --pullspecs
```

## Fixed issues {id="zstream-4-22-22-fixed-issues_{{ context }}"}

The following issues are fixed for this release:

*   Before this update, a two-node {{ ocp }} with fencing (TNF) cluster could remain degraded with only one active node after a node reboot. This issue could occur during an upgrade or a Machine Config Operator (MCO)-driven {{ op_system_first }} update. With this update, TNF clusters do not stay in this degraded state after a reboot. ([OCPBUGS-84695](https://issues.redhat.com/browse/OCPBUGS-84695))
*   Before this update, JSON merge patches could bypass field-level Common Expression Language (CEL) immutability rules on the `HostedCluster` custom resource by removing the `spec.infraID` or `spec.clusterID` specifications. As a consequence, the controller re-provisioned the infrastructure and orphaned existing resources. With this release, parent-level CEL validation rules reject API requests attempting to clear these fields. ([OCPBUGS-129442](https://issues.redhat.com/browse/OCPBUGS-129442))
*   Before this update, when reconciling virtual machines (VMs) on {{ azure_first }}, a creation operation could fail and leave a virtual network interface controller (NIC) attached to a load balancer without a corresponding VM. As a consequence, the load balancer could not be used until the orphaned NIC was removed. With this release, the reconciler cleans up orphaned NICs when VM creation fails. As a result, load balancers are not blocked by orphaned NICs after failed VM creation. ([OCPBUGS-133098](https://issues.redhat.com/browse/OCPBUGS-133098))
*   Before this update, during etcd encryption key rotation, data in namespaces deleted with remaining etcd content was skipped. As a consequence, premature key retirement and API server failures occurred. With this release, this type of data is automatically rewritten with the current encryption key before retiring older keys. As a result, the API server remains available. ([OCPBUGS-133399](https://redhat.atlassian.net/browse/OCPBUGS-133399))
*   Before this update, missing domain name system (DNS) subject alternative names (SANs) for the headless `etcd-client` service caused intermittent peer transport layer security (TLS) rejections due to duplicate PTR records. This release adds the missing DNS name. As a result, preventing connection rejections are prevented and etcd reliability in bare metal deployments is improved. ([OCPBUGS-133444](https://issues.redhat.com/browse/OCPBUGS-133444))
*   Before this update, a race condition during two-node {{ ocp }} with fencing (TNF) installations could fail to sync the `external-etcd-pod` `ConfigMap` across all nodes. As a consequence, installation failures occurred. With this release the race condition is fixed. As a result, TNF installations are successful. ([OCPBUGS-133467](https://issues.redhat.com/browse/OCPBUGS-133467))
*   Before this update, revealed values on the **Secret** details page could automatically become hidden when the page refreshed. With this release, the reveal state is preserved so that values remain visible until you click **Hide values**. As a result, secret values are not unexpectedly hidden. ([OCPBUGS-134589](https://issues.redhat.com/browse/OCPBUGS-134589))

## Updating {id="zstream-4-22-22-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).