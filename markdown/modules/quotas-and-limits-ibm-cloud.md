{%- set _mod_docs_content_type = "CONCEPT" %}
# Quotas and limits on {{ ibm_cloud_title }} {id="quotas-and-limits-ibm-cloud_{{ context }}"}

Default {{ ibm_cloud_name }} quotas and limits affect {{ product_title }} cluster installations. You might need to request additional {{ ibm_cloud_name }} resources if you use certain cluster configurations, deploy your cluster in certain regions, or run multiple clusters. {._abstract}

For a comprehensive list of the default {{ ibm_cloud_name }} quotas and service limits, see the {{ ibm_cloud_name }} documentation for "Quotas and service limits".

## Virtual Private Cloud {id="_virtual_private_cloud"}

Each {{ product_title }} cluster creates its own VPC. The default quota of VPCs per region is 10 and allows 10 clusters. To have more than 10 clusters in a single region, you must increase this quota.

## Application load balancer {id="_application_load_balancer"}

By default, each cluster creates three application load balancers (ALBs):

*   Internal load balancer for the control plane API server
*   External load balancer for the control plane API server
*   Load balancer for the router

You can create additional `LoadBalancer` service objects to create additional ALBs. The default quota of VPC ALBs is 50 per region. To have more than 50 ALBs, you must increase this quota.

VPC ALBs are supported. Classic ALBs are not supported for {{ ibm_cloud_name }}.

## Floating IP addresses {id="_floating_ip_addresses"}

By default, the installation program distributes control plane and compute machines across all availability zones within a region to provision the cluster in a highly available configuration. In each availability zone, the installation program creates a public gateway that requires a separate floating IP address.

The default quota for a floating IP address is 20 addresses per availability zone. The default cluster configuration yields three floating IP addresses:

*   Two floating IP addresses in the `us-east-1` primary zone. The IP address associated with the bootstrap node is deleted after installation.
*   One floating IP address in the `us-east-2` secondary zone.
*   One floating IP address in the `us-east-3` secondary zone.

{{ ibm_cloud_name }} can support up to 19 clusters per region in an account. If you plan to have more than 19 default clusters, you must increase this quota.

## Virtual Server Instances (VSIs) {id="_virtual_server_instances_vsis"}

By default, a cluster creates VSIs by using `bx2-4x16` profiles, which include the following resources by default:

*   4 vCPUs
*   16 GB RAM

The following nodes are created:

*   One `bx2-4x16` bootstrap machine, which is deleted after the installation is complete
*   Three `bx2-4x16` control plane nodes
*   Three `bx2-4x16` compute nodes

For more information, see the {{ ibm_cloud_name }} documentation on "supported profiles".

**VSI component quotas and limits**

| VSI component | Default {{ ibm_cloud_name }} quota | Default cluster configuration | Maximum number of clusters |
| --- | --- | --- | --- |
| vCPU | 200 vCPUs per region | 28 vCPUs, or 24 vCPUs after bootstrap removal | 8 per region |
| RAM | 1600 GB per region | 112 GB, or 96 GB after bootstrap removal | 16 per region |
| Storage | 18 TB per region | 1050 GB, or 900 GB after bootstrap removal | 19 per region |

If you plan to exceed the resources stated in the table, you must increase your {{ ibm_cloud_name }} account quota.

## Block storage volumes {id="_block_storage_volumes"}

For each VPC machine, a block storage device is attached for its boot volume. The default cluster configuration creates seven VPC machines, resulting in seven block storage volumes. Additional Kubernetes persistent volume claims (PVCs) of the {{ ibm_cloud_name }} storage class create additional block storage volumes. The default quota of VPC block storage volumes is 300 per region. To have more than 300 volumes, you must increase this quota.

**Additional resources**
{._additional-resources}

*   [Quotas and service limits ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/vpc?topic=vpc-quotas)
*   [Supported profiles ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/vpc?topic=vpc-profiles)