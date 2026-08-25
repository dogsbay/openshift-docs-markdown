{%- set _mod_docs_content_type = "REFERENCE" %}
# Technology Preview features status {id="rn-ocp-release-notes-technology-preview-tables_{{ context }}"}

You can determine if a new feature in {{ product_title }}{{ product_version }} is currently in Technology Preview before deciding to install the feature. These experimental features are not intended for production use.  {._abstract}

Note the following scope of support on the Red&#160;Hat Customer Portal for these features:

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

In the following tables, features are marked with the following statuses:

*   _Not Available_
*   _Technology Preview_
*   _General Availability_
*   _Deprecated_
*   _Removed_

## AI applications Technology Preview features {id="ocp-release-notes-ai-apps-tech-preview_{{ context }}"}

**AI applications Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| MCP server for Red Hat {{ product_title }} | Not Available | Not Available | Technology Preview |

## Authentication and authorization Technology Preview features {id="ocp-release-notes-auth-tech-preview_{{ context }}"}

**Authentication and authorization Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Pod security admission restricted enforcement | Technology Preview | Technology Preview | Technology Preview |

## Edge computing Technology Preview features {id="ocp-release-notes-edge-computing-tp-features_{{ context }}"}

**Edge computing Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Accelerated provisioning of {{ ztp }} | Technology Preview | Technology Preview | Technology Preview |
| Enabling disk encryption with TPM and PCR protection | Technology Preview | Technology Preview | Technology Preview |
| Configuring a local arbiter node | General Availability | General Availability | General Availability |
| Configuring a two-node {{ product_title }} cluster with fencing | Technology Preview | Technology Preview | General Availability |

## Extensions Technology Preview features {id="ocp-release-notes-extensions-tech-preview_{{ context }}"}

**Extensions Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| {{ olmv1 }} runtime validation of container images using sigstore signatures | Technology Preview | Technology Preview | General Availability |
| {{ olmv1 }} permissions preflight check for cluster extensions | Technology Preview | Technology Preview | Technology Preview |
| {{ olmv1 }} deploying a cluster extension in a specified namespace | Technology Preview | Technology Preview | Technology Preview |
| {{ olmv1 }} deploying a cluster extension that uses webhooks | Technology Preview | General Availability | General Availability |
| {{ olmv1 }} software catalog | Not Available | Technology Preview | Technology Preview |
| {{ olmv1 }} `deploymentConfig` API for cluster extension customization | Not Available | Not Available | Technology Preview |

## Installation Technology Preview features {id="ocp-release-notes-installing-tech-preview_{{ context }}"}

**Installation Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Installing a cluster on Alibaba Cloud by using Assisted Installer | Technology Preview | Technology Preview | Technology Preview |
| Installing a cluster using {{ op_system_base_full }} 10 | Not Available | Not Available | Technology Preview |
| Dedicated disk for etcd on {{ azure_full }} | Technology Preview | Technology Preview | Technology Preview |
| Mount shared entitlements in BuildConfigs in RHEL | Technology Preview | Technology Preview | General Availability (through Builds for OpenShift Operator) |
| OpenShift zones support for {{ vmw_short }} host groups | Technology Preview | Technology Preview | General Availability |
| Selectable Cluster Inventory |  |  |  |
| Enabling a user-provisioned DNS on {{ gcp_short }} | Technology Preview | General Availability | General Availability |
| Enabling a user-provisioned DNS on {{ azure_full }} | Not Available | Technology Preview | General Availability |
| Enabling a user-provisioned DNS on {{ aws_first }} | Not Available | Technology Preview | Technology Preview |
| Installing a cluster using {{ gcp_first }} private and restricted API endpoints | Not Available | General Availability | General Availability |
| Installing a cluster on {{ vmw_full }} with multiple network interface controllers | General Availability | General Availability | General Availability |
| {{ bmaas_first }} (formerly known as bare-metal as a service) | Technology Preview | Technology Preview | General Availability |
| Installing a cluster on {{ aws_first }} European Sovereign Cloud | Not Available | Not Available | Technology Preview |
| Installing a cluster on {{ aws_first }} with dual-stack networking | Not Available | Not Available | Technology Preview |
| Running firmware upgrades for hosts in deployed bare-metal clusters | Technology Preview | General Availability | General Availability |
| Changing the CVO log level | Technology Preview | Technology Preview | Technology Preview |
| Deploying virtualized control planes with KubeVirt Redfish | Not Available | Not Available | Technology Preview |


:::note

Fleet Management supersedes Selectable Cluster Inventory in {{ product_title }} 4.20 and later releases. For more information see, the {{ rh_rhacm_title }} for Kubernetes documentation for [Fleet Management](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/release_notes/index#console-new-features).

:::


## Machine Config Operator Technology Preview features {id="ocp-release-notes-mco-tech-preview_{{ context }}"}

**Machine Config Operator Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Boot image management for {{ azure_short }} and {{ vmw_short }} | Technology Preview | General Availability | General Availability |
| Boot image management for control plane nodes | Not available | Technology Preview | General Availability |
| {{ image_mode_os_caps }} status reporting improvements | Not available | Technology Preview | Technology Preview |
| Overriding storage or partition setup | Not available | Technology Preview | Technology Preview |

## Machine management Technology Preview features {id="ocp-release-notes-machine-management-tech-preview_{{ context }}"}

**Machine management Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Managing machines with the Cluster API for {{ aws_full }} | Technology Preview | Technology Preview | Technology Preview |
| Managing machines with the Cluster API for {{ gcp_full }} | Technology Preview | Technology Preview | Technology Preview |
| Managing machines with the Cluster API for {{ ibm_power_server_name }} | Technology Preview | Technology Preview | Technology Preview |
| Managing machines with the Cluster API for {{ azure_full }} | Technology Preview | Technology Preview | Technology Preview |
| Managing machines with the Cluster API for {{ rh_openstack }} | Technology Preview | Technology Preview | Technology Preview |
| Managing machines with the Cluster API for {{ vmw_full }} | Technology Preview | Technology Preview | Technology Preview |
| Managing machines with the Cluster API for bare-metal | Technology Preview | Technology Preview | Technology Preview |
| Cloud controller manager for {{ ibm_power_server_name }} | Technology Preview | Technology Preview | Technology Preview |
| Adding multiple subnets to an existing {{ vmw_full }} cluster by using compute machine sets | Technology Preview | Technology Preview | Technology Preview |
| Bare-metal nodes on {{ vmw_full }} clusters | Not Available | Technology Preview | Technology Preview |
| {{ aws_full }} Dedicated Host support | Not Available | Not Available | Technology Preview |

## Multi-Architecture Technology Preview features {id="ocp-release-notes-multi-arch-tech-preview_{{ context }}"}

**Multi-Architecture Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| `kdump` on `arm64` architecture | General Availability | General Availability |  |
| `kdump` on `s390x` architecture | General Availability | General Availability |  |
| `kdump` on `ppc64le` architecture | General Availability | General Availability |  |
| Support for configuring the image stream import mode behavior | Technology Preview | Technology Preview |  |

## Networking Technology Preview features {id="ocp-release-notes-networking-tech-preview_{{ context }}"}

**Networking Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| eBPF manager Operator | Technology Preview | Technology Preview |  |
| Advertise using L2 mode the MetalLB service from a subset of nodes, using a specific pool of IP addresses | Technology Preview | Technology Preview |  |
| Updating the interface-specific safe sysctls list | Technology Preview | Technology Preview |  |
| Egress service custom resource | Technology Preview | Technology Preview |  |
| VRF specification in `BGPPeer` custom resource | Technology Preview | Technology Preview |  |
| OVN-Kubernetes customized `br-ex` bridge on {{ vmw_short }} and {{ rh_openstack }} | Technology Preview | Technology Preview | Technology Preview |
| Live migration to OVN-Kubernetes from {{ product_title }} SDN | Not Available | Not Available |  |
| Dynamic configuration manager | Technology Preview | Technology Preview |  |
| SR-IOV Network Operator support for Intel C741 Emmitsburg Chipset | Technology Preview | Technology Preview | General Availability |
| Dual-port NIC for PTP ordinary clock | General Availability | General Availability |  |
| DPU Operator | Technology Preview | Technology Preview |  |
| Fast IPAM for the Whereabouts IPAM CNI plugin | Technology Preview | Technology Preview |  |
| Unnumbered BGP peering | General Availability | General Availability |  |
| Load balancing across the aggregated bonded interface with xmitHashPolicy | Technology Preview | Technology Preview |  |
| PF Status Relay Operator for high availability with SR-IOV networks | Technology Preview | Technology Preview |  |
| Preconfigured user-defined network end points using {{ mtv_short }} | Technology Preview | Technology Preview |  |
| Unassisted holdover for PTP devices | Technology Preview | General Availability |  |
| No-overlay mode with BGP routing | Not Available | Not Available | Technology Preview |
| Configuring GNR-D T-BC holdover on a GNR-D platform | Not Available | Not Available | Technology Preview |
| PTP Telecom Grandmaster (T-GM) on Intel Granite Rapids-D (GNR-D) | Not Available | Not Available | Technology Preview |

## Node Technology Preview features {id="ocp-release-notes-nodes-tech-preview_{{ context }}"}

**Nodes Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| `MaxUnavailableStatefulSet` featureset | Technology Preview | Technology Preview | Technology Preview |
| Default sigstore `openshift` cluster image policy | Technology Preview | General Availability | General Availability |
| Attribute-Based GPU Allocation | Technology Preview | General Availability | General Availability |
| Project-scoped image pull secrets for mirrored registries | Not Available | Not Available | Technology Preview |
| Partitionable device DRA support | Not Available | Not Available | Technology Preview |

## Postinstallation configuration Technology Preview features {id="ocp-release-notes-post-installation_{{ context }}"}

**Postinstallation configuration Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| Expanding a bare-metal cluster using images from OCI registries | Not Available | Not Available | Technology Preview |

## {{ rh_openstack_first }} Technology Preview features {id="ocp-release-notes-rhcos-tech-preview_{{ context }}"}

**{{ rh_openstack }} Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| {{ rh_openstack }} integration into the {{ cluster_capi_operator }} | Technology Preview | Technology Preview | Technology Preview |
| Hosted control planes on {{ rh_openstack }} 17.1 | Technology Preview | Technology Preview | Technology Preview |

## Scalability and performance Technology Preview features {id="ocp-release-notes-scalability-tech-preview_{{ context }}"}

**Scalability and performance Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| {{ factory_prestaging_tool }} | Technology Preview | Technology Preview |  |
| Hyperthreading-aware CPU manager policy | Technology Preview | Technology Preview |  |
| Mount namespace encapsulation | Technology Preview | Technology Preview |  |
| Node Observability Operator | Technology Preview | Technology Preview |  |
| Increasing the etcd database size | Technology Preview | Technology Preview |  |
| Managing etcd size by setting the `eventTTLMinutes` property | Not available | Technology Preview |  |
| Pinned Image Sets | Technology Preview | Technology Preview |  |
| Configuring NUMA-aware scheduler replicas and high availability | Technology Preview | Technology Preview |  |

## Storage Technology Preview features {id="ocp-release-notes-storage-tech-preview_{{ context }}"}

**Storage Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| AWS EFS One Zone volume | General Availability | General Availability | General Availability |
| Azure File CSI cloning support | Technology Preview | General Availability | General Availability |
| Azure File CSI snapshot support | Technology Preview | General Availability | General Availability |
| Azure Disk performance plus | General Availability | General Availability | General Availability |
| Configuring fsGroupChangePolicy per namespace | General Availability | General Availability | General Availability |
| European Sovereign Cloud (EUSC) region | Not Available | Not Available | Technology Preview |
| Hyperdisk Balanced HA volumes | Not Available | Not Available | General Availability |
| LSO symlinks management | Not Available | Not Available | General Availability |
| Increasing max number of volumes per node for vSphere | Technology Preview | Technology Preview | Technology Preview |
| RWX/RWO SELinux mount option | Technology Preview | Technology Preview | Technology Preview |
| CSI volume group snapshots | Technology Preview | Technology Preview | Technology Preview |
| Volume Attribute Classes | Technology Preview | General Availability | General Availability |
| Volume populators | General Availability | General Availability | General Availability |

## Web console Technology Preview features {id="ocp-release-notes-web-console-tech-preview_{{ context }}"}

**Web console Technology Preview tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| {{ ols_official }} in the {{ product_title }} web console | Technology Preview | Technology Preview |  |