{%- set _mod_docs_content_type = "REFERENCE" %}
# Q3 2026 {id="osd-q3-2026_{{ context }}"}

The following items were added during the third quarter of 2026. {._abstract}


Bring your own firewall rules for {{ product_title }} on {{ gcp_short }} with Workload Identity Federation for shared VPC deployments
:   Starting with {{ product_title }} version 4.21, you can pre-create required cluster firewall rules in your {{ gcp_short }} shared VPC host project before installing the {{ product_title }} cluster into a shared VPC. This removes the need to grant `compute.firewalls.create` and `compute.firewalls.delete` permissions to Workload Identity Federation (WIF) service accounts.
    This approach gives your network security team control over firewall rule management in the shared VPC host project and reduces the permissions granted to cluster-managed service accounts, aligning with the principle of least privilege.

    :::important


    At this time, only manual mode is supported. Additionally, this permission reduction applies only to shared VPC deployments. For service project deployments, the `compute.firewalls` permissions cannot yet be removed.
    
    :::


    For more information, see [Create firewall rules for reduced Workload Identity Federation permissions on {{ gcp_short }}](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/planning_your_environment/gcp-ccs#osd-gcp-firewall-rules_gcp-ccs).


Reduced permissions for Shared VPC installations on {{ gcp_short }}
:   For Shared VPC deployments, you can now replace the broad `roles/compute.networkAdmin` and `roles/compute.securityAdmin` administrative roles on the host project with a custom role that grants only the minimal permissions required. Combined with pre-created firewall rules, this significantly reduces the privileges required across multi-project Shared VPC architectures.

    For more information, see [Configure reduced permissions for a Shared VPC host project on {{ gcp_short }}](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/planning_your_environment/gcp-ccs#osd-gcp-shared-vpc-firewall-rules_gcp-ccs).