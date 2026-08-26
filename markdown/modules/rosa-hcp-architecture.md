{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ product_title }} architecture {id="rosa-hcp-architecture_{{ context }}"}

{{ product_title }} hosts a highly-available, single-tenant OpenShift control plane. The hosted control plane is deployed across 3 availability zones with 2 API server instances and 3 etcd instances. {._abstract}

You can create a {{ product_title }} cluster with or without an internet-facing API server, with the latter considered a “private” cluster and the former considered a “public” cluster. Private API servers are only accessible from your VPC subnets. You access the hosted control plane through an AWS PrivateLink endpoint regardless of API privacy.

The worker nodes are deployed in your AWS account and run on your VPC private subnets. You can add additional private subnets from one or more availability zones to ensure high availability. Worker nodes are shared by OpenShift components and applications. OpenShift components such as the ingress controller, image registry, and monitoring are deployed on the worker nodes hosted on your VPC.

**Figure 1. {{ product_title }} architecture**

![{{ product_title }} architecture](/images/544_OpenShift_ROSA-HCP_architecture-model.png)

## {{ product_title }} architecture on public and private networks {id="rosa-hcp-network-architecture_{{ context }}"}
With {{ product_title }}, you can create your clusters on public or private networks. The following images depict the architecture of both public and private networks.

**Figure 2. {{ product_title }} deployed on a public network**

![{{ product_title }} deployed on a public network](/images/544_OpenShift_ROSA-HCP-and-ROSA-Classic-public.png)

**Figure 3. {{ product_title }} deployed on a private network**

![{{ product_title }} deployed on a private network](/images/544_OpenShift_ROSA-HCP-and-ROSA-Classic-private.png)