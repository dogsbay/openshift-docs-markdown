---
title: New features and enhancements
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# New features and enhancements {id="new-features"}
{%- set context = "new-features" %}

This release adds improvements related to the following components and concepts.

See the [**Releases**](https://github.com/openshift/okd/releases) page in the
**openshift/okd** project repository for information on the latest OKD releases.

## Operators {id="ocp-operators"}

[Operators](/operators/understanding/olm-what-operators-are#olm-what-operators-are)
are pieces of software that ease the operational complexity of running another
piece of software. They act like an extension of the software vendor’s
engineering team, watching over a Kubernetes environment (such as
{{ product_title }}) and using its current state to make decisions in real time.
Advanced Operators are designed to handle upgrades seamlessly, react to failures
automatically, and not take shortcuts, like skipping a software backup process
to save time.

### Operator Lifecycle Manager (OLM) {id="ocp-operator-lifecycle-manager"}

This feature is now fully supported in OpenShift v4.

The OLM aids cluster administrators in installing, upgrading, and granting
access to Operators running on their cluster:

*   Includes a catalog of curated Operators, with the ability to load other Operators into the cluster
*   Handles rolling updates of all Operators to new versions
*   Supports role-based access control (RBAC) for certain teams to use certain Operators

See
[Understanding the Operator Lifecycle Manager (OLM)](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm) for more information.

## Installation and upgrade {id="ocp-installation-and-upgrade"}

Red Hat OpenShift v4 has an installer-provisioned infrastructure, where
the installation program controls all areas of the installation process.
Installer-provisioned infrastructure also provides an opinionated best practices
deployment of OpenShift v4 for AWS instances only. This provides a
slimmer default installation, with incremental feature buy-in through
the software catalog.

You can also install with a user-provided infrastructure on
AWS, bare metal, or vSphere hosts. If you use the installer-provisioned
infrastructure installation, the cluster provisions and manages all of the
cluster infrastructure for you.

Upgrading from 3.x to 4 is currently not available. You must perform a new
installation of OpenShift v4.

Easy, over-the-air upgrades for asynchronous z-stream releases of
OpenShift v4 is available. Cluster administrators can upgrade using the
**Cluster Settings** tab in the web console.
See
[Updating a cluster](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
for more information.

### Software catalog {id="ocp-operator-hub"}

The software catalog is available to administrators and helps with easy discovery and
installation of all optional components and applications. It includes offerings
from Red Hat products, Red Hat partners, and the community.

**Features provided with base installation and the software catalog**

| Feature | New installer | Software catalog |
| --- | --- | --- |
| Console and authentication | * [x] | - |
| Prometheus cluster monitoring | * [x] | - |
| Over-the-air updates | * [x] | - |
| Machine management | * [x] | - |
| Optional service brokers | - | * [x] |
| Optional {{ product_title }} components | - | * [x] |
| Red Hat product Operators | - | * [x] |
| Red Hat partner Operators | - | * [x] |
| Community Operators | - | * [x] |

See
[Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog) for more information.

## Storage {id="ocp-storage"}

Storage support in OpenShift v4 is the same as OpenShift v3 with
the exception of the following available in Technology Preview: EFS (CSI Driver
handled via Amazon), Manila provisioner/operator, and Snapshot.

## Scale {id="ocp-scale"}

### Cluster maximums {id="ocp-scale-cluster-limits"}

Updated guidance around
[Cluster maximums](/scalability_and_performance/planning-your-environment-according-to-object-maximums#planning-your-environment-according-to-object-maximums) for OpenShift v4 is now available.

Use the [{{ product_title }} Limit Calculator](https://access.redhat.com/labs/ocplimitscalculator/) to estimate cluster limits for your environment.

### Node Tuning Operator {id="ocp-node-tuning-operator"}

The
[Node Tuning Operator](/scalability_and_performance/using-node-tuning-operator#using-node-tuning-operator) is now part of a standard {{ product_title }} installation in
OpenShift v4.

The Node Tuning Operator helps you manage node-level tuning by orchestrating the
tuned daemon. The majority of high-performance applications require some level
of kernel tuning. The Node Tuning Operator provides a unified management
interface to users of node-level sysctls and more flexibility to add custom
tuning, which is currently a Technology Preview feature, specified by user
needs. The Operator manages the containerized tuned daemon for OpenShift
Container Platform as a Kubernetes DaemonSet. It ensures the custom tuning
specification is passed to all containerized tuned daemons running in the
cluster in the format that the daemons understand. The daemons run on all nodes
in the cluster, one per node.

## Cluster monitoring {id="ocp-cluster-monitoring"}

### New alerting user interface {id="ocp-cluster-monitoring-alerting-UI"}

An alerting UI is now natively integrated into the {{ product_title }} web console.
You can now view cluster-level alerts and alerting rules from a single place, as
well as configure silences.

### Telemeter {id="ocp-cluster-monitoring-telemeter"}

Telemeter collects anonymized cluster-related metrics to proactively help
customers with their {{ product_title }} clusters. This helps:

*   Gather crucial health metrics of {{ product_title }} installations.
*   Enable a viable feedback loop of {{ product_title }} upgrades.
*   Gather the cluster’s number of nodes per cluster and their size (CPU cores and
RAM).
*   Gather the size of etcd.
*   Gather details about the health condition and status for any OpenShift framework
component installed on an OpenShift cluster.

### Autoscale pods horizontally based on the resource metrics API {id="ocp-cluster-monitoring-autoscale"}

By default, OpenShift Cluster Monitoring exposes CPU and Memory utilization
through the Kubernetes resource metrics API. There is no longer a requirement to
install a separate metrics server.

## Developer experience {id="ocp-developer-experience"}

### Multi-stage Dockerfile Builds Generally Available {id="ocp-multistage-builds"}

Multi-stage Dockerfiles are now supported in all `Docker` strategy builds.

## Registry {id="ocp-registry"}

### The registry is now managed by an Operator {id="ocp-registry-managed-by-operator"}

The registry is now managed by an Operator instead of `oc adm registry`.

## Networking {id="ocp-networking"}

### Cluster Network Operator (CNO) {id="ocp-cno"}

The cluster network is now configured and managed by an Operator. The Operator
upgrades and monitors the cluster network.

### OpenShift SDN {id="ocp-openshift-sdn"}

The default mode is now `NetworkPolicy`.

### Multus {id="ocp-multus"}

Multus is a meta plugin for Kubernetes Container Network Interface (CNI), which
enables a user to create multiple network interfaces per pod.

### SR-IOV {id="ocp-sriov"}

OpenShift v4 includes the Technical Preview capability to use specific
SR-IOV hardware on {{ product_title }} nodes, which enables the user to
attach SR-IOV virtual function (VF) interfaces to Pods in addition to other
network interfaces.

### F5 router plugin support {id="ocp-f5"}

F5 router plugin is no longer supported as part of {{ product_title }} directly.
However, F5 has developed a container connector that replaces the functionality.
It is recommended to work with F5 support to implement their solution.

## Web console {id="ocp-web-console"}

### Developer Catalog {id="ocp-developer-catalog"}

OpenShift v4 features a redesigned Developer Catalog that brings all of
the new Operators and existing broker services together, with new ways to
discover, sort, and understand how to best use each type of offering. The
Developer Catalog is the entry point for a developer to access all services
available to them. It merges all capabilities from Operators, the Service
Catalog, brokers, and Source-to-Image (S2I).

### New management screens {id="ocp-new-management-screens"}

New management screens in OpenShift v4 support automated operations.
Examples include the management of machine sets and machines, taints,
tolerations, and cluster settings.

## Security {id="ocp-security"}

In OpenShift v4, Operators are utilized to install, configure, and
manage the various certificate signing servers. Certificates are managed
as secrets stored within the cluster itself.