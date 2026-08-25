---
title: Remote health reporting
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Remote health reporting {id="remote-health-reporting"}

{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "remote-health-reporting" %}

{% if openshift_enterprise or openshift_origin %}

You can _opt in_, enable, or _opt out_, disable, reporting health and usage data for your cluster.

{% leveloffset +1 %}{% include "./modules/enabling-remote-health-reporting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-new-pull-secret-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telemetry-consequences-of-disabling-telemetry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-new-pull-secret-disabled.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-register-disconnected-cluster.md" %}{% endleveloffset %}

**Additional resources**

*   [How does the subscriptions service show my subscription data?(Getting Started with the Subscription Service)](https://access.redhat.com/documentation/en-us/subscription_central/2023/html/getting_started_with_the_subscriptions_service/con-how-does-subscriptionwatch-show-data_assembly-viewing-understanding-subscriptionwatch-data-ctxt)

{% leveloffset +1 %}{% include "./modules/images-update-global-pull-secret.md" %}{% endleveloffset %}

**Additional resources**

*   [Transferring cluster ownership](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#transferring-cluster-ownership_downloading-and-updating-pull-secrets)

{% endif %}