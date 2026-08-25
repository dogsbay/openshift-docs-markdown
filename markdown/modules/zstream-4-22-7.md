{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:44237 - {{ product_title }} {{ product_version }}.7 bug fix and security update {id="zstream-4-22-7_{{ context }}"}

Issued: 28 July 2026

{{ product_title }} release {{ product_version }}.7 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:44237](https://access.redhat.com/errata/RHSA-2026:44237) advisory. The RPM packages that are included in the update are provided by the [RHBA-2026:44229](https://access.redhat.com/errata/RHBA-2026:44229) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.7 --pullspecs
```

## Fixed issues {id="zstream-4-22-7-fixed-issues_{{ context }}"}

*   Before this update, when multiple KubeVirt virtual machines shared the same hostname on localnet or layer2 networks, OVN-Kubernetes could not correctly discover virtual machine names from virt-launcher pods. As a consequence, live migration failed for these virtual machines. With this release, the method by which OVN-Kubernetes discovers virtual machine names from virt-launcher pods has been updated. As a result, virtual machines can live migrate without issues even when sharing a hostname. ([OCPBUGS-88733](https://issues.redhat.com/browse/OCPBUGS-88733))
*   Before this update, during pod deletion on localnet topologies with interconnect, the `enableSourceLSPFailedLiveMigration` attribute attempted to re-enable the logical switch port (LSP) of the source pod after a failed live migration. This occurred even if the source pod was not on the local node. As a consequence, target pod cleanup was blocked, creating a stale LSP for an already deleted virtual machine and causing a loss of network connectivity. With this release, a locality guard ensures that the source LSP is re-enabled only when the source pod is scheduled in the local zone or the network uses layer2 interconnect transport. As a result, the system re-enables the source LSP only if the source pod is in the local zone, or if the network uses a layer 2 interconnect transport. As a result, the system prevents stale LSPs and maintains network connectivity after a live migration. ([OCPBUGS-88734](https://issues.redhat.com/browse/OCPBUGS-88734))
*   Before this update, the Vertical Pod Autoscaler (VPA) Operator required a control plane node for running VPA controllers, even on {{ hcp }} clusters where no such nodes exist in the guest cluster. As a consequence, installing the VPA Operator on {{ hcp }} clusters failed. With this release, VPA controllers can run on any available nodes in {{ hcp }} clusters. As a result, the VPA Operator installs successfully on {{ hcp }} clusters. ([OCPBUGS-89265](https://issues.redhat.com/browse/OCPBUGS-89265))
*   Before this update, when managing a high volume of `BareMetalHost` resources on a single Multicluster Engine instance, the BareMetal Operator issued excessive requests to the Provisioner API during reconciliation. As a consequence, VirtualMedia injection and node reconciliation were noticeably slower at this scale. With this release, the BareMetal Operator reconciliation loop is optimized to issue fewer requests to the Provisioner API. As a result, responsiveness improves when managing large numbers of BareMetalHost resources. ([OCPBUGS-94109](https://issues.redhat.com/browse/OCPBUGS-94109))
*   Before this update, when telemeter-client availability flickered because of monitoring pod restarts or node disruptions, the console Operator produced different ConfigMap content on each sync cycle. As a consequence, continuous console pod rollouts destroyed in-memory sessions and logged users out of the {{ product_title }} web console approximately every 5 minutes. With this release, the telemetry configuration always produces a stable key set regardless of telemeter-client availability. As a result, unnecessary console pod rollouts are prevented and users are no longer logged out unexpectedly. ([OCPBUGS-97828](https://issues.redhat.com/browse/OCPBUGS-97828))

## Updating {id="zstream-4-22-7-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).