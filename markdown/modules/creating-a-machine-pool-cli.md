{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a machine pool using the {{ rosa_cli }} {id="creating_machine_pools_cli_{{ context }}"}

You can create additional machine pools for your {{ product_title }} cluster by using the {{ rosa_cli_first }}. {._abstract}

{% if openshift_rosa_hcp %}

:::note

To add a pre-purchased Capacity Reservation to a machine pool, see [Creating a machine pool with Capacity Reservations](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cluster_administration/index#creating_machine_pools_cli_capres_rosa-managing-worker-nodes).

:::

{% endif %}

**Prerequisites**

*   You installed and configured the latest {{ rosa_cli }} on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.

**Procedure**

*   To add a machine pool that does not use autoscaling, create the machine pool and define the instance type, compute (also known as worker) node count, and node labels:
    ```terminal
    $ rosa create machinepool --cluster=<cluster-name> \
                              --name=<machine_pool_id> \
                              --replicas=<replica_count> \
                              --instance-type=<instance_type> \
                              --labels=<key>=<value>,<key>=<value> \
                              --taints=<key>=<value>:<effect>,<key>=<value>:<effect> \
{%- if openshift_rosa %}
                              --use-spot-instances \
                              --spot-max-price=<price> \
{%- endif %}
                              --disk-size=<disk_size> \
                              --availability-zone=<availability_zone_name> \
                              --additional-security-group-ids <sec_group_id> \
                              --subnet <subnet_id>
    ```

    where:


    `--name=<machine_pool_id>`
    :   Specifies the name of the machine pool.

    `--replicas=<replica_count>`
    :   Specifies the number of compute nodes to provision. If you deployed {{ product_title }} using a single availability zone, this defines the number of compute nodes to provision to the machine pool for the zone. If you deployed your cluster using multiple availability zones, this defines the number of compute nodes to provision in total across all zones and the count must be a multiple of 3. The `--replicas` argument is required when autoscaling is not configured.

    `--instance-type=<instance_type>`
    :   Optional: Sets the instance type for the compute nodes in your machine pool. The instance type defines the vCPU and memory allocation for each compute node in the pool. Replace `<instance_type>` with an instance type. The default is `m7i.xlarge`. You cannot change the instance type for a machine pool after the pool is created.

    `--labels=<key>=<value>,<key>=<value>`
    :   Optional: Defines the labels for the machine pool. Replace `<key>=<value>,<key>=<value>` with a comma-delimited list of key-value pairs, for example `--labels=key1=value1,key2=value2`.

    `--taints=<key>=<value>:<effect>,<key>=<value>:<effect>`
    :   Optional: Defines the taints for the machine pool. Replace `<key>=<value>:<effect>,<key>=<value>:<effect>` with a key, value, and effect for each taint, for example `--taints=key1=value1:NoSchedule,key2=value2:NoExecute`. Available effects include `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
{%- if openshift_rosa %}

    `--use-spot-instances`
    :   Optional: Configures your machine pool to deploy machines as non-guaranteed AWS Spot Instances. For information, see [Amazon EC2 Spot Instances](https://aws.amazon.com/ec2/spot/) in the AWS documentation. If you select **Use Amazon EC2 Spot Instances** for a machine pool, you cannot disable the option after the machine pool is created.

    `--spot-max-price=<price>`
    :   Optional: If you choose to use Spot Instances, you can specify this argument to define a maximum hourly price for a Spot Instance. If this argument is not specified, the on-demand price is used.

        :::important


        Your Amazon EC2 Spot Instances might be interrupted at any time. Use Amazon EC2 Spot Instances only for workloads that can tolerate interruptions.
        
        :::

{%- endif %}

    `--disk-size=<disk_size>`
    :   Optional: Specifies the worker node disk size. The value can be in GB, GiB, TB, or TiB. Replace `<disk_size>` with a numeric value and unit, for example `--disk-size=200GiB`.

    `--availability-zone=<availability_zone_name>`
{%- if openshift_rosa_hcp %}
    :   Optional: You can create a machine pool in an availability zone of your choice. Replace `<availability_zone_name>` with an availability zone name.
{% endif %}
{% if openshift_rosa %}
        Optional: For Multi-AZ clusters, you can create a machine pool in a Single-AZ of your choice. Replace `<availability_zone_name>` with a Single-AZ name.

        :::note


        Multi-AZ clusters retain a Multi-AZ control plane and can have worker machine pools across a Single-AZ or Multi-AZ. Machine pools distribute machines (nodes) evenly across availability zones.
        
        :::


        :::warning


        If you choose a worker machine pool with a Single-AZ, there is no fault tolerance for that machine pool, regardless of machine replica count.
        For fault-tolerant worker machine pools, choosing a Multi-AZ machine pool distributes machines in multiples of 3 across availability zones.

        *   A Multi-AZ machine pool with three availability zones can have a machine count in multiples of 3 only, such as 3, 6, 9, and so on.
        *   A Single-AZ machine pool with one availability zone can have a machine count in multiples of 1, such as 1, 2, 3, 4, and so on.
        
        :::

{%- endif %}

    `--additional-security-group-ids <sec_group_id>`
    :   Optional: For machine pools in clusters that do not have Red&#160;Hat managed VPCs, you can select additional custom security groups to use in your machine pools. You must have already created the security groups and associated them with the VPC that you selected for this cluster. You cannot add or edit security groups after you create the machine pool.
{%- if openshift_rosa %}
        For more information, see the requirements for security groups in the "Additional resources" section.
{% endif %}
{% if openshift_rosa_hcp %}

        :::important


        You can use up to ten additional security groups for machine pools on {{ product_title }} clusters.
        
        :::

{%- endif %}

    `--subnet <subnet_id>`
    :   Optional: For BYO VPC clusters, you can select a subnet to create a Single-AZ machine pool. If the subnet is out of your cluster creation subnets, there must be a tag with a key `kubernetes.io/cluster/<infra-id>` and value `shared`. Customers can obtain the Infra ID by using the following command:
        ```terminal
        $ rosa describe cluster -c <cluster name>|grep "Infra ID:"
        ```
        ```terminal title="Example output"
        Infra ID:                   mycluster-xqvj7
        ```

        :::note


        You cannot set both `--subnet` and `--availability-zone` at the same time, only 1 is allowed for a Single-AZ machine pool creation.
        
        :::


    The following example creates a machine pool called `mymachinepool` that uses the `m7i.xlarge` instance type and has 2 compute node replicas. The example also adds 2 workload-specific labels:
    ```terminal
    $ rosa create machinepool --cluster=mycluster --name=mymachinepool --replicas=2 --instance-type=m7i.xlarge --labels=app=db,tier=backend
    ```
    ```terminal title="Example output"
    I: Machine pool 'mymachinepool' created successfully on cluster 'mycluster'
    I: To view all machine pools, run 'rosa list machinepools -c mycluster'
    ```
*   To add a machine pool that uses autoscaling, create the machine pool and define the autoscaling configuration, instance type and node labels:
    ```terminal
    $ rosa create machinepool --cluster=<cluster-name> \
                              --name=<machine_pool_id> \
                              --enable-autoscaling \
                              --min-replicas=<minimum_replica_count> \
                              --max-replicas=<maximum_replica_count> \
                              --instance-type=<instance_type> \
                              --labels=<key>=<value>,<key>=<value> \
                              --taints=<key>=<value>:<effect>,<key>=<value>:<effect> \
{%- if openshift_rosa_hcp %}
                              --availability-zone=<availability_zone_name>
{% endif %}
{% if not openshift_rosa_hcp %}
                              --availability-zone=<availability_zone_name> \
                              --use-spot-instances \
                              --spot-max-price=<price>
{%- endif %}
    ```

    where:


    `--name=<machine_pool_id>`
    :   Specifies the name of the machine pool. Replace `<machine_pool_id>` with the name of your machine pool.

    `--enable-autoscaling`
    :   Enables autoscaling in the machine pool to meet the deployment needs.

    `--min-replicas=<minimum_replica_count>` and `--max-replicas=<maximum_replica_count>`
    :   Defines the minimum and maximum compute node limits. The cluster autoscaler does not reduce or increase the machine pool node count beyond the limits that you specify.
{%- if not openshift_rosa_hcp %}

        If you deployed {{ product_title }} using a single availability zone, the `--min-replicas` and `--max-replicas` arguments define the autoscaling limits in the machine pool for the zone. If you deployed your cluster using multiple availability zones, the arguments define the autoscaling limits in total across all zones and the counts must be multiples of 3.
{% endif %}
{% if openshift_rosa_hcp %}

        The `--min-replicas` and `--max-replicas` arguments define the autoscaling limits in the machine pool for the availability zone.
{%- endif %}

    `--instance-type=<instance_type>`
    :   Optional: Sets the instance type for the compute nodes in your machine pool. The instance type defines the vCPU and memory allocation for each compute node in the pool. Replace `<instance_type>` with an instance type. The default is `m7i.xlarge`. You cannot change the instance type for a machine pool after the pool is created.

    `--labels=<key>=<value>,<key>=<value>`
    :   Optional: Defines the labels for the machine pool. Replace `<key>=<value>,<key>=<value>` with a comma-delimited list of key-value pairs, for example `--labels=key1=value1,key2=value2`.

    `--taints=<key>=<value>:<effect>,<key>=<value>:<effect>`
    :   Optional: Defines the taints for the machine pool. Replace `<key>=<value>:<effect>,<key>=<value>:<effect>` with a key, value, and effect for each taint, for example `--taints=key1=value1:NoSchedule,key2=value2:NoExecute`. Available effects include `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.

    `--availability-zone=<availability_zone_name>`
{%- if openshift_rosa %}
    :   Optional: For Multi-AZ clusters, you can create a machine pool in a Single-AZ of your choice. Replace `<availability_zone_name>` with a Single-AZ name.
{% endif %}
{% if openshift_rosa_hcp %}
        Optional: You can create a machine pool in an availability zone of your choice. Replace `<availability_zone_name>` with an availability zone name.
{% endif %}
{% if openshift_rosa %}

    `--use-spot-instances`
    :   Optional: Configures your machine pool to deploy machines as non-guaranteed AWS Spot Instances. For information, see [Amazon EC2 Spot Instances](https://aws.amazon.com/ec2/spot/) in the AWS documentation. If you select **Use Amazon EC2 Spot Instances** for a machine pool, you cannot disable the option after the machine pool is created.

        :::important


        Your Amazon EC2 Spot Instances might be interrupted at any time. Use Amazon EC2 Spot Instances only for workloads that can tolerate interruptions.
        
        :::


    `--spot-max-price=<price>`
    :   Optional: If you choose to use Spot Instances, you can specify this argument to define a maximum hourly price for a Spot Instance. If this argument is not specified, the on-demand price is used.
{%- endif %}

    The following example creates a machine pool called `mymachinepool` that uses the `m7i.xlarge` instance type and has autoscaling enabled. The minimum compute node limit is 3 and the maximum is 6 overall. The example also adds 2 workload-specific labels:
    ```terminal
    $ rosa create machinepool --cluster=mycluster --name=mymachinepool --enable-autoscaling --min-replicas=3 --max-replicas=6 --instance-type=m7i.xlarge --labels=app=db,tier=backend
    ```
    ```terminal title="Example output"
{%- if not openshift_rosa_hcp %}
    I: Machine pool 'mymachinepool' created successfully on cluster 'mycluster'
{% endif %}
{% if openshift_rosa_hcp %}
    I: Machine pool 'mymachinepool' created successfully on hosted cluster 'mycluster'
{%- endif %}
    I: To view all machine pools, run 'rosa list machinepools -c mycluster'
    ```

**Verification**

You can list all machine pools on your cluster or describe individual machine pools.

1.  List the available machine pools on your cluster:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```
{%- if not openshift_rosa_hcp %}
    ```terminal title="Example output"
    ID             AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS                  TAINTS    AVAILABILITY ZONES                    SPOT INSTANCES
    Default        No           3         m7i.xlarge                                        us-east-1a, us-east-1b, us-east-1c    N/A
    mymachinepool  Yes          3-6       m7i.xlarge      app=db, tier=backend              us-east-1a, us-east-1b, us-east-1c    No
    ```
{% endif %}
{% if openshift_rosa_hcp %}
    ```terminal title="Example output"
    ID             AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS                  TAINTS    AVAILABILITY ZONE  SUBNET                    VERSION  AUTOREPAIR
    Default        No           1/1       m7i.xlarge                                       us-east-2c         subnet-00552ad67728a6ba3  4.14.34  Yes
    mymachinepool  Yes          3/3-6     m7i.xlarge      app=db, tier=backend              us-east-2a         subnet-0cb56f5f41880c413  4.14.34  Yes
    ```
{% endif %}
1.  Describe the information of a specific machine pool in your cluster:
    ```terminal
    $ rosa describe machinepool --cluster=<cluster_name> --machinepool=mymachinepool
    ```
{%- if not openshift_rosa_hcp %}
    ```terminal title="Example output"
    ID:                         mymachinepool
    Cluster ID:                 27iimopsg1mge0m81l0sqivkne2qu6dr
    Autoscaling:                Yes
    Replicas:                   3-6
    Instance type:              m7i.xlarge
    Image type:                 Windows
    Labels:                     app=db, tier=backend
    Taints:
    Availability zones:         us-east-1a, us-east-1b, us-east-1c
    Subnets:
    Spot instances:             No
    Disk size:                  300 GiB
    Security Group IDs:
    ```
{% endif %}
{% if openshift_rosa_hcp %}
    ```terminal title="Example output"
    ID:                         mymachinepool
    Cluster ID:                 2d6010rjvg17anri30v84vspf7c7kr6v
    Autoscaling:                Yes
    Desired replicas:           3-6
    Current replicas:           3
    Instance type:              m7i.xlarge
    Labels:                     app=db, tier=backend
    Taints:
    Availability zone:          us-east-2a
    Subnet:                     subnet-0cb56f5f41880c413
    Version:                    4.14.34
    Autorepair:                 Yes
    Tuning configs:
    Additional security group IDs:
    Node drain grace period:
    Message:
    ```
{% endif %}
1.  Verify that the machine pool is included in the output and the configuration is as expected.