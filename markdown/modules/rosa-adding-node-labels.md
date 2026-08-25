{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add node labels to a machine pool {id="rosa-adding-node-labels_{{ context }}"}

Add or edit labels for compute nodes at any time to manage the nodes in a manner that is relevant to you. For example, you can assign types of workloads to specific nodes. Each key must be unique to the object it is assigned to. {._abstract}

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

{%- if openshift_rosa or openshift_rosa_hcp %}

1.  List the machine pools in the cluster:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```

    **Example output**
{%- if openshift_rosa %}
    ```terminal
    ID           AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONES    SPOT INSTANCES
    Default      No           2         m7i.xlarge                          us-east-1a            N/A
    db-nodes-mp  No           2         m7i.xlarge                          us-east-1a            No
    ```
{% endif %}
{% if openshift_rosa_hcp %}
    ```terminal
    ID           AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    VERSION  AUTOREPAIR
    workers      No           2/2       m7i.xlarge                          us-east-2a         subnet-0df2ec3377847164f  4.16.6   Yes
    db-nodes-mp  No           2/2       m7i.xlarge                          us-east-2a         subnet-0df2ec3377847164f  4.16.6   Yes
    ```
{% endif %}
1.  Add or update the node labels for a machine pool:
    *   To add or update node labels for a machine pool that does not use autoscaling, run the following command:
        ```terminal
        $ rosa edit machinepool --cluster=<cluster_name> \
                                --labels=<key>=<value>,<key>=<value> \
                                <machine_pool_id>
        ```

        Replace `<key>=<value>,<key>=<value>` with a comma-delimited list of key-value pairs, for example `--labels=key1=value1,key2=value2`. This list overwrites any modifications made to node labels on an ongoing basis.

        The following example adds labels to the `db-nodes-mp` machine pool:
        ```terminal
        $ rosa edit machinepool --cluster=mycluster --replicas=2 --labels=app=db,tier=backend db-nodes-mp
        ```

        **Example output**
        ```terminal
        I: Updated machine pool 'db-nodes-mp' on cluster 'mycluster'
        ```
1.  Describe the details of the machine pool with the new labels:
    ```terminal
    $ rosa describe machinepool --cluster=<cluster_name> --machinepool=<machine-pool-name>
    ```

    **Example output**
{%- if openshift_rosa %}
    ```terminal
    ID:                         db-nodes-mp
    Cluster ID:                 <ID_of_cluster>
    Autoscaling:                No
    Replicas:                   2
    Instance type:              m7i.xlarge
    Labels:                     app=db, tier=backend
    Taints:
    Availability zones:         us-east-1a
    Subnets:
    Spot instances:             No
    Disk size:                  300 GiB
    Security Group IDs:
    ```
{% endif %}
{% if openshift_rosa_hcp %}
    ```terminal
    ID:                            db-nodes-mp
    Cluster ID:                    <ID_of_cluster>
    Autoscaling:                   No
    Desired replicas:              2
    Current replicas:              2
    Instance type:                 m7i.xlarge
    Labels:                        app=db, tier=backend
    Tags:
    Taints:
    Availability zone:             us-east-2a
    Subnet:                        subnet-0df2ec3377847164f
    Disk size:                     300 GiB
    Version:                       4.16.6
    EC2 Metadata Http Tokens:      optional
    Autorepair:                    Yes
    Tuning configs:
    Kubelet configs:
    Additional security group IDs:
    Node drain grace period:
    Management upgrade:
     - Type:                       Replace
     - Max surge:                  1
     - Max unavailable:            0
    Message:
    ```
{%- endif %}
1.  Verify that the labels are included for your machine pool in the output.
{% endif %}
{% if openshift_dedicated %}
1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to add a label to.
1.  Select **Edit labels**.
1.  If you have existing labels in the machine pool that you want to remove, select **x** next to the label to delete it.
1.  Add a label using the format `<key>=<value>` and press enter. For example, add `app=db` and then press Enter. If the format is correct, the key value pair is then highlighted.
1.  Repeat the previous step if you want to add additional labels.
1.  Click **Save** to apply the labels to the machine pool.

**Verification**

1.  Under the **Machine pools** tab, select **>** next to your machine pool to expand the view.
1.  Verify that your labels are listed under **Labels** in the expanded view.
{% endif %}