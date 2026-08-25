{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for installing a cluster on {{ ibm_cloud_name }} in a disconnected environment {id="prereqs-ibm-cloud-restricted_{{ context }}"}

Before installing an {{ product_title }} cluster on {{ ibm_cloud_name }} in a disconnected environment, ensure that you have configured your {{ ibm_cloud_name }} account, a mirror registry, an existing VPC with access to the mirror registry, and the `ccoctl` utility. {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You configured an {{ ibm_cloud_name }} account to host the cluster.
*   You have a container image registry that is accessible to the internet and your restricted network. The container image registry should mirror the contents of the {{ product_registry }} and contain the installation media.
*   You have an existing Virtual Private Cloud (VPC) on {{ ibm_cloud_name }} that meets the following requirements:
    *   The VPC contains the mirror registry or has firewall rules or a peering connection to access the mirror registry that is hosted elsewhere.
    *   The VPC can access {{ ibm_cloud_name }} service endpoints using a public endpoint. If network restrictions limit access to public service endpoints, evaluate those services for alternate endpoints that might be available.

        You cannot use the VPC that the installation program provisions by default.
*   If you plan on configuring endpoint gateways to use {{ ibm_cloud_name }} Virtual Private Endpoints, consider the following requirements:
    *   Endpoint gateway support is currently limited to the `us-east` and `us-south` regions.
    *   The VPC must allow traffic to and from the endpoint gateways. You can use the VPC’s default security group, or a new security group, to allow traffic on port 443.
*   You configured the `ccoctl` utility before you installed the cluster.