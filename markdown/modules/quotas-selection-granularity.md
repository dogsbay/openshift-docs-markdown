{%- set _mod_docs_content_type = "CONCEPT" %}
# Selection granularity {id="quotas-selection-granularity_{{ context }}"}

When you create a multi-project quota, restrict the number of active projects to avoid degrading API server responsiveness. {._abstract}

When you configure a multi-project quota using a `ClusterResourceQuota` object, restrict the number of selected active projects to 100 or fewer. Because quota allocation claims require system locking, selecting more than 100 projects under a single multi-project quota can severely degrade API server responsiveness across those projects.