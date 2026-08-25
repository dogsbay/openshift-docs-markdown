{%- set _mod_docs_content_type = "REFERENCE" %}
# Quota scopes {id="quotas-scopes_{{ context }}"}

Measure resource usage with a quota, and add scopes to restrict the allowed set of target resources to prevent validation errors. {._abstract}

Each quota can have an associated set of _scopes_. A quota only measures usage for a resource if it matches the intersection of enumerated scopes.

| Scope | Description |
| --- | --- |
| `BestEffort` | Match pods that have best effort quality of service for either `cpu` or `memory`. |
| `NotBestEffort` | Match pods that do not have best effort quality of service for `cpu` and `memory`. |

A `BestEffort` scope restricts a quota to limiting the following resources:

*   `pods`

A `NotBestEffort` scope restricts a quota to tracking the following resources:

*   `pods`
*   `memory`
*   `requests.memory`
*   `limits.memory`
*   `cpu`
*   `requests.cpu`
*   `limits.cpu`