---
title: Feature gates in a hosted cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Feature gates in a hosted cluster {id="hcp-using-feature-gates"}
{%- set context = "hcp-using-feature-gates" %}

You can use feature gates in a hosted cluster to enable features that are not part of the default set of features. You can enable the `TechPreviewNoUpgrade` feature set by using feature gates in your hosted cluster.

{% leveloffset +1 %}{% include "./modules/hcp-enable-feature-sets.md" %}{% endleveloffset %}

**Additional resources**

*   [FeatureGate [config.openshift.io/v1](/rest_api/config_apis/featuregate-config-openshift-io-v1#featuregate-config-openshift-io-v1)]