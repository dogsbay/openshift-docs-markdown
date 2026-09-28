{%- set _mod_docs_content_type = "CONCEPT" %}
# Compare cluster with RDS reference {id="compare-cluster-rds-reference-intro_{{ context }}"}

When validating telco deployments against reference design specifications (RDS), you can use the `cluster-compare` plugin to identify deviations from certified configurations. The plugin compares your live cluster or must-gather data against a reference configuration derived from the telco RDS, suppressing expected variations and highlighting meaningful differences in custom resources that affect compliance.