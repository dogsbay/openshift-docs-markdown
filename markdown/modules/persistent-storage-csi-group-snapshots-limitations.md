{%- set _mod_docs_content_type = "CONCEPT" %}
# CSI volume group snapshots limitations {id="persistent-storage-csi-group-snapshots-limitations_{{ context }}"}

Volume group snapshots have operational and consistency limitations that affect how you can use them for data protection and recovery. Understanding these constraints helps you design appropriate backup and recovery strategies for multi-volume applications. {._abstract}

Volume group snapshots have the following limitations:

*   Does not support reverting an existing persistent volume claim (PVC) to an earlier state represented by a snapshot. You can only provision a new volume from a snapshot.
*   No guarantees of application consistency, for example, crash consistency, are provided beyond those provided by the storage system. For more information about application consistency, see "Quiesce and Unquiesce Hooks".
*   Volume group snapshots need to be supported by the Container Storage Interface (CSI) driver. {{ rh_storage }} supports volume group snapshots.