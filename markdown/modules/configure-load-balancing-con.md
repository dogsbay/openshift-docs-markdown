{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure load balancing {id="configure-load-balancing-con_{{ context }}"}

External clients reach cluster services through a load balancer that provides a highly available IP address. Depending on your platform, you can provide that entry point with MetalLB on bare metal, the AWS Load Balancer Operator, or IP failover.