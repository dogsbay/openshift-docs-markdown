{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of local storage options {id="persistent-storage-local-top-level-overview_{{ context }}"}

{{ product_title }} provides three solutions for provisioning node-local storage. Each offers different capabilities for dynamic provisioning and topology awareness. Node-local storage binds workloads to specific nodes. {._abstract}

You can use any of the following solutions to provision local storage:

*   HostPath Provisioner (HPP)
*   Local Storage Operator (LSO)
*   {{ lvms_first }}


:::warning

These solutions support provisioning only node-local storage. The workloads are bound to the nodes that provide the storage. If the node becomes unavailable, the workload also becomes unavailable. To maintain workload availability despite node failures, you must ensure storage data replication through active or passive replication mechanisms.

:::


## Overview of HostPath Provisioner functionality {id="overview-of-hpp-functionality_{{ context }}"}
You can perform the following actions using HostPath Provisioner (HPP):

*   Map the host filesystem paths to storage classes for provisioning local storage.
*   Statically create storage classes to configure filesystem paths on a node for storage consumption.
*   Statically provision Persistent Volumes (PVs) based on the storage class.
*   Create workloads and PersistentVolumeClaims (PVCs) while being aware of the underlying storage topology.


:::note

HPP is available in upstream Kubernetes. However, it is not recommended to use HPP from upstream Kubernetes.

:::


## Overview of Local Storage Operator functionality {id="overview-of-lso-functionality_{{ context }}"}
You can perform the following actions using Local Storage Operator (LSO):

*   Assign the storage devices (disks or partitions) to the storage classes without modifying the device configuration.
*   Statically provision PVs and storage classes by configuring the `LocalVolume` custom resource (CR).
*   Create workloads and PVCs while being aware of the underlying storage topology.


:::note

LSO is developed and delivered by Red&#160;Hat.

:::


## Overview of {{ lvms }} functionality {id="overview-of-lvm-storage-functionality_{{ context }}"}
You can perform the following actions using {{ lvms_first }}:

*   Configure storage devices (disks or partitions) as lvm2 volume groups and expose the volume groups as storage classes.
*   Create workloads and request storage by using PVCs without considering the node topology.

{{ lvms }} uses the TopoLVM CSI driver to dynamically allocate storage space to the nodes in the topology and provision PVs.


:::note

{{ lvms }} is developed and maintained by Red&#160;Hat. The CSI driver provided with {{ lvms }} is the upstream project "topolvm".

:::