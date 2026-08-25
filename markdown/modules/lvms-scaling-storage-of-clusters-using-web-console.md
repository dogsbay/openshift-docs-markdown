{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling up the storage of clusters by using the web console {id="lvms-scaling-storage-of-clusters-using-web-console_{{ context }}"}

Scale up worker node storage capacity when running out of space, adding new applications, or expanding cluster capacity by using the {{ product_title }} web console to add new devices or worker nodes. {._abstract}

**Prerequisites**

*   You have additional unused devices on each cluster to be used by {{ lvms_first }}.
*   You have created an `LVMCluster` custom resource (CR).

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** -> **Installed Operators**. 
1.  Click **{{ lvms }}** in the `openshift-lvm-storage` namespace.
1.  Click the **LVMCluster** tab to view the `LVMCluster` CR created on the cluster.
1.  From the **Actions** menu, select **Edit LVMCluster**.
1.  Click the **YAML** tab.
1.  Edit the `LVMCluster` CR to add the new device path in the `deviceSelector` field:
{% include "./snippets/lvms-scaling-up-storage-lvmcluster-cr-snippet.md" %}
1.  Click **Save**.