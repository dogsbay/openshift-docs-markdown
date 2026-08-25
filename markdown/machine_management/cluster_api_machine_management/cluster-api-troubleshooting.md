---
title: Troubleshooting clusters that use the Cluster API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting clusters that use the Cluster API {id="cluster-api-troubleshooting"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cluster-api-troubleshooting" %}

To help avoid or recover from issues in a cluster that supports migrating resources to use a different authoritative API, you can learn how to recognize these issues.
Generally, troubleshooting steps for problems with the Cluster API are similar to those steps for problems with the Machine API.

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

The {{ cluster_capi_operator }} and its operands are provisioned in the `openshift-cluster-api` namespace, whereas the Machine API uses the `openshift-machine-api` namespace.
When using `oc` commands that reference a namespace, be sure to reference the correct one.

{% leveloffset +1 %}{% include "./modules/ts-capi-cli-reference-intended-objects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ts-capi-sync-list-duplicate-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ts-capi-migrate-unexpected-behavior.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ts-capi-migrate-unexpected-deletion-behavior.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ts-capi-resource-migration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-set-authoritative-api-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ts-capi-migrate-sync-label-annotation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ts-capi-migrate-unsupported-features.md" %}{% endleveloffset %}