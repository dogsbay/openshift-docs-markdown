{%- set _mod_docs_content_type = "CONCEPT" %}
# Private {{ product_title }} on {{ GCP }} without Private Service Connect architecture model {id="osd-private-architecture-model_{{ context }}"}

With a private network configuration, your cluster API server endpoint and application routes are private. Private {{ product_title }} on {{ gcp_short }} clusters use some public subnets, but no control plane or worker nodes are deployed in public subnets. {._abstract}


:::important

Red Hat recommends using Private Service Connect (PSC) when deploying a private {{ product_title }} cluster on {{ GCP }}. PSC ensures there is a secured, private connectivity between Red Hat infrastructure, Site Reliability Engineering (SRE), and private OpenShift clusters.

:::


Red Hat SRE management access the cluster through a public load balancer endpoint that are restricted to Red Hat IPs. The API server endpoint is private. A separate Red Hat API server endpoint is public (but restricted to Red Hat trusted IP addresses). The default ingress controller can be public or private. The following image shows network connectivity of a private cluster without Private Service Connect (PSC).

**Figure 1. {{ product_title }} on {{ GCP }} deployed on a private network without PSC**

![Architecture diagram of a private OpenShift Dedicated cluster on Google Cloud without Private Service Connect. The diagram shows a customer Google Cloud project divided into public and private networks. In the public network: developers and Red Hat management access the cluster via the Internet](/_assets/images/484_b_Openshift_osd_gcp_private_no_psc_arch_0525.png)