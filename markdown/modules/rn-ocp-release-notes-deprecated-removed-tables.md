{%- set _mod_docs_content_type = "REFERENCE" %}
# Deprecated and removed features {id="rn-ocp-release-notes-deprecated-removed-tables_{{ context }}"}

You can plan your cluster maintenance and upgrades effectively based on the features that are deprecated or removed in {{ product_title }}. {._abstract}

Review the following tables based on various functions such as images, installation, machine management, and so on. 

## Images deprecated and removed features {id="rn-ocp-release-notes-deprecated-removed-features_{{ context }}"}

**Images deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Cluster Samples Operator | Deprecated | Deprecated | Deprecated |

## Installation deprecated and removed features {id="ocp-release-note-install-dep-rem_{{ context }}"}

**Installation deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| `--cloud` parameter for `oc adm release extract` | Deprecated | Deprecated | Deprecated |
| CoreDNS wildcard queries for the `cluster.local` domain | Deprecated | Deprecated | Deprecated |
| `compute.platform.openstack.rootVolume.type` for {{ rh_openstack }} | Deprecated | Deprecated | Deprecated |
| `controlPlane.platform.openstack.rootVolume.type` for {{ rh_openstack }} | Deprecated | Deprecated | Deprecated |
| `ingressVIP` and `apiVIP` settings in the `install-config.yaml` file for installer-provisioned infrastructure clusters | Deprecated | Deprecated | Deprecated |
| `platform.aws.preserveBootstrapIgnition` parameter for {{ aws_first }} | Deprecated | Deprecated | Deprecated |
| Installing a cluster on {{ aws_short }} with compute nodes in {{ aws_short }} Outposts | Deprecated | Deprecated | Deprecated |
| Adding kernel modules to nodes with kvc | Technology Preview | Technology Preview | Deprecated |
| Installing a cluster using Fujitsu iRMC drivers on bare-metal machines | General Availability | Deprecated | Deprecated |

## Machine Management deprecated and removed features {id="ocp-release-note-machine-manage-dep-rem_{{ context }}"}

**Machine management deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Confidential Computing with AMD Secure Encrypted Virtualization for {{ gcp_first }} | Deprecated | Deprecated | Deprecated |
| Managing bare-metal machines using Fujitsu iRMC drivers | General Availability | Deprecated | Deprecated |

## Networking deprecated and removed features {id="ocp-release-note-networking-dep-rem_{{ context }}"}

**Networking deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| iptables | Deprecated | Deprecated | Deprecated |

## Node deprecated and removed features {id="ocp-release-note-node-dep-rem_{{ context }}"}

**Node deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| `ImageContentSourcePolicy` (ICSP) objects | Deprecated | Deprecated | Deprecated |
| Kubernetes topology label `failure-domain.beta.kubernetes.io/zone` | Deprecated | Deprecated | Deprecated |
| Kubernetes topology label `failure-domain.beta.kubernetes.io/region` | Deprecated | Deprecated | Deprecated |
| Dynamic Accelerator Slicer (DAS) Operator | Technology Preview | Technology Preview | Removed |
| runC container runtime | General Availability | General Availability | Deprecated |

## OpenShift CLI (oc) deprecated and removed features {id="ocp-release-note-cli-dep-rem_{{ context }}"}

**OpenShift CLI (oc) deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| oc-mirror plugin v1 | Deprecated | Deprecated | Deprecated |
| Docker v2 registries | Deprecated | Deprecated | Deprecated |
| `oc adm release mirror` command | General Availability | General Availability | Deprecated |

## Operator lifecycle and development deprecated and removed features {id="ocp-release-note-operators-dep-rem_{{ context }}"}

**Operator lifecycle and development deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Red Hat Marketplace | Deprecated | Deprecated | Removed |
| SQLite database format for Operator catalogs | Deprecated | Deprecated | Deprecated |

## {{ op_system_first }} deprecated and removed features {id="ocp-release-note-rhcos-dep-rem_{{ context }}"}

**{{ op_system }} deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| WebAssembly (WASM) extension | Removed | Removed | Removed |

## Web console deprecated and removed features {id="ocp-release-note-web-console-dep-rem_{{ context }}"}

**Web console deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| `useModal` hook for dynamic plugin SDK | Deprecated | Deprecated | Deprecated |

## Workloads deprecated and removed features {id="ocp-release-note-workloads-dep-rem_{{ context }}"}

**Workloads deprecated and removed tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| `DeploymentConfig` objects | Deprecated | Deprecated | Deprecated |