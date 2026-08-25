{%- set _mod_docs_content_type = "CONCEPT" %}

# Manila CSI Driver Operator limitations {id="persistent-storage-csi-manila-limitations_{{ context }}"}

Before deploying the Manila CSI Driver Operator, understand the protocol, snapshot, and FSGroup limitations to ensure compatibility with your OpenStack storage configuration. {._abstract}

The following limitations apply to the Manila Container Storage Interface (CSI) Driver Operator:


Only NFS is supported
:   OpenStack Manila supports many network-attached storage protocols, such as NFS, CIFS, and CEPHFS, and these can be selectively enabled in the OpenStack cloud. The Manila CSI Driver Operator in {{ product_title }} only supports using the NFS protocol. If NFS is not available and enabled in the underlying OpenStack cloud, you cannot use the Manila CSI Driver Operator to provision storage for {{ product_title }}.


Snapshots are not supported if the back end is CephFS-NFS
:   To take snapshots of persistent volumes (PVs) and revert volumes to snapshots, you must ensure that the Manila share type that you are using supports these features. A Red Hat OpenStack administrator must enable support for snapshots (`share type extra-spec snapshot_support`) and for creating shares from snapshots (`share type extra-spec create_share_from_snapshot_support`) in the share type associated with the storage class you intend to use.


FSGroups are not supported
:   Since Manila CSI provides shared file systems for access by multiple readers and multiple writers, it does not support the use of FSGroups. This is true even for persistent volumes created with the ReadWriteOnce access mode. It is therefore important not to specify the `fsType` attribute in any storage class that you manually create for use with Manila CSI Driver.


:::important

In Red Hat OpenStack Platform 16.x and 17.x, the Shared File Systems service (Manila) with CephFS through NFS fully supports serving shares to {{ product_title }} through the Manila CSI. However, this solution is not intended for massive scale. Be sure to review important recommendations in "CephFS NFS Manila-CSI Workload Recommendations for Red Hat OpenStack Platform".

:::