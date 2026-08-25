{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scale compute nodes manually {id="rosa-scaling-worker-nodes_{{ context }}"}

If you have not enabled autoscaling for your machine pool, you can manually scale the number of compute nodes, also known as worker nodes, in the pool to meet your deployment needs. You must scale each machine pool separately. {._abstract}

**Prerequisites**

{% if openshift_rosa or openshift_rosa_hcp %}
*   You installed and configured the latest {{ rosa_cli_first }} on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   You created an {{ product_title }} cluster.
{%- endif %}
*   You have an existing machine pool.

**Procedure**

{% if openshift_rosa or openshift_rosa_hcp %}

1.  List the machine pools in the cluster:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```

    **Example output**
    ```terminal
    ID        AUTOSCALING   REPLICAS    INSTANCE TYPE  LABELS    TAINTS   AVAILABILITY ZONES    DISK SIZE   SG IDs
    default   No            2           m7i.xlarge                         us-east-1a            300GiB      sg-0e375ff0ec4a6cfa2
    mp1       No            2           m7i.xlarge                         us-east-1a            300GiB      sg-0e375ff0ec4a6cfa2
    ```
1.  Increase or decrease the number of compute node replicas in a machine pool:
    ```terminal
    $ rosa edit machinepool --cluster=<cluster_name> \
                            --replicas=<replica_count> \
                            <machine_pool_id>
    ```

    where:
{%- if openshift_rosa %}
    *   `<replica_count>`: If you deployed {{ product_title }} using a single availability zone, the replica count defines the number of compute nodes to provision to the machine pool for the zone. If you deployed your cluster using multiple availability zones, the count defines the total number of compute nodes in the machine pool across all zones and must be a multiple of 3.
{%- endif %}
{%- if openshift_rosa_hcp %}
    *   `<replica_count>`: The replica count defines the number of compute nodes to provision to the machine pool for the zone.
{%- endif %}
    *   `<machine_pool_id>`: Replace with the ID of your machine pool, as listed in the output of the preceding command.

{% if openshift_rosa or openshift_rosa_hcp %}
1.  List the available machine pools in your cluster:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```

    **Example output**
    ```terminal
    ID        AUTOSCALING   REPLICAS    INSTANCE TYPE  LABELS    TAINTS   AVAILABILITY ZONES    DISK SIZE   SG IDs
    default   No            2           m7i.xlarge                         us-east-1a            300GiB      sg-0e375ff0ec4a6cfa2
    mp1       No            3           m7i.xlarge                         us-east-1a            300GiB      sg-0e375ff0ec4a6cfa2
    ```
1.  In the output of the preceding command, verify that the compute node replica count is as expected for your machine pool. In the example output, the compute node replica count for the `mp1` machine pool is scaled to 3.
{% endif %}
{% endif %}

{% if openshift_dedicated %}
1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to scale.
1.  Select **Scale**.
1.  Specify the node count:
    *   If you deployed your cluster using a single availability zone, specify the **Node count** in the drop-down menu.
    *   If you deployed your cluster using multiple availability zones, specify the **Node count per zone** in the drop-down menu.

        :::note

        Your subscription determines the number of nodes that you can select.
        
        :::

1.  Click **Apply** to scale the machine pool.
{% endif %}

**Verification**

{% if openshift_rosa or openshift_rosa_hcp %}
*   Verify that the compute node replica count is as expected for your machine pool by listing the machine pools and checking the REPLICAS column.
{% endif %}
{% if openshift_dedicated %}
*   Under the **Machine pools** tab, verify that the **Node count** for your machine pool is as expected.
{% endif %}