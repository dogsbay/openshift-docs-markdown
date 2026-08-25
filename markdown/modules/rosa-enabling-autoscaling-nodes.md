{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling autoscaling nodes in an existing cluster using the ROSA CLI {id="rosa-enabling-autoscaling-nodes_{{ context }}"}

Configure autoscaling to dynamically scale the number of worker nodes up or down based on load.

Successful autoscaling is dependent on having the correct AWS resource quotas in your AWS account. Verify resource quotas and request quota increases from the [AWS console](https://aws.amazon.com/console/).

**Procedure**

1.  To identify the machine pool IDs in a cluster, enter the following command:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```

    **Example output**

{%- if not openshift_rosa_hcp %}
    ```terminal
    ID      AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONES    SUBNETS    SPOT INSTANCES  DISK SIZE  SG IDs
    worker  No           2         m7i.xlarge                          us-east-2a                       No              300 GiB
    mp1     No           2         m7i.xlarge                          us-east-2a                       No              300 GiB  
    ```
{%- endif %}
{%- if openshift_rosa_hcp %}
    ```terminal
    ID       AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    VERSION  AUTOREPAIR  
    workers  No           2/2       m7i.xlarge                          us-east-2a         subnet-03c2998b482bf3b20  4.16.6   Yes
    mp1      No           2/2       m7i.xlarge                          us-east-2a         subnet-03c2998b482bf3b20  4.16.6   Yes
    ```
{%- endif %}
1.  Get the ID of the machine pools that you want to configure.
1.  To enable autoscaling on a machine pool, enter the following command:
    ```terminal
    $ rosa edit machinepool --cluster=<cluster_name> <machinepool_ID> --enable-autoscaling --min-replicas=<number> --max-replicas=<number>
    ```

    **Example**

    Enable autoscaling on a machine pool with the ID `mp1` on a cluster named `mycluster`, with the number of replicas set to scale between 2 and 5 worker nodes:
    ```terminal
    $ rosa edit machinepool --cluster=mycluster mp1 --enable-autoscaling --min-replicas=2 --max-replicas=5
    ```