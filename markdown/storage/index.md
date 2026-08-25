---
title: OpenShift Container Platform storage overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ product_title }} storage overview {id="storage-overview"}
{%- set context = "storage-overview" %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_title }} supports multiple types of storage, both for on-premise and cloud providers. You can manage container storage for persistent and non-persistent data in an {{ product_title }} cluster.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }} supports Amazon Elastic Block Store (Amazon EBS) and Amazon Elastic File System (Amazon EFS) storage. You can manage container storage for persistent and non-persistent data in an {{ product_title }} cluster.
{% endif %}

{% leveloffset +1 %}{% include "./modules/openshift-storage-common-terms.md" %}{% endleveloffset %}

## Storage types {id="storage-types"}

{{ product_title }} storage is broadly classified into two categories, namely ephemeral storage and persistent storage.

### Ephemeral storage {id="ephemeral-storage"}

Pods and containers are ephemeral or transient in nature and designed for stateless applications. Ephemeral storage allows administrators and developers to better manage the local storage for some of their operations. For more information about ephemeral storage overview, types, and management, see [Understanding ephemeral storage](/storage/understanding-ephemeral-storage#understanding-ephemeral-storage).

### Persistent storage {id="persistent-storage"}

Stateful applications deployed in containers require persistent storage. {{ product_title }} uses a pre-provisioned storage framework called persistent volumes (PV) to allow cluster administrators to provision persistent storage. The data inside these volumes can exist beyond the lifecycle of an individual pod. Developers can use persistent volume claims (PVCs) to request storage requirements. For more information about persistent storage overview, configuration, and lifecycle, see [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage).

## Container Storage Interface (CSI) {id="container-storage-interface"}

CSI is an API specification for the management of container storage across different container orchestration (CO) systems. You can manage the storage volumes within the container native environments, without having specific knowledge of the underlying storage infrastructure. With the CSI, storage works uniformly across different container orchestration systems, regardless of the storage vendors you are using. For more information about CSI, see [Using Container Storage Interface (CSI)](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi).

## Dynamic Provisioning {id="dynamic-provisioning-overview"}

Dynamic Provisioning allows you to create storage volumes on-demand, eliminating the need for cluster administrators to pre-provision storage. For more information about dynamic provisioning, see [Dynamic provisioning](/storage/dynamic-provisioning#dynamic-provisioning).