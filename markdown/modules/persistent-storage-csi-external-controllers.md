{%- set _mod_docs_content_type = "REFERENCE" %}
# External CSI controllers {id="external-csi-contollers_{{ context }}"}

External Container Storage Interface (CSI) controllers run as deployments with containers handling volume provisioning, deletion, attachment, snapshotting, and resizing. Controller pods communicate with CSI drivers using UNIX Domain Sockets and run on infrastructure nodes to protect credentials. {._abstract}

External CSI controllers is a deployment that deploys one or more pods with five containers:

*   The snapshotter container watches `VolumeSnapshot` and `VolumeSnapshotContent` objects and is responsible for the creation and deletion of `VolumeSnapshotContent` object.
*   The resizer container is a sidecar container that watches for `PersistentVolumeClaim` updates and triggers `ControllerExpandVolume` operations against a CSI endpoint if you request more storage on `PersistentVolumeClaim` object.
*   An external CSI attacher container translates `attach` and `detach` calls from {{ product_title }} to respective `ControllerPublish` and
`ControllerUnpublish` calls to the CSI driver.
*   An external CSI provisioner container that translates `provision` and `delete` calls from {{ product_title }} to respective `CreateVolume` and `DeleteVolume` calls to the CSI driver.
*   A CSI driver container.

The CSI attacher and CSI provisioner containers communicate with the CSI driver container using UNIX Domain Sockets, ensuring that no CSI
communication leaves the pod. The CSI driver is not accessible from outside of the pod.


:::note

The `attach`, `detach`, `provision`, and `delete` operations typically require the CSI driver to use credentials to the storage backend. Run the CSI controller pods on infrastructure nodes so the credentials are never leaked to user processes, even in case of a catastrophic security breach on a compute node.

:::



:::note

The external attacher must also run for CSI drivers that do not support third-party `attach` or `detach` operations. The external attacher does not issue any `ControllerPublish` or `ControllerUnpublish` operations to the CSI driver. However, it still must run to implement the necessary {{ product_title }} attachment API.

:::