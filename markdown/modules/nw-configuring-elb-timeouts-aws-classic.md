{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring Classic Load Balancer timeouts on AWS {id="nw-configuring-elb-timeouts-aws-classic_{{ context }}"}

To prevent connection drops for long-running processes in {{ product_title }}, configure custom timeout periods for specific routes or Ingress Controllers.  {._abstract}

Ensure these settings account for the {{ aws_full }} Classic Load Balancer (CLB) default timeout of 60 seconds to maintain stable network traffic.

If the timeout period of the CLB is shorter than the route timeout or Ingress Controller timeout, the load balancer can prematurely terminate the connection. You can prevent this problem by increasing both the timeout period of the route and CLB.