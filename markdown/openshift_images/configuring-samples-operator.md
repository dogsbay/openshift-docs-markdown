---
title: Configuring the Cluster Samples Operator
---

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the Cluster Samples Operator {id="configuring-samples-operator"}

{%- set context = "configuring-samples-operator" -%}

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Overview of the Cluster Samples Operator {id="configuring-samples-operator"}

{% include "./_attributes/common-attributes.md" %}

{%- set context = "configuring-samples-operator" -%}
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

You can configure the Cluster Samples Operator to manage the installation and updates of {{ op_system_base_full }}-based {{ product_title }} image streams and templates in the `openshift` namespace. {._abstract}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}

The Cluster Samples Operator manages {{ product_title }} image streams and templates in the `openshift` namespace, providing you with ready-to-use application components. {._abstract}
{% endif %}

{% leveloffset +1 %}{% include "./snippets/cluster-sampler-operator-deprecation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/samples-operator-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/samples-operator-bootstrapped.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/samples-operator-restricted-network-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/samples-operator-restricted-nw-install-with-access.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/samples-operator-retries.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/installation-images-samples-disconnected-mirroring-assist.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/samples-operator-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/samples-operator-crd.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/images-samples-operator-deprecated-image-stream.md" %}{% endleveloffset %}