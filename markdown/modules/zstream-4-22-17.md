{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:74429 - {{ product_title }} {{ product_version }}.17 bug fix and security update {id="zstream-4-22-17_{{ context }}"}

Issued: 06 October 2026

{{ product_title }} release {{ product_version }}.17 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:74429](https://access.redhat.com/errata/RHSA-2026:74429) advisory. The RPM packages that are included in the update are provided by the [RHSA-2026:74427](https://access.redhat.com/errata/RHSA-2026:74427) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.17 --pullspecs
```

## Fixed issues {id="zstream-4-22-17-fixed-issues_{{ context }}"}

*   Before this update, when you removed failure domains from the infrastructure specification, the {{ vmw_first }} Problem Detector (VPD) logged errors about failure domain labels missing from nodes. As a consequence, VPD logged warnings that were not relevant. With this release, VPD improves processing logic for failure domain changes in the infrastructure specification. As a result, these unnecessary warnings no longer appear. ([OCPBUGS-105280](https://issues.redhat.com/browse/OCPBUGS-105280))
*   Before this update, in dual-stack hosted clusters, mismatched IP SAN byte lengths such as 4-byte versus 16-byte IPv4-mapped addresses caused false validation failures. As a consequence, the Control Plane Operator was forced to continuously regenerate `kas-server-crt`, causing generation churn that could stall installations. With this release, IP SANs are normalized using net.IP.To1ptp Operator config6() before comparison. As a result, unnecessary certificate regeneration and continuous `kube-apiserver` rolling updates do not occur. ([OCPBUGS-112731](https://issues.redhat.com/browse/OCPBUGS-112731))
*   Before this update, for {{ azure_first }} {{ product_title }} hosted clusters that used private {{ azure_short }} Key Vaults, unreachable private endpoints caused Kubernetes Key Management Service (KMS) validation to be reported as failed. With this update, the `ValidAzureKMSConfig` parameter is reported as `Unknown`. As a result, false failures are not reported due to network reachability limits. ([OCPBUGS-123727](https://issues.redhat.com/browse/OCPBUGS-123727))
*   Before this update, when you removed a `MachineConfig` resource that required a revert to a `MachineOSBuild` in a terminal state, the digested image push configuration was not changed. As a consequence, the associated `MachineConfigPool` resource was stuck in an `Updating` state. With this release, terminal builds update correctly when the digested image push configuration changes, enabling image reuse for a new build. As a result, you can successfully delete `MachineConfig` resources in an image mode cluster. ([OCPBUGS-127018](https://issues.redhat.com/browse/OCPBUGS-127018))
*   Before this update, the rendezvous node IP address list was not refreshed after a static IP address was added through the agent TUI networking screen. As a consequence, the newly added IP address was not shown or available in the rendezvous node IP address selection screen. With this release, the host IP address list refreshes whenever the selection screen opens. As a result, newly configured IP addresses appear for selection. ([OCPBUGS-127041](https://issues.redhat.com/browse/OCPBUGS-127041))
*   Before this update, sometimes during startup the default Precision Time Protocol (PTP) Operator configuration failed to create because the webhook was not ready. As a consequence, the `linuxptp-daemon` service was not scheduled. With this release, the Operator waits for the webhook to become ready before creating the default PTP Operator configuration. As a result, the default PTP Operator configuration is populated reliably. ([OCPBUGS-128642](https://issues.redhat.com/browse/OCPBUGS-128642))

## Updating {id="zstream-4-22-17-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).