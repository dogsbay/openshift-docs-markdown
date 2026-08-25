---
title: Configuring an egress IP address
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring an egress IP address {id="configuring-egress-ips-ovn"}
{%- set context = "configuring-egress-ips-ovn" %}

As a cluster administrator, you can configure the OVN-Kubernetes Container Network Interface (CNI) network plugin to assign one or more egress IP addresses to a namespace, or to specific pods in a namespace. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-egress-ips-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not openshift_rosa %}
*   [BZ#2039656 (Red Hat Bugzilla)](https://bugzilla.redhat.com/show_bug.cgi?id=2039656)
*   [Per instance ({{ gcp_full }} documentation)](https://cloud.google.com/vpc/docs/quota#per_instance)
*   [Alias IP ranges overview ({{ gcp_full }} documentation)](https://cloud.google.com/vpc/docs/alias-ip)
*   [Networking limits ({{ azure_full }} documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits?toc=/azure/virtual-network/toc.json#networking-limits)
{%- endif %}
*   [IP addresses per network interface per instance type ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI)

{% if not openshift_rosa %}
{% leveloffset +2 %}{% include "./modules/nw-egress-ips-platform-support.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-egress-ips-public-cloud-platform-considerations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-egress-ips-multi-nic-considerations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Longest prefix match routing (NetworkLessons documentation)](https://networklessons.com/cisco/ccna-200-301/longest-prefix-match-routing)
{% endif %}

{% leveloffset +2 %}{% include "./modules/nw-egress-ips-node-architecture.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-egress-ips-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-egress-ips-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-egress-ips-assign.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/egressip_failover_concept.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/egressip_configure_failover_task.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/egressip_failover_reference.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/nw-egress-ips-node.md" %}{% endleveloffset %}

{% if not openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/nw-egress-ips-object-dual-stack.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="configuring-egress-ips-additional-resources" ._additional-resources}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [LabelSelector meta/v1](/rest_api/objects/index#labelselector-meta-v1)
*   [LabelSelectorRequirement meta/v1](/rest_api/objects/index#labelselectorrequirement-meta-v1)
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   [LabelSelector meta/v1](https://docs.openshift.com/container-platform/4.14/rest_api/objects/index.html#labelselector-meta-v1)
*   [LabelSelectorRequirement meta/v1](https://docs.openshift.com/container-platform/4.14/rest_api/objects/index.html#labelselectorrequirement-meta-v1)
{% endif %}