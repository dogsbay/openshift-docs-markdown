{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ product_title }} {id="rosa-classic-architecture_{{ context }}"}

In {{ product_title }}, both the control plane and the worker nodes are deployed in your VPC subnets.

## {{ product_title }} on public and private networks {id="rosa-classic-architecture-networks_{{ context }}"}

With {{ product_title }}, you can create clusters that are accessible over public or private networks.

You can customize access patterns for your API server endpoint and Red&#160;Hat SRE management in the following ways:

*   Public - API server endpoint and application routes are internet-facing.
*   Private - API server endpoint and application routes are private. Private {{ product_title }} clusters use some public subnets, but no control plane or worker nodes are deployed in public subnets.
*   Private with AWS PrivateLink - API server endpoint and application routes are private. Public subnets or NAT gateways are not required in your VPC for egress. {{ product_title }} SRE management uses AWS PrivateLink.

The following image depicts the architecture of a {{ product_title }} cluster deployed on both public and private networks.

**Figure 1. {{ product_title }} deployed on public and private networks**

![{{ product_title }} on public and private networks](/images/156_OpenShift_ROSA_Arch_0621_private_public_classic.png)

{{ product_title }} clusters include infrastructure nodes where OpenShift components such as the ingress controller, image registry, and monitoring are deployed. The infrastructure nodes and the OpenShift components deployed on them are managed by {{ product_title }} SREs.

The following types of clusters are available with {{ product_title }}:

*   Single zone cluster - The control plane and worker nodes are hosted on a single availability zone.
*   Multi-zone cluster - The control plane is hosted on three availability zones with an option to run worker nodes on one or three availability zones.