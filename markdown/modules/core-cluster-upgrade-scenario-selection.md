{%- set _mod_docs_content_type = "REFERENCE" %}
# Selecting an update scenario {id="core-cluster-upgrade-scenario-selection_{{ context }}"}

The following decision matrix helps you determine which update scenario to use: {._abstract}

**Decision matrix for update scenarios**

| Scenario | When to use | Key considerations |
| --- | --- | --- |
| Z-stream | Security patches or bug fixes needed | Apply weekly. Minimal risk and minimal downtime. |
| Y-stream | New features required or approaching end of support | Typically a four-month cadence. Review release notes and plan a maintenance window. |
| EUS-to-EUS | Long-term planning with staged rollouts | 18-month support. Control plane and workers can update separately. Larger version jumps require more validation. |