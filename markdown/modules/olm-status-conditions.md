{%- set _mod_docs_content_type = "REFERENCE" %}
# Operator subscription condition types {id="olm-status-conditions_{{ context }}"}

Subscriptions can report the following condition types: {._abstract}

**Subscription condition types**

| Condition | Description |
| --- | --- |
| `CatalogSourcesUnhealthy` | Some or all of the catalog sources to be used in resolution are unhealthy. |
| `InstallPlanMissing` | An install plan for a subscription is missing. |
| `InstallPlanPending` | An install plan for a subscription is pending installation. |
| `InstallPlanFailed` | An install plan for a subscription has failed. |
| `ResolutionFailed` | The dependency resolution for a subscription has failed. |


:::note

Default {{ product_title }} cluster Operators are managed by the Cluster Version Operator (CVO) and they do not have a `Subscription` object. Application Operators are managed by Operator Lifecycle Manager (OLM) and they have a `Subscription` object.

:::