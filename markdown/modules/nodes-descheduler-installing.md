{% if context == "nodes-descheduler-configuring" %}
{%- set nodes = true -%}
{% endif %}

{% if context == "virt-enabling-descheduler-evictions" %}
{%- set virt = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the descheduler {id="nodes-descheduler-installing_{{ context }}"}

The descheduler is not available by default. To enable the descheduler, you must install the {{ descheduler_operator }} from the software catalog and enable one or more descheduler profiles. {._abstract}

By default, the descheduler runs in predictive mode, which means that it only simulates pod evictions. You must change the mode to automatic for the descheduler to perform the pod evictions.


:::important

If you have enabled {{ hcp }} in your cluster, set a custom priority threshold to lower the chance that pods in the hosted control plane namespaces are evicted. Set the priority threshold class name to `hypershift-control-plane`, because it has the lowest priority value (`100000000`) of the hosted control plane priority classes.

:::


**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}
*   Access to the {{ product_title }} web console.
{%- if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in _Configuring {{ product_title }} to use Red Hat Operators_.
{% endif %}

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create the required namespace for the {{ descheduler_operator }}.
    1.  Navigate to **Administration** -> **Namespaces** and click **Create Namespace**.
    1.  Enter `openshift-kube-descheduler-operator` in the **Name** field, enter `openshift.io/cluster-monitoring=true` in the **Labels** field to enable descheduler metrics, and click **Create**.
1.  Install the {{ descheduler_operator }}.
    1.  Navigate to **Ecosystem** -> **Software Catalog**.
    1.  Type **{{ descheduler_operator }}** into the filter box.
    1.  Select the **{{ descheduler_operator }}** and click **Install**.
    1.  On the **Install Operator** page, select **A specific namespace on the cluster**. Select **openshift-kube-descheduler-operator** from the drop-down menu.
    1.  Adjust the values for the **Update Channel** and **Approval Strategy** to the desired values.
    1.  Click **Install**.
1.  Create a descheduler instance.
    1.  From the **Ecosystem** -> **Installed Operators** page, click the **{{ descheduler_operator }}**.
    1.  Select the **Kube Descheduler** tab and click **Create KubeDescheduler**.
    1.  Edit the settings as necessary.
        1.  To evict pods instead of simulating the evictions, change the **Mode** field to **Automatic**.

{% if virt %}
        1.  Expand the **Profiles** section and select `KubeVirtRelieveAndMigrate`. The `AffinityAndTaints` profile is enabled by default.

            :::note

            You can also configure the profiles and settings for the descheduler later using the {{ oc_first }}.
            
            :::


{% endif %}
{% if nodes %}
        1.  Expand the **Profiles** section to select one or more profiles to enable. The `AffinityAndTaints` profile is enabled by default. Click **Add Profile** to select additional profiles.

            :::note

            Do not enable both `TopologyAndDuplicates` and `SoftTopologyAndDuplicates`. Enabling both results in a conflict.
            
            :::

        1.  Optional: Expand the **Profile Customizations** section to set optional configurations for the descheduler.
            *   Set a custom pod lifetime value for the `LifecycleAndUtilization` profile. Use the **podLifetime** field to set a numerical value and a valid unit (`s`, `m`, or `h`). The default pod lifetime is 24 hours (`24h`).
            *   Set a custom priority threshold to consider pods for eviction only if their priority is lower than a specified priority level. Use the **thresholdPriority** field to set a numerical priority threshold or use the **thresholdPriorityClassName** field to specify a certain priority class name.

                :::note

                Do not specify both **thresholdPriority** and **thresholdPriorityClassName** for the descheduler.
                
                :::

            *   Set specific namespaces to exclude or include from descheduler operations. Expand the **namespaces** field and add namespaces to the **excluded** or **included** list. You can only either set a list of namespaces to exclude or a list of namespaces to include. Note that protected namespaces (`openshift-*`, `kube-system`, `hypershift`) are excluded by default.
            *   Experimental: Set thresholds for underutilization and overutilization for the `LowNodeUtilization` strategy. Use the **devLowNodeUtilizationThresholds** field to set one of the following values:
                *   `Low`: 10% underutilized and 30% overutilized
                *   `Medium`: 20% underutilized and 50% overutilized (Default)
                *   `High`: 40% underutilized and 70% overutilized

                :::note

                This setting is experimental and should not be used in a production environment.
                
                :::

        1.  Optional: Use the **Descheduling Interval Seconds** field to change the number of seconds between descheduler runs. The default is `3600` seconds.
    1.  Click **Create**.


        You can also configure the profiles and settings for the descheduler later using the OpenShift CLI (`oc`). If you did not adjust the profiles when creating the descheduler instance from the web console, the `AffinityAndTaints` profile is enabled by default.
{% endif %}

{% if context == "nodes-descheduler-configuring" %}
{%- set nodes = false -%}
{% endif %}

{% if context == "virt-enabling-descheduler-evictions" %}
{%- set virt = false -%}
{% endif %}