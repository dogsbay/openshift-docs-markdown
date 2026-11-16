{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:89198 - {{ product_title }} {{ product_version }}.20 bug fix and security update {id="zstream-4-22-20_{{ context }}"}

Issued: 27 October 2026

{{ product_title }} release 4.22.20 is now available. The list of packages and bug fixes included in the update are documented in the [RHSA-2026:89198](https://access.redhat.com/errata/RHSA-2026:89198) advisory. The RPM packages included in this release are provided by the [RHSA-2026:89196](https://access.redhat.com/errata/RHSA-2026:89196) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```
$ oc adm release info 4.22.20 --pullspecs
```

## Fixed issues {id="zstream-4-22-20-fixed-issues_{{ context }}"}

*   Before this update, an upgrade with a control plane 'MachineConfig` might have caused quorum loss. As a consequence, the upgrade caused prolonged API and etcd downtime, leading to service interruption. With this release, the cluster-etcd Operator now keeps guard pods that prevent a `MachineConfig` from draining the node, which ensures etcd maintains quorum during upgrades. ([OCPBUGS-94058](https://issues.redhat.com/browse/OCPBUGS-94058))
*   Before this update, {{ op_system_base_full }} 8 binaries were included in critical path CNI images but were no longer necessary. As a consequence, the images were larger than required, slowing node bootstrapping. With this release, unused {{ op_system_base }} 8 binaries have been removed from CNI images. As a result, nodes bootstrap more quickly. ([OCPBUGS-120707](https://issues.redhat.com/browse/OCPBUGS-120707))
*   Before this update, KubeVirt hosted clusters that used Multus as the primary network received `nmstate` IPv6 configuration that was intended for the default OVN network. As a consequence, affected compute nodes could not obtain an IPv6 address through Stateless Address AutoConfiguration (SLAAC), and could not become Ready. With this release, {{ hcp }} conditionally overrides the configuration for IPv6-enabled Multus-primary node pools. As a result, compute nodes can obtain their IPv6 addresses through SLAAC and become Ready. ([OCPBUGS-121867](https://issues.redhat.com/browse/OCPBUGS-121867))
*   Before this update, large numbers of firing alerts could make the {{ product_title }} web console slow or unresponsive. With this release, the notification drawer displays up to 50 alerts per group and dashboards display up to 50 alerts per list, improving responsiveness while preserving full counts and links to all alerts. ([OCPBUGS-129621](https://issues.redhat.com/browse/OCPBUGS-129621))
*   Before this update, AWS Network Load Balancers (NLBs) had native client IP preservation enabled by default. As a consequence, hairpin connection failures occurred when a pod connected to an internal NLB route that returned traffic to a router pod on the same node, causing connection timeouts. With this release, a protocol field is added to the `IngressController` API, and new NLB Ingress Controllers default to `PROXY` protocol version 2, which disables native client IP preservation. As a result, hairpin connections do not fail, and an informational alert notifies administrators to configure the protocol field when upgrading. ([OCPBUGS-130606](https://issues.redhat.com/browse/OCPBUGS-130606))
*   Before this update, the terminal ResizeObserver could access uninitialized xterm render service dimensions. As a consequence, pod terminal pages crashed with "Cannot read properties of undefined" errors in e2e tests. With this release, the terminal ResizeObserver guards against uninitialized xterm internals. As a result, the pod terminal loads reliably without resize-related crashes. ([OCPBUGS-130937](https://issues.redhat.com/browse/OCPBUGS-130937))

## Updating {id="zstream-4-22-20-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).