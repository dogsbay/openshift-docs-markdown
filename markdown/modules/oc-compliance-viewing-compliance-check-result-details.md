{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing ComplianceCheckResult object details {id="viewing-compliance-remediation-details_{{ context }}"}

When scans are finished running, `ComplianceCheckResult` objects are created for the individual scan rules. You can use the `view-result` subcommand to provide a human-readable output of the `ComplianceCheckResult` object details. {._abstract}

**Procedure**

*   Run:
    ```terminal
    $ oc compliance view-result ocp4-cis-scheduler-no-bind-address
    ```