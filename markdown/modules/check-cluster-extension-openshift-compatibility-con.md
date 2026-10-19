{%- set _mod_docs_content_type = "CONCEPT" %}
# Check cluster extension OpenShift compatibility {id="check-cluster-extension-openshift-compatibility-con_{{ context }}"}

{{ olmv1_first }} supports {{ olmv0 }} semantics for update paths, also known as upgrade edges or upgrade constraints. Support includes `replaces`, `skips`, and `skipRange` directives, with a few noted differences. {._abstract}

By supporting {{ olmv0 }} semantics, {{ olmv1 }} accurately reflects the update graph from catalogs.