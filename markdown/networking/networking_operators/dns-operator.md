---
title: DNS Operator in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# DNS Operator in {{ product_title }} {id="dns-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "dns-operator" %}

In {{ product_title }}, the DNS Operator deploys and manages a CoreDNS instance to provide a name resolution service to pods inside the cluster, enables DNS-based Kubernetes Service discovery, and resolves internal `cluster.local` names.

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
This Operator is installed on {{ product_title }} clusters by default.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nw-dns-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dns-view.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nw-dns-forward.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nw-dns-operator-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dns-operator-logs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dns-loglevel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dns-viewlog.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dns-operatorloglevel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dns-cache-tuning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dns-operator-managementState.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-controlling-dns-pod-placement.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-dns-forwarding-with-tls.md" %}{% endleveloffset %}

{% endif %}