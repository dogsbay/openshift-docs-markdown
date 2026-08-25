{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying a volume snapshot class by using the web console {id="virt-customizing-storage-profile-snapshot-class_web_{{ context }}"}

If you are creating a snapshot of a VM, you must specify only one volume snapshot class. Any disk that has more than one volume snapshot class is excluded from the snapshots list. A warning is displayed if the storage class of the disk has more than one volume snapshot class associated with it. {._abstract}

You can specify the default volume snapshot class in the {{ product_title }} web console.

**Procedure**

1.  From the **Virtualization** focused view, select **Storage**.
1.  Click **VolumeSnapshotClasses**.
1.  Select a volume snapshot class from the list.
1.  Click the **Annotations** pencil icon.
1.  Enter the following **Key**: `snapshot.storage.kubernetes.io/is-default-class`.
1.  Enter the following **Value**: `true`.
1.  Click **Save**.