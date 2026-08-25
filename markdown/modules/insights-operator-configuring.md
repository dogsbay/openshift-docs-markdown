{%- set _mod_docs_content_type = "CONCEPT" %}
# The {{ insights_operator }} configuration {id="insights-operator-configuring_{{ context }}"}

The {{ insights_operator }} configuration combines default settings with configurations stored in either the `insights-config` `ConfigMap` in the `openshift-insights` namespace or the support secret in the `openshift-config` namespace. {._abstract}

When a `ConfigMap` object or support secret exists, the contained attribute values override the default Operator configuration values. If both a `ConfigMap` object _and_ a support secret exist, the Operator reads the `ConfigMap` object.

The `ConfigMap` object does not exist by default, so an {{ product_title }} cluster administrator must create it.