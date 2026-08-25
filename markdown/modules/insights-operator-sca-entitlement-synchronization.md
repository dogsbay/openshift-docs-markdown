{%- set _mod_docs_content_type = "CONCEPT" %}
# Simple Content Access entitlement synchronization {id="insights-operator-sca-entitlement-synchronization_{{ context }}"}

Simple Content Access (SCA) simplifies subscription management by removing the requirement to manually attach entitlement keys to individual nodes. {{ insights_operator }} facilitates this by automatically retrieving and storing certificates as secrets within the `openshift-config-managed` namespace. These certificates allow the cluster to authenticate with Red&#160;Hat content repositories for operations such as entitled builds. {._abstract}

Entitlement secrets refresh automatically every 8 hours. While older configurations used a support secret in the `openshift-config` namespace, {{ insights_operator }} now prioritizes the `insights-config` `ConfigMap` in the `openshift-insights` namespace if both exist.


:::note

Simple content access must be enabled in Red&#160;Hat Subscription Management for the importing to function.

:::