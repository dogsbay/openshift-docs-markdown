{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using persistent volumes {id="cloud-experts-deploying-application-storage-persistent-volumes_{{ context }}"}

Use the following procedures to create a file, store it on a persistent volume in your cluster, and confirm that it still exists after pod failure and re-creation. {._abstract}

**Procedure**

1.  View your persistent volume claim by navigating to the cluster’s OpenShift web console.
1.  Click **Storage** in the left menu, then click **PersistentVolumeClaims** to see a list of all the persistent volume claims. 
1.  Click a persistence volume claim to see the size, access mode, storage class, and other additional claim details. 

    :::note

    The access mode is `ReadWriteOnce` (RWO). This means that the volume can only be mounted to one node and the pod or pods can read and write to the volume.
    
    :::

1.  In the OSToy app console, click **Persistent Storage** in the left menu.
1.  In the **Filename** box, enter a file name with a `.txt` extension, for example `test-pv.txt`.
1.  In the **File contents** box, enter a sentence of text, for example `OpenShift is the greatest thing since sliced bread!`.
1.  Click **Create file**.
    ![cloud-experts-storage-ostoy-createfile](/images/cloud-experts-storage-ostoy-createfile.png)

**Verification**

1.  Scroll to **Existing files** on the OSToy app console.
1.  Click the file you created to see the file name and contents.
    ![cloud-experts-storage-ostoy-viewfile](/images/cloud-experts-storage-ostoy-viewfile.png)