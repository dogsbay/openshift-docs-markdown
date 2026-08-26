{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring machine pools in Local Zones {id="rosa-nodes-machine-pools-local-zones_{{ context }}"}

Use the following steps to configure machine pools in Local Zones. {._abstract}


:::important

AWS Local Zones are supported on {{ product_title }} 4.12. See the [Red&#160;Hat Knowledgebase article](https://access.redhat.com/articles/6989889) for information on how to enable Local Zones.

:::


**Prerequisites**

*   {{ product_title }} is generally available in the parent region of choice. See the [AWS generally available locations list](https://aws.amazon.com/about-aws/global-infrastructure/localzones/locations/?pg=ln&cp=bn#GA) to determine the Local Zone available to specific AWS regions.
*   The {{ product_title }} cluster was initially built in an existing Amazon VPC (BYO-VPC).
*   The maximum transmission unit (MTU) for the {{ product_title }} cluster is set at 1200.

    :::important

    Generally, the Maximum Transmission Unit (MTU) between an Amazon EC2 instance in a Local Zone and an Amazon EC2 instance in the Region is 1300. See [How Local Zones work](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html) in the AWS documentation.
    The cluster network MTU must always be less than the EC2 MTU to account for the overhead. The specific overhead is determined by your network plugin, for example:
    - OVN-Kubernetes: `100 bytes`
    - OpenShift SDN: `50 bytes`

    The network plugin could provide additional features that may also decrease the MTU. Check the documentation for additional information.

    
    :::

*   The AWS account has [Local Zones enabled](https://docs.aws.amazon.com/local-zones/latest/ug/getting-started.html#getting-started-find-local-zone).
*   The AWS account has a [Local Zone subnet](https://docs.aws.amazon.com/local-zones/latest/ug/getting-started.html#getting-started-create-local-zone-subnet) for the same VPC as the cluster.
*   The AWS account has a subnet that is associated with a routing table that has a route to a NAT gateway.
*   The AWS account has the tag `kubernetes.io/cluster/&lt;infra_id>: shared' on the associated subnet.

**Procedure**

1.  Create a machine pool on the cluster by running the following ROSA CLI (`rosa`) command.
    ```terminal
    $ rosa create machinepool -c <cluster-name> -i
    ```
1.  Add the subnet and instance type for the machine pool in the ROSA CLI. After several minutes, the cluster will provision the nodes.
    ```terminal
    I: Enabling interactive mode
    ? Machine pool name: xx-lz-xx
    ? Create multi-AZ machine pool: No
    ? Select subnet for a single AZ machine pool (optional): Yes
    ? Subnet ID: subnet-<a> (region-info)
    ? Enable autoscaling (optional): No
    ? Replicas: 2
    I: Fetching instance types
    ? disk-size (optional):
    ```

where:


`Machine pool name`
:   Specifies the name of the machine pool. This is limited to alphanumeric characters and a maximum length of 30 characters.

`Create multi-AZ machine pool`
:   Set this option to `No`.

`Select subnet for a single AZ machine pool`
:   Set this option to `Yes`.

`Subnet ID`
:   Specifies a subnet ID from the list.

`Enable autoscaling`
:   Select `Yes` to enable autoscaling or `No` to disable autoscaling.

`Replicas`
:   Specifies the number of machines for the machine pool. This number can be anywhere from 1 to 180.

`disk-size`
:   Optional: Specifies the worker node disk size. The value can be in GB, GiB, TB, or TiB. Set a numeric value and unit, for example `200GiB`. You cannot separate the digit and the unit. No spaces are allowed.

1.  Provide the subnet ID to provision the machine pool in the Local Zone.