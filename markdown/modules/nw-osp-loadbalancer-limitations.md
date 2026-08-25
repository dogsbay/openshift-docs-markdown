{%- set _mod_docs_content_type = "CONCEPT" %}
# Limitations of load balancer services {id="nw-osp-loadbalancer-limitations_{{ context }}"}

{{ product_title }} clusters on {{ rh_openstack_first }} use Octavia to handle load balancer services. As a result of this choice, such clusters might have functional limitations. {._abstract}

{{ product_title }} clusters on {{ rh_openstack_first }} use Octavia to handle load balancer services. As a result, your cluster has several functional limitations.

{{ rh_openstack }} Octavia has two supported providers: Amphora and OVN. These providers differ in available features and implementation details. These distinctions affect load balancer services that you create on your cluster.