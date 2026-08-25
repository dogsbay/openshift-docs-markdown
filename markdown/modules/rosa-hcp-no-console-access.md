{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting access to {{ hybrid_console }} {id="rosa-hcp-no-console-access_{{ context }}"}

In {{ product_title }} clusters, the {{ product_title }} OAuth server is hosted in the Red Hat service’s AWS account while the web console service is published by using the cluster’s default ingress controller in the cluster’s AWS account. If you can log in to your cluster by using the OpenShift CLI (oc) but cannot access the {{ product_title }} web console, verify the following criteria are met: {._abstract}

**Procedure**

*   Verify the console workloads are running.
*   Verify the default ingress controller’s load balancer is active.
*   Verify you are accessing the console from a machine that has network connectivity to the cluster’s VPC network.