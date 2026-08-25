---
title: OADP features and plugins
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OADP features and plugins {id="oadp-features-plugins"}
{%- set context = "oadp-features-plugins" %}

Review {{ oadp_first }} features and default plugins that integrate Velero with cloud providers to back up and restore {{ product_title }} resources. This helps you to select the right plugins and features for your backup and restore environment. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-features.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-plugins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-velero-plugins.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/oadp-supported-architecture.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/oadp-support-ibm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-ibm-power-test-support.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-ibm-z-test-support.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/oadp-ibm-power-and-z-known-issues.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/oadp-fips.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/avoiding-the-velero-plugin-panic-error.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/workaround-for-openshift-adp-controller-segmentation-fault.md" %}{% endleveloffset %}

{%- set oadp_features_plugins = "" -%}