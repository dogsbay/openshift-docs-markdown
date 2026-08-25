---
title: Cluster Network Operator in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster Network Operator in {{ product_title }} {id="cluster-network-operator"}
{%- set context = "cluster-network-operator" %}

With the Cluster Network Operator, you can manage networking in {{ product_title }}, including how to view status, enable IP forwarding, and collect logs.  {._abstract}

{% include "./snippets/cluster-network-operator-abstract.md" %}

{% leveloffset +1 %}{% include "./modules/nw-cluster-network-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cno-view.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cno-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cno-enable-ip-forwarding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cno-logs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

## Additional resources {id="cluster-network-operator-additional-resources" ._additional-resources}
*   [`Network` API in the `operator.openshift.io` API group](/rest_api/operator_apis/network-operator-openshift-io-v1#network-operator-openshift-io-v1)
*   [Expanding the cluster network IP address range](/networking/configuring_network_settings/configuring-cluster-network-range#nw-cluster-network-range-edit_configuring-cluster-network-range)
*   [How to configure OVN to use kernel routing table](https://access.redhat.com/solutions/6969174)