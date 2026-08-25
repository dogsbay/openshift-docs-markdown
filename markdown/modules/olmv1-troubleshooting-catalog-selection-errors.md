{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting catalog selection errors {id="olmv1-troubleshooting-catalog-selection-errors_{{ context }}"}

If bundle resolution fails because of ambiguity or because no catalog is selected, an error message is printed in the `status.conditions` field of the cluster extension. {._abstract}

Perform the following actions to troubleshoot catalog selection errors:

*   Refine your selection criteria using labels or expressions.
*   Adjust your catalog priorities.
*   Ensure that only one bundle matches your package name and version requirements.