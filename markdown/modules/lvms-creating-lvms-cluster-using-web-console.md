{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an LVMCluster CR by using the web console {id="lvms-creating-lvms-cluster-using-web-console_{{ context }}"}

You can create an `LVMCluster` custom resource (CR) on a worker node by using the {{ product_title }} web console to configure storage deployment and provision local storage for your workloads. {._abstract}


:::important

You can only create a single instance of the `LVMCluster` custom resource (CR) on an {{ product_title }} cluster.

:::


**Prerequisites**

*   You have access to the {{ product_title }} cluster with `cluster-admin` privileges.
*   You have installed {{ lvms }}.
*   You have installed a worker node in the cluster.
*   You read the "About the LVMCluster custom resource" section.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** -> **Installed Operators**.
1.  In the `openshift-lvm-storage` namespace, click **{{ lvms }}**.
1.  Click **Create LVMCluster** and select either **Form view** or **YAML view**.
1.  Configure the required `LVMCluster` CR parameters.
1.  Click **Create**.
1.  Optional: If you want to edit the `LVMCLuster` CR, perform the following actions:
    1.  Click the **LVMCluster** tab.
    1.  From the **Actions** menu, select **Edit LVMCluster**. 
    1.  Click **YAML** and edit the required `LVMCLuster` CR parameters.  
    1.  Click **Save**.

**Verification**

1.  On the **LVMCLuster** page, check that the `LVMCluster` CR is in the `Ready` state. 
1.  Optional: To view the available storage classes created by {{ lvms }} for each device class, click **Storage** -> **StorageClasses**. 
1.  Optional: To view the available volume snapshot classes created by {{ lvms }} for each device class, click **Storage** -> **VolumeSnapshotClasses**.