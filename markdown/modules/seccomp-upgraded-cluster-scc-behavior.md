{%- set _mod_docs_content_type = "CONCEPT" %}

# Upgraded cluster {id="upgraded_cluster_{{ context }}"}

In clusters upgraded to {{ product_version }}, all authenticated users have access to the `restricted` and `restricted-v2` SCC. {._abstract}

A workload admitted by the SCC `restricted` for example, on a {{ product_title }} v4.10 cluster when upgraded may get admitted by `restricted-v2`. This is because `restricted-v2` is the more restrictive SCC between `restricted` and `restricted-v2`.


:::note

The workload must be able to run with `retricted-v2`.

:::


Conversely with a workload that requires `privilegeEscalation: true` this workload will continue to have the `restricted` SCC available for any authenticated user. This is because `restricted-v2` does not allow `privilegeEscalation`.