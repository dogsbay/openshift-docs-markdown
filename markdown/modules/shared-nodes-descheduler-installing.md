{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the descheduler {id="nodes-descheduler-installing_{{ context }}"}

The descheduler is not available by default. To enable the descheduler, you must install the Kube Descheduler Operator from the software catalog and enable one or more descheduler profiles. {._abstract}

By default, the descheduler runs in predictive mode, which means that it only simulates pod evictions. You must change the mode to automatic for the descheduler to perform the pod evictions.


:::important

If you have enabled {{ hcp }} in your cluster, set a custom priority threshold to lower the chance that pods in the hosted control plane namespaces are evicted. Set the priority threshold class name to `hypershift-control-plane`, because it has the lowest priority value (`100000000`) of the hosted control plane priority classes.

:::


**Prerequisites**

*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
*   Access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create the required namespace for the Kube Descheduler Operator.
    1.  Navigate to **Administration** → **Namespaces** and click **Create Namespace**.
    1.  Enter `openshift-kube-descheduler-operator` in the **Name** field, enter `openshift.io/cluster-monitoring=true` in the **Labels** field to enable descheduler metrics, and click **Create**.
1.  Install the Kube Descheduler Operator.
    1.  Navigate to **Ecosystem** → **Software Catalog**.
    1.  Type **Kube Descheduler Operator** into the filter box.
    1.  Select the **Kube Descheduler Operator** and click **Install**.
    1.  On the **Install Operator** page, select **A specific namespace on the cluster**. Select **openshift-kube-descheduler-operator** from the drop-down menu.
    1.  Adjust the values for the **Update Channel** and **Approval Strategy** to the desired values.
    1.  Click **Install**.
1.  Create a descheduler instance.
    1.  From the **Ecosystem** → **Installed Operators** page, click the **Kube Descheduler Operator**.
    1.  Select the **Kube Descheduler** tab and click **Create KubeDescheduler**.
    1.  Edit the settings as necessary.
        1.  To evict pods instead of simulating the evictions, change the **Mode** field to **Automatic**.
        1.  Expand the **Profiles** section and select `KubeVirtRelieveAndMigrate`. The `AffinityAndTaints` profile is enabled by default.

            :::note

            You can also configure the profiles and settings for the descheduler later using the {{ oc_first }}.
            
            :::