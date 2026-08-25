{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the cluster {id="using-assisted-installer-oci-create-cluster_{{ context }}"}

To begin creating the cluster, set the cluster details. {._abstract}

**Prerequisites**

*   You created a child compartment and an object storage bucket on {{ oci_distributed_no_rt }}. For details, see _Preparing the {{ oci_distributed_no_rt }} environment_.
*   You reviewed details about the {{ product_title }} installation and update processes.

**Procedure**

1.  Log in to the [{{ ai_full }} web console](https://console.redhat.com/) with your credentials.
1.  In the **Red Hat OpenShift** tile, select **OpenShift**.
1.  In the **Red Hat {{ product_title }}** tile, select **Create Cluster**.
1.  On the **Cluster Type** page, scroll down to the end of the **Cloud** tab, and select **Oracle Cloud Infrastructure (virtual machines)**.
1.  On the **Create an OpenShift Cluster** page, select the **Interactive** tile.
1.  On the **Cluster Details** page, complete the following fields:
    | Field | Action required |
    | --- | --- |
    | **Cluster name** | Specify the name of your cluster, such as `oci`. This is the same value as the cluster name in {{ oci_distributed_no_rt }}. |
    | **Base domain** | Specify the base domain of the cluster, such as `openshift-demo.devcluster.openshift.com`.<br>This must be the same value as the zone DNS server in {{ oci_distributed_no_rt }}. |
    | **OpenShift version** | * For installations on virtual machines only, specify `OpenShift 4.14` or a later version.<br>* For installations that include bare metal machines, specify `OpenShift 4.16` or a later version. |
    | **CPU architecture** | Specify `x86_64` or `Arm64`. |
    | **Integrate with external partner platforms** | Specify `Oracle Cloud Infrastructure`.<br>After you specify this value, the **Include custom manifests** checkbox is selected by default and the **Custom manifests** page is added to the wizard. |
1.  Leave the default settings for the remaining fields, and click **Next**.
1.  On the **Operators** page, click **Next**.