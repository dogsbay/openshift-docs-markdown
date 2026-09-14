{%- set _mod_docs_content_type = "REFERENCE" %}
# Q4 2024 {id="osd-q4-2024_{{ context }}"}

The following items were added during the fourth quarter of 2024. {._abstract}


Workload Identity Federation (WIF) authentication type is now available
:   {{ product_title }} on {{ gcp_first }} customers can now use WIF as an authentication type when creating a cluster. WIF is a {{ gcp_short }} Identity and Access Management (IAM) feature that provides third parties a secure method to access resources on a customer’s cloud account. WIF is {{ gcp_full }}'s preferred method for credential authentication.

    For more information, see
    [Creating a cluster on {{ gcp_short }} with Workload Identity Federation authentication](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/openshift_dedicated_clusters_on_google_cloud/osd-creating-a-cluster-on-gcp-with-workload-identity-federation).


Private Service Connect (PSC) networking feature is now available
:   You can now create a private {{ product_title }} cluster on {{ gcp_first }} using {{ gcp_full }}'s security-enhanced networking feature Private Service Connect (PSC).

    PSC is a capability of {{ gcp_full }} networking that enables private communication between services across different {{ gcp_short }} projects or organizations. Implementing PSC as part of your network connectivity allows you to deploy OpenShift Dedicated clusters in a private and secured environment within {{ gcp_short }} without using any public-facing cloud resources.

    For more information, see [Private Service Connect overview](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/openshift_dedicated_clusters_on_google_cloud/creating-a-gcp-psc-enabled-private-cluster).


Support for {{ gcp_short }} A3 instances with NVIDIA H100 80GB GPUs
:   {{ product_title }} on {{ GCP }} now supports A3 instance types with NVIDIA H100 80GB GPUs. The {{ gcp_short }} A3 instance type is available in all three zones of a {{ gcp_short }} region, which is a prerequisite for multiple Availability Zone (Multiple AZ) deployment. For more information, see [{{ gcp_full }} instance types](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#gcp-compute-types_osd-service-definition).