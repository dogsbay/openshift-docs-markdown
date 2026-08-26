{%- set _mod_docs_content_type = "CONCEPT" %}
# Private {{ product_title }} on {{ GCP }} with Private Service Connect architecture model {id="osd-private-psc-architecture-model-gcp_{{ context }}"}

With a private {{ gcp_short }} Private Service Connect (PSC) network configuration, your cluster API server endpoint and application routes are private. Public subnets or NAT gateways are not required in your VPC for egress.
Red Hat SRE management access the cluster over the {{ gcp_short }} PSC-enabled private connectivity. The default ingress controller are private. Additional ingress controllers can be public or private. The following diagram shows network connectivity of a private cluster with PSC. {._abstract}

**Figure 1. {{ product_title }} on {{ GCP }} deployed on a private network with PSC**

![Architecture diagram showing Developer and Red Hat Management connecting through Google Cloud Private Service Connect to a customer Google Cloud project private network. The network contains an Internal API load balancer and Default Ingress load balancer routing traffic to three node groups distributed across availability zones: Control plane nodes (x3) running apiserver](/images/484_a_OpenShift_osd_gcp_private_psc_arch_0525.png)