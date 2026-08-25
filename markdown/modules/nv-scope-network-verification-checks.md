{%- set _mod_docs_content_type = "REFERENCE" %}
# Scope of the network verification checks {id="scope-of-the-network-verification-checks_{{ context }}"}

The network verification includes checks for each of the following requirements: {._abstract}

*   The parent Virtual Private Cloud (VPC) exists.
*   All specified subnets belong to the VPC.
*   The VPC has `enableDnsSupport` enabled.
*   The VPC has `enableDnsHostnames` enabled.
{%- if openshift_dedicated %}
*   Egress is available to the required domain and port combinations.
{%- endif %}

{% if openshift_dedicated %}

**Additional resources**
{._additional-resources}

*   [AWS firewall prerequisites](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/planning_your_environment/aws-ccs#osd-aws-privatelink-firewall-prerequisites_aws-ccs)
{% endif %}