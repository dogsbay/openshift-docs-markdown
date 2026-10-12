{%- set _mod_docs_content_type = "REFERENCE" %}
# Q4 2026 {id="rosa-q4-2026_{{ context }}"}

The following items were added during the fourth quarter of 2026. {._abstract}

{% if openshift_rosa_hcp %}

BGP routing for OpenShift Virtualization on AWS
:   Border Gateway Protocol (BGP) Cloud Connector integrates {{ product_title }} with {{ aws_short }} Route Server allowing direct, routed connectivity to {{ VirtProductName }} virtual machines (VMs) on {{ aws_short }}. For more information, see the following documentation:

    *   [About BGP routing for {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/advanced_networking/index#about-bgp-routing)
{% endif %}