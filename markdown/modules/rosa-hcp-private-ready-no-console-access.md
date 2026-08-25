{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying access to {{ hybrid_console }} for private {{ product_title }} clusters {id="rosa-hcp-private-ready-no-console-access_{{ context }}"}

The console of the private cluster is private by default. During cluster installation, the default Ingress Controller managed by OpenShift’s Ingress Operator is configured with an internal AWS Network Load Balancer (NLB). {._abstract}

**Procedure**

*   If your private {{ product_title }} cluster shows a `ready` status but you cannot access the {{ product_title }} web console for the cluster, try accessing the cluster console from either within the cluster VPC or from a network that is connected to the VPC.