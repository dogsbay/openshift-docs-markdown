{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a file system with {{ FusionSAN }} {id="creating-filesystem-fusion-access-san_{{ context }}"}

You need to create a file system to represent your required storage. {._abstract}

The file system is based on the storage available in the worker nodes you selected when creating the storage cluster.

**Prerequisites**

*   You created a {{ FusionSAN }} storage cluster.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Storage** → **{{ FusionSAN }}**.
1.  In the **File systems** tab, click **Create file system**.
1.  Enter a **Name** for the new file system.
1.  Select the LUNs that you want to use as the storage volumes for your file system.
1.  Click **Create file system**.

    The **{{ FusionSAN }}** page reloads, and the new file system is displayed in the **File systems** tab.

**Next steps**

Repeat this procedure for each file system that you want to create.

**Verification**

1.  Watch the **Status** of the file system in the **File systems** tab until it is marked as **Healthy**. This might take several minutes.
1.  Click the **StorageClass** for the file system.
1.  In the **YAML** tab, verify the following:
    1.  The value in the `name` field is the name of the file system you created.
    1.  The value in the `provisioner` field is `spectrumscale.csi.ibm.com`.
    1.  The value in the `volBackendFs` field matches the name of the file system you created.
        ```yaml
        kind: StorageClass
        apiVersion: storage.k8s.io/v1
        metadata:
          name: filesystem1
          uid: eb410309-a043-a89b-9bb05483872a
          resourceVersion: '87746'
          creationTimestamp: '2025-05-14T12:30:08Z'
          managedFields:
        provisioner: spectrumscale.csi.ibm.com
        parameters:
          volBackendFs: filesystem1
        reclaimPolicy: Delete
        allowVolumeExpansion: true
        volumeBindingMode: Immediate
        ```