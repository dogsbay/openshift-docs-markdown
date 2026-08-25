{%- set _mod_docs_content_type = "REFERENCE" %}
# Cloud provider annotations for internal load balancers {id="internal-lb-annotations-reference_{{ context }}"}

To provision an internal load balancer for clusters deployed in private environments, you must add specific annotations to the `spec.infrastructure.annotations` field of your `Gateway` custom resource (CR).  {._abstract}

This configuration is supported on {{ aws_first }}, {{ azure_first }}, {{ gcp_first }}, {{ rh_openstack_first }}, and {{ ibm_cloud_title }}. The following table details the required cloud-specific annotations and their corresponding values.

**Internal load balancer annotations by cloud provider**

| Cloud Provider | Annotation | Value |
| --- | --- | --- |
| {{ aws_short }} | `service.beta.kubernetes.io/aws-load-balancer-internal` | `"true"` |
| {{ azure_short }} | `service.beta.kubernetes.io/azure-load-balancer-internal` | `"true"` |
| {{ gcp_short }} | `cloud.google.com/load-balancer-type` | `"Internal"` |
| {{ rh_openstack }} | `service.beta.kubernetes.io/openstack-internal-load-balancer` | `"true"` |
| {{ ibm_cloud_title }}/ {{ ibm_power_server_title }} | `service.kubernetes.io/ibm-load-balancer-cloud-provider-ip-type` | `"private"` |