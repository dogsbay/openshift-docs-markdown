{%- set _mod_docs_content_type = "PROCEDURE" %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
# Creating a machine pool {id="creating_machine_pools_ocm_{{ context }}"}

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
# Creating a machine pool using {{ cluster_manager }} {id="_creating_a_machine_pool_using_cluster_manager"}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
A machine pool is created when you install an {{ product_title }} cluster. After installation, you can create additional machine pools for your cluster by using {{ cluster_manager }}.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
You can create additional machine pools for your {{ product_title }} cluster by using {{ cluster_manager }}. {._abstract}
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::important

The compute, also known as worker, node instance types, autoscaling options, and node counts that are available depend on your {{ product_title }} subscriptions, resource quotas and deployment scenario. For more information, contact your sales representative or Red&#160;Hat support.

:::

{% endif %}

**Prerequisites**

{% if openshift_rosa or openshift_rosa_hcp %}
*   You created a {{ product_title }} cluster.
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   You created an {{ product_title }} cluster.
{% endif %}

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Machine pools** tab, click **Add machine pool**.
1.  Add a **Machine pool name**.
1.  Select a **Compute node instance type** from the list. The instance type defines the vCPU and memory allocation for each compute node in the machine pool.

    :::note

    You cannot change the instance type for a machine pool after the pool is created.
    
    :::

{% if openshift_rosa_hcp %}
1.  Optional: If you are using {{ VirtProductName }} on a {{ product_title }} cluster, you might want to run Windows VMs. In order to be license-compliant with Microsoft Windows in AWS, the hosts (x86-64 bare metal EC2 instances) running these VMs must be enabled with AWS EC2 Windows License Included. To enable the machine pool for AWS Windows License Included, select the **Enable machine pool for AWS Windows License Included** checkbox.

    You can only select this option when the host cluster is a {{ product_title }} cluster version 4.19 and later and the instance type is x86-64 bare metal EC2.

    :::important

    Enabling AWS Windows LI on a machine pool applies the associated licensing fees on that specific machine pool. This includes billing for the full vCPU allocation of each AWS Windows LI enabled host in your {{ product_title }} cluster. Windows LI enabled machine pools will also deny vCPU over-allocation on {{ VirtProductName }} VMs.
    
    :::

{% endif %}
1.  Configure the node count by choosing one of the following options:
    *   **Enable autoscaling**: Select **Enable autoscaling** to automatically scale the number of machines in your machine pool to meet the deployment needs. Set the minimum and maximum node count limits for autoscaling. The cluster autoscaler does not reduce or increase the machine pool node count beyond the limits that you specify.
{%- if openshift_dedicated %}

    :::note

    The **Enable autoscaling** option is only available for {{ product_title }} if you have the `capability.cluster.autoscale_clusters` subscription. For more information, contact your sales representative or Red&#160;Hat support.
    
    :::

{%- endif %}
{%- if not openshift_rosa_hcp %}
        *   If you deployed your cluster using a single availability zone, set the **Minimum and maximum node count**. This defines the minimum and maximum compute node limits in the availability zone.
        *   If you deployed your cluster using multiple availability zones, set the **Minimum nodes per zone** and **Maximum nodes per zone**. This defines the minimum and maximum compute node limits per zone.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
    *   **Manual node count**: If you do not enable autoscaling, select a compute node count:
        *   If you deployed your cluster using a single availability zone, select a **Compute node count** from the drop-down menu. This defines the number of compute nodes to provision to the machine pool for the zone.
        *   If you deployed your cluster using multiple availability zones, select a **Compute node count (per zone)** from the drop-down menu. This defines the number of compute nodes to provision to the machine pool per zone.
{%- endif %}
{%- if openshift_rosa_hcp %}
    *   **Manual node count**: If you do not enable autoscaling, select a **Compute node count** from the drop-down menu. This defines the number of compute nodes to provision to the machine pool for the availability zone.
{%- endif %}
1.  Optional: Configure advanced machine pool settings by expanding the appropriate sections and providing values:
{%- if openshift_rosa or openshift_rosa_hcp %}
    *   **Root disk size**: Specify a custom root disk size.
{%- endif %}
{%- if openshift_rosa_hcp %}
    *   **Reserved capacity**: Add reserved capacity to your machine pool:
        *   Select a **Reservation Preference** from the list. Valid preferences include:
            *   **None**: The instance does not use a Capacity Reservation even if one is available. The instance runs as an EC2 On-Demand instance. Choose this option when you want to avoid consuming purchased reserved capacity and use it for other workloads.
            *   **Open**: The instance can run in any `open` Capacity Reservation that has matching attributes such as the instance type, platform, AZ, or tenancy. Choose this option for flexibility; if a reservation is not available, the instance can use regular unreserved EC2 capacity.
            *   **CR only** (capacity reservation only): The instance can only run in a Capacity Reservation. If capacity is not available, the instance fails to launch.
        *   Add a **Reservation ID**. You get an ID in the `cr-<capacity_reservation_id>` format when you purchase a Capacity Reservation from AWS. The ID can be for both On-Demand Capacity Reservations or Capacity Blocks for ML.
{%- endif %}
    1.  For **Node labels and taints**, expand the **Edit node labels and taints** menu.
    1.  Under **Node labels**, add **Key** and **Value** entries for your node labels.
    1.  Under **Taints**, add **Key** and **Value** entries for your taints. For each taint, select an **Effect** from the drop-down menu. Available options include `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.

        :::note

        Creating a machine pool with taints is only possible if the cluster already has at least one machine pool without a taint. Alternatively, you can add node labels and taints after you create the machine pool.
        
        :::

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
        *   **Custom security groups**: Select additional custom security groups to use for nodes in this machine pool. You must have already created the security groups and associated them with the VPC that you selected for this cluster. You cannot add or edit security groups after you create the machine pool.
{%- if not openshift_rosa_hcp %}
        For more information, see the requirements for security groups in the "Additional resources" section.
{%- endif %}
{% endif %}
{% if openshift_rosa_hcp %}

        :::important

        You can use up to ten additional security groups for machine pools on {{ product_title }} clusters.
        
        :::

{% endif %}
{% if openshift_dedicated %}
        *   **Amazon EC2 Spot Instances**: If you deployed {{ product_title }} on AWS using the Customer Cloud Subscription (CCS) model and want to configure your machine pool to deploy machines as non-guaranteed AWS Spot Instances, select **Use Amazon EC2 Spot Instances**. Leave **Use On-Demand instance price** selected to use the on-demand instance price, or select **Set maximum price** to define a maximum hourly price for a Spot Instance.
{% endif %}
{% if openshift_rosa %}
        *   **Amazon EC2 Spot Instances**: To configure your machine pool to deploy machines as non-guaranteed AWS Spot Instances, select **Use Amazon EC2 Spot Instances**. Leave **Use On-Demand instance price** selected to use the on-demand instance price, or select **Set maximum price** to define a maximum hourly price for a Spot Instance.
{%- if not openshift_rosa_hcp %}

            :::important

            Your Amazon EC2 Spot Instances might be interrupted at any time. Use Amazon EC2 Spot Instances only for workloads that can tolerate interruptions.
            
            :::


            :::note

            If you select **Use Amazon EC2 Spot Instances** for a machine pool, you cannot disable the option after the machine pool is created.
            
            :::

{%- endif %}
{% endif %}
{% if openshift_dedicated %}
        *   **Shielded VMs** ({{ GCP }} only): By default, {{ product_title }} on {{ GCP }} instances in the machine pools inherit the Shielded VM settings at the cluster level. You can override the cluster level Shielded VM settings at the machine pool level by selecting or clearing the **Enable Secure Boot support for Shielded VMs** checkbox.

            :::important

            Once a machine pool is created, the **Enable Secure Boot support for Shielded VMs** setting cannot be changed. This setting is not supported for {{ product_title }} on {{ GCP }} clusters created using bare-metal instance types.
            
            :::

1.  Click **Add machine pool** to create the machine pool.

**Verification**

*   Verify that the machine pool is visible on the **Machine pools** page and the configuration is as expected.
{% endif %}