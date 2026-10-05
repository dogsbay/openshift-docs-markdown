{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:71454 - {{ product_title }} {{ product_version }}.16 bug fix and security update {id="zstream-4-22-16_{{ context }}"}

Issued: 29 September 2026

{{ product_title }} release {{ product_version }}.16 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:71454](https://access.redhat.com/errata/RHSA-2026:71454) advisory. The RPM packages that are included in the update are provided by the [RHSA-2026:71445](https://access.redhat.com/errata/RHSA-2026:71445) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.16 --pullspecs
```

## Enhancements {id="zstream-4-22-16-enhancements_{{ context }}"}

*   In {{ product_title }} release 4.22.16 and later, you can install {{ product_title }} in Google Cloud Dedicated (GCD) regions by using installer-provisioned infrastructure. GCD is a sovereign cloud platform that provides Google Cloud technology in a fully isolated environment with strict data and operational sovereignty guarantees. If you require strict data residency and operational control, you can deploy to sovereign cloud environments.

## Fixed issues {id="zstream-4-22-16-fixed-issues_{{ context }}"}

*   Before this update, when you deployed a hosted cluster on OpenShift Virtualization with external infrastructure, the `virt-launcher` network policy was not created on the infrastructure cluster where the KubeVirt `virt-launcher` pods and virtual machines (VM)s run. As a consequence, the KubeVirt VMs had unrestricted network access to all pods and services on the infrastructure cluster, breaking tenant isolation. With this release, the `virt-launcher` network policy is created with CIDR-based egress restrictions. As a result, multitenant isolation is no longer compromised. ([OCPBUGS-100445](https://issues.redhat.com/browse/OCPBUGS-100445))
*   Before this update, when upgrading standalone clusters from 4.21.16 to 4.22.8, worker nodes with older Red Hat Enterprise Linux CoreOS (RHCOS) boot images failed during the operating system pivot with an `rpm-ostree rebase` error: `A signature was required, but no signature exists`. As a consequence, the worker MachineConfigPool became degraded, preventing completion of the upgrade, with some workers remaining on 4.21 RHCOS while the control plane was on 4.22.8. With this release, the Machine Config Operator includes a workaround for nodes running older boot images with skopeo versions earlier than 1.22.2, enabling successful rebase to 4.22 RHCOS images that require `Sigstore` signatures. As a result, all workers can complete the operating system pivot during upgrades from 4.21 to 4.22.z releases. ([OCPBUGS-122961](https://issues.redhat.com/browse/OCPBUGS-122961))

## Updating {id="zstream-4-22-16-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).