{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating remediations {id="compliance-updating_{{ context }}"}

When you update compliance content to a newer version, the Compliance Operator marks previously applied remediations as **Outdated**. Review these remediations and apply the updated versions to ensure your nodes use the latest configuration. {._abstract}

The previously applied remediation contents would then be stored in the `spec.outdated` attribute of a `ComplianceRemediation` object and the new updated contents would be stored in the `spec.current` attribute. After updating the content to a newer version, the administrator then needs to review the remediation. If the `spec.outdated` attribute exists, it would be used to render the resulting `MachineConfig` object. After the `spec.outdated` attribute is removed, the Compliance Operator re-renders the resulting `MachineConfig` object, which causes the Operator to push the configuration to the nodes.


:::important

The Compliance Operator does not automatically resolve dependency issues that can occur between remediations. Users should perform a rescan after remediations are applied to ensure accurate results.

:::


**Procedure**

1.  Search for any outdated remediations:
    ```terminal
    $ oc -n openshift-compliance get complianceremediations \
    -l complianceoperator.openshift.io/outdated-remediation=
    ```
    ```terminal title="Example output"
    NAME                              STATE
    workers-scan-no-empty-passwords   Outdated
    ```

    :::note

    The currently applied remediation is stored in the `Outdated` attribute and the new, unapplied remediation is stored in the `Current` attribute. If you are satisfied with the new version, remove the `Outdated` field. If you want to keep the updated content, remove the `Current` and `Outdated` attributes.
    
    :::

1.  Apply the newer version of the remediation:
    ```terminal
    $ oc -n openshift-compliance patch complianceremediations workers-scan-no-empty-passwords \
    --type json -p '[{"op":"remove", "path":/spec/outdated}]'
    ```
1.  The remediation state will switch from `Outdated` to `Applied`:
    ```terminal
    $ oc get -n openshift-compliance complianceremediations workers-scan-no-empty-passwords
    ```
    ```terminal title="Example output"
    NAME                              STATE
    workers-scan-no-empty-passwords   Applied
    ```
1.  Verify that the nodes apply the newer remediation version and reboot.