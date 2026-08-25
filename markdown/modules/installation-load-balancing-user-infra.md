{% if context == "installing-openstack-installer-custom" %}
{%- set user_managed_lb = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Load balancing requirements for user-provisioned infrastructure {id="installation-load-balancing-user-infra_{{ context }}"}

{% if not user_managed_lb %}
Before you install {{ product_title }}, you must provision the API and application Ingress load balancing infrastructure. In production scenarios, you can deploy the API and application Ingress load balancers separately so that you can scale the load balancer infrastructure for each in isolation. {._abstract}
{% endif %}

{% if user_managed_lb %}
Before you install {{ product_title }}, you can provision your own API and application ingress load balancing infrastructure to use in place of the default, internal load balancing solution. In production scenarios, you can deploy the API and application Ingress load balancers separately so that you can scale the load balancer infrastructure for each in isolation.
{% endif %}


:::note

If you want to deploy the API and application Ingress load balancers with a {{ op_system_base_full }} instance, you must purchase the {{ op_system_base }} subscription separately.

:::


The load balancing infrastructure must meet the following requirements:

*   API load balancer: Provides a common endpoint for users, both human and machine, to interact with and configure the platform. Configure the following conditions:
    *   Layer 4 load balancing only. This can be referred to as Raw TCP or SSL Passthrough mode.
    *   A stateless load balancing algorithm. The options vary based on the load balancer implementation.


    :::important

    Do not configure session persistence for an API load balancer. Configuring session persistence for a Kubernetes API server might cause performance issues from excess application traffic for your {{ product_title }} cluster and the Kubernetes API that runs inside the cluster.
    
    :::


Configure the following ports on both the front and back of the API load balancers:

| Port | Back-end machines (pool members) | Internal | External | Description |
| --- | --- | :-: | :-: | --- |
| `6443` | Bootstrap and control plane. You remove the bootstrap machine from the load balancer after the bootstrap machine initializes the cluster control plane. You must configure the `/readyz` endpoint for the API server health check probe. | X | X | Kubernetes API server |
| `22623` | Bootstrap and control plane. You remove the bootstrap machine from the load balancer after the bootstrap machine initializes the cluster control plane. | X |  | Machine config server |


:::note

The load balancer must be configured to take a maximum of 30 seconds from the
time the API server turns off the `/readyz` endpoint to the removal of the API
server instance from the pool. Within the time frame after `/readyz` returns an
error or becomes healthy, the endpoint must have been removed or added. Probing
every 5 or 10 seconds, with two successful requests to become healthy and three
to become unhealthy, are well-tested values.

:::


*   Application Ingress load balancer: Provides an ingress point for application traffic flowing in from outside the cluster. A working configuration for the Ingress router is required for an {{ product_title }} cluster. Configure the following conditions:
    *   Layer 4 load balancing only. This can be referred to as Raw TCP or SSL Passthrough mode.
    *   A connection-based or session-based persistence is recommended, based on the options available and types of applications that will be hosted on the platform.


    :::tip

    If the true IP address of the client can be seen by the application Ingress load balancer, enabling source IP-based session persistence can improve performance for applications that use end-to-end TLS encryption.
    
    :::


Configure the following ports on both the front and back of the load balancers:

**Application Ingress load balancer**

| Port | Back-end machines (pool members) | Internal | External | Description |
| --- | --- | :-: | :-: | --- |
| `443` | The machines that run the Ingress Controller pods, compute, or worker, by default. | X | X | HTTPS traffic |
| `80` | The machines that run the Ingress Controller pods, compute, or worker, by default. | X | X | HTTP traffic |


:::note

If you are deploying a three-node cluster with zero compute nodes, the Ingress Controller pods run on the control plane nodes. In three-node cluster deployments, you must configure your application Ingress load balancer to route HTTP and HTTPS traffic to the control plane nodes.

:::


{% if context == "installing-openstack-installer-custom" %}
{%- set user_managed_lb = "" -%}
{% endif %}