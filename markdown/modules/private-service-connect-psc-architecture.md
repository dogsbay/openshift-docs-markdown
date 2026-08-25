{%- set _mod_docs_content_type = "CONCEPT" %}
# Private Service Connect architecture {id="psc-architecture_{{ context }}"}

The Private Service Connect (PSC) architecture includes producer services and consumer services. Using PSC, the consumers can access producer services privately from inside their VPC network. Similarly, it allows producers to host services in their own separate VPC networks and offer a private connect to their consumers. {._abstract}

The following image depicts how Red HAT SREs and other internal resources access and support clusters created using PSC.

*   A unique PSC service attachment is created for each {{ product_title }} cluster in the customer {{ gcp_short }} project. The PSC service attachment points to the cluster API server load balancer created in the customer {{ gcp_short }} project.
*   Similar to service attachments, a unique PSC endpoint is created in the Red Hat Management {{ gcp_short }} project for each {{ product_title }} cluster.
*   A dedicated subnet for {{ gcp_short }} Private Service Connect is created in the cluster’s network within the customer {{ gcp_short }} project. This is a special subnet type where the producer services are published via PSC service attachments. This subnet is used to Source NAT (SNAT) incoming requests to the cluster API server. Additionally, the PSC subnet must be within the Machine CIDR range and cannot be used in more than one service attachment.
*   Red Hat internal resources and SREs access private {{ product_title }} clusters using the connectivity between a PSC endpoint and service attachment. Even though the traffic transits multiple VPC networks, it remains entirely within {{ gcp_full }}.
*   Access to PSC service attachments is possible only via the Red Hat Management project.

**Figure 1. PSC architecture overview**

![Diagram showing a customer Google Cloud project with a PSC service attachment connected to a cluster API server load balancer](/_assets/images/psc_arch_2.png)