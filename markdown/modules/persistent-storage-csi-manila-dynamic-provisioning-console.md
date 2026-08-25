{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamically provisioning Manila CSI volumes by using the web console {id="persistent-storage-csi-manila-dynamic-provisioning-console_{{ context }}"}

To dynamically provision shared storage volumes using the {{ product_title }} web console, create a persistent volume claim (PVC) by selecting a Manila CSI storage class. {._abstract}

**Prerequisites**

*   {{ rh_openstack }} is deployed with appropriate Manila share infrastructure so that it can be used to dynamically provision and mount volumes in {{ product_title }}.

**Procedure**

1.  In the {{ product_title }} web console, click **Storage** → **Persistent Volume Claims**.
1.  In the persistent volume claims overview, click **Create Persistent Volume Claim**.
1.  Define the required options on the resulting page.
    1.  Select the appropriate storage class.
    1.  Enter a unique name for the storage claim.
    1.  Select the access mode to specify read and write access for the PVC you are creating.

        :::important

        Use RWX if you want the PV that fulfills this PVC to be mounted to multiple pods on multiple nodes in the cluster.
        
        :::

1.  Define the size of the storage claim.
1.  Click **Create** to create the PVC and generate a PV.

**Results**

You can now use the new PVC to configure a pod.