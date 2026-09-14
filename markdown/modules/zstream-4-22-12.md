{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:60441 - {{ product_title }} {{ product_version }}.12 bug fix and security update {id="zstream-4-22-12_{{ context }}"}

Issued: 01 September 2026

{{ product_title }} release {{ product_version }}.12 is now available. The list of bug fixes and enhancements that are included in the update is documented in the [RHSA-2026:60441](https://access.redhat.com/errata/RHSA-2026:60441) advisory. The RPM packages that are included in the update are provided by the [RHBA-2026:60439](https://access.redhat.com/errata/RHBA-2026:60439) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.12 --pullspecs
```

## Enhancements {id="zstream-4-22-12-enhancements_{{ context }}"}

*   You can now pin the HAProxy version to `2.8` by using the new `haproxyVersion` field from the `IngressResource` API, before upgrading {{ product_title }} cluster to 4.23 or 5.0. If you do not pin the HAProxy version, it is upgraded to version `3.2`. ([OCPBUGS-105168](https://issues.redhat.com/browse/OCPBUGS-105168))

## Fixed issues {id="zstream-4-22-12-fixed-issues_{{ context }}"}

*   Before this update, the machine controller in the Hosted Cluster Config Operator (HCCO) included non-routable ovn-kubernetes routes in the node network configuration. As a consequence, it caused networking conflicts and routing issues. With this release, non-routable routes are filtered out during configuration. As a result, networking conflicts are resolved. ([OCPBUGS-98328](https://issues.redhat.com/browse/OCPBUGS-98328))
*   Before this update, by default, the Vertical Pod Autoscaler (VPA) Operator required a control plane node for running workloads. As a consequence, it caused issues in single-node deployments. With this release, the Operator is updated to support deployment without control plane node requirements. As a result, the VPA Operator now functions correctly in single-node configurations. ([OCPBUGS-98604](https://issues.redhat.com/browse/OCPBUGS-98604))
*   Before this update, socket connections triggered multiple state synchronization, leading to excessive socket connection reconciliation. As a consequence, it caused unnecessary API calls and reduced performance. With this release, the reconciliation logic is updated to synchronize only on meaningful state changes. As a result, API calls are reduced and performance is improved. ([OCPBUGS-105877](https://issues.redhat.com/browse/OCPBUGS-105877))
*   Before this update, the console required cloud credentials during Operator initialization. As a consequence, installation failed when credentials were not immediately available. With this release, the initialization process is updated to defer credential requirements. As a result, installation succeeds without requiring immediate cloud credentials. ([OCPBUGS-111417](https://issues.redhat.com/browse/OCPBUGS-111417))

## Updating {id="zstream-4-22-12-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).