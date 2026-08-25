---
title: Simple Content Access entitlements with Insights Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Simple Content Access entitlements with Insights Operator {id="insights-operator-simple-access"}

{%- set context = "remote-health-reporting-from-restricted-network" -%}
{%- set FeatureName = "`InsightsOperatorPullingSCA`" %}

{{ insights_operator }} automates the import of Simple Content Access (SCA) entitlement certificates every 8 hours. These Red&#160;Hat Subscription Management (RHSM) certificates allow the cluster to authenticate with the Red&#160;Hat Content Delivery Network (CDN) to access subscription-governed content.  {._abstract}

SCA supports multi-architecture clusters by generating architecture-specific secrets, such as `amd64` or `arm64`, in the `openshift-config-managed` namespace to ensure compatibility across all worker node types.

**Additional resources**
{._additional-resources}

*   [About simple content access](https://access.redhat.com/documentation/en-us/subscription_central/2021/html-single/getting_started_with_simple_content_access/index#assembly-about-simplecontent)

{% if not (openshift_rosa or openshift_dedicated) %}
*   [Using Red Hat subscriptions in builds](/cicd/builds/running-entitled-builds#builds-running-entitled-builds-with-sharedsecret-objects_running-entitled-builds)
{% endif %}

{% leveloffset +1 %}{% include "./modules/insights-operator-sca-entitlement-synchronization.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-sca-architecture-based-entitlement-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-sca-verify-entitlement-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-configuring-sca.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/insights-operator-disabling-sca.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/insights-operator-enabling-sca.md" %}{% endleveloffset %}