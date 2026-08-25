---
title: Using Red Hat subscriptions in builds
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using Red Hat subscriptions in builds {id="running-entitled-builds"}
{%- set context = "running-entitled-builds" %}

Use the following sections to install Red Hat subscription content within {{ product_title }} builds. {._abstract}

{% leveloffset +1 %}{% include "./modules/builds-create-imagestreamtag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-source-secrets-entitlements.md" %}{% endleveloffset %}

## Running builds with Subscription Manager {id="_running_builds_with_subscription_manager"}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-entitled-subman.md" %}{% endleveloffset %}

## Running builds with Red Hat Satellite subscriptions {id="_running_builds_with_red_hat_satellite_subscriptions"}

{% leveloffset +2 %}{% include "./modules/builds-source-input-satellite-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-entitled-satellite.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [How to use builds with Red Hat Satellite subscriptions and which certificate to use](https://access.redhat.com/solutions/5847331)

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/builds-running-entitled-builds-with-sharedsecret-objects.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="_additional_resources" ._additional-resources}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Importing simple content access certificates with {{ insights_operator }}](/support/remote_health_monitoring/insights-operator-simple-access#insights-operator-simple-access)
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
{%- endif %}
*   [Managing image streams](/openshift_images/image-streams-manage#image-streams-managing)
*   [Build strategies](/cicd/builds/build-strategies#build-strategies)