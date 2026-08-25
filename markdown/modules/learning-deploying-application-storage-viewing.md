{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a persistent volume claim {id="learning-deploying-application-storage-viewing_{{ context }}"}

To verify your storage configuration, view your application’s persistent volume claim from {{ cluster_manager_first }}. {._abstract}

**Procedure**

1.  Navigate to the cluster’s {{ ocp_short }} web console.
1.  Click **Storage** in the left menu, then click **PersistentVolumeClaims** to see a list of all the persistent volume claims. 
1.  Click a persistent volume claim to see the size, access mode, storage class, and other additional claim details. 

    :::note

    The access mode is `ReadWriteOnce` (RWO). This means that the volume can only be mounted to one node and the pod or pods can read and write to the volume.
    
    :::