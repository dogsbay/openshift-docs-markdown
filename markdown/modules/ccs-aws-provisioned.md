{%- set _mod_docs_content_type = "REFERENCE" %}
# Provisioned AWS Infrastructure {id="ccs-aws-provisioned_{{ context }}"}

This is an overview of the provisioned Amazon Web Services (AWS) components on a deployed {{ product_title }} cluster. For a more detailed listing of all provisioned AWS components, see the [{{ OCP }} documentation](https://access.redhat.com/documentation/en-us/openshift_container_platform/). {._abstract}

## AWS Elastic Computing (EC2) instances {id="aws-policy-ec2_{{ context }}"}

AWS EC2 instances are required to deploy the control plane and data plane functions of {{ product_title }} in the AWS public cloud. Instance types might vary for control plane and infrastructure nodes depending on worker node count.

*   Single availability zone
    *   3 m5.2xlarge minimum (control plane nodes)
    *   2 r5.xlarge minimum (infrastructure nodes)
    *   2 m5.xlarge minimum but highly variable (worker nodes)
*   Multiple availability zones
    *   3 m5.2xlarge minimum (control plane nodes)
    *   3 r5.xlarge minimum (infrastructure nodes)
    *   3 m5.xlarge minimum but highly variable (worker nodes)

## AWS Elastic Block Store (EBS) storage {id="aws-policy-ebs-storage_{{ context }}"}

Amazon EBS block storage is used for both local node storage and persistent volume storage.

Volume requirements for each EC2 instance:

*   Control plane volumes
    *   Size: 350 GB
    *   Type: io1
    *   Input/output operations per second: 1000
*   Infrastructure volumes
    *   Size: 300 GB
    *   Type: gp2
    *   Input/output operations per second: 900
*   Worker volumes
    *   Size: 300 GB
    *   Type: gp2
    *   Input/output operations per second: 900

## Elastic Load Balancing (ELB) load balancers {id="aws-policy-elastic-load-balancers_{{ context }}"}

Up to two Network Load Balancers for API and up to two Classic Load Balancers for application router. For more information, see the [ELB documentation for AWS](https://aws.amazon.com/elasticloadbalancing/features/#Details_for_Elastic_Load_Balancing_Products).

## S3 storage {id="aws-policy-s3-storage_{{ context }}"}
The image registry and Elastic Block Store (EBS) volume snapshots are backed by AWS S3 storage. Pruning of resources is performed regularly to optimize S3 usage and cluster performance.


:::note

Two buckets are required with a typical size of 2 TB each.

:::


## VPC {id="aws-policy-vpc_{{ context }}"}
Customers should expect to see one VPC per cluster. Additionally, the VPC needs the following configurations:

{% include "./snippets/snip_install-cluster-in-vpc.md" %}

*   **Subnets**: Two subnets for a cluster with a single availability zone, or six subnets for a cluster with multiple availability zones.

    :::note

    A **public subnet** connects directly to the internet through an internet gateway. A **private subnet** connects to the internet through a network address translation (NAT) gateway.
    
    :::

*   **Route tables**: One route table per private subnet, and one additional table per cluster.
*   **Internet gateways**: One Internet Gateway per cluster.
*   **NAT gateways**: One NAT Gateway per public subnet.

## Sample VPC Architecture {id="_sample_vpc_architecture"}

![VPC Reference Architecture](/images/VPC-Diagram.png)

## Security groups {id="aws-policy-security-groups_{{ context }}"}

AWS security groups provide security at the protocol and port-access level; they are associated with EC2 instances and Elastic Load Balancing. Each security group contains a set of rules that filter traffic coming in and out of an EC2 instance. You must ensure the ports required for the [{{ OCP }} installation](https://docs.openshift.com/container-platform/4.7/installing/installing_aws/installing-aws-user-infra.html#installation-aws-user-infra-other-infrastructure_installing-aws-user-infra) are open on your network and configured to allow access between hosts.

## Additional custom security groups {id="osd-security-groups-custom_{{ context }}"}
When you create a cluster by using a non-managed VPC, you can add custom security groups during cluster creation. Custom security groups are subject to the following limitations:

*   You must create the custom security groups in AWS before you create the cluster. For more information, see [Amazon EC2 security groups for Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html).
*   You must associate the custom security groups with the VPC that the cluster will be installed into. Your custom security groups cannot be associated with another VPC.
*   You might need to request additional quota for your VPC if you are adding additional custom security groups. For information on requesting an AWS quota increase, see [Requesting a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html).