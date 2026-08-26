{%- set _mod_docs_content_type = "CONCEPT" %}
# Public {{ product_title }} on {{ GCP }} architecture model {id="osd-public-architecture-model-gcp_{{ context }}"}

With a public network configuration, your cluster API server endpoint and application routes are internet-facing. The default ingress controller can be public or private. The following image shows the network connectivity of a public cluster. {._abstract}

**Figure 1. {{ product_title }} on {{ GCP }} deployed on a public network**

![Architecture diagram showing a customer Google Cloud project with public and private network layers. The public network contains an External API load balancer and Default Ingress load balancer](/images/484_c_Openshift_osd_gcp_public_arch_0525.png)