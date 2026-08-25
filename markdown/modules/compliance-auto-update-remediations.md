{%- set _mod_docs_content_type = "PROCEDURE" %}
# Automatically update remediations {id="automatically-update-remediations_{{ context }}"}

In some cases, a scan with newer content might mark remediations as `OUTDATED`. As an administrator, you can apply the `compliance.openshift.io/remove-outdated` annotation to apply new remediations and remove the outdated ones. {._abstract}

Alternatively, set the `autoUpdateRemediations` flag in a `ScanSetting` or `ComplianceSuite` object to update the remediations automatically.

**Procedure**

*   Apply the `compliance.openshift.io/remove-outdated` annotation:
    ```terminal
    $ oc -n openshift-compliance \
    annotate compliancesuites/workers-compliancesuite compliance.openshift.io/remove-outdated=
    ```