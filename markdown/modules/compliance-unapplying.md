{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unapplying a remediation {id="compliance-unapplying_{{ context }}"}

You can unapply a remediation that was previously applied to roll back a change when you need to revert it. {._abstract}


:::important

The Compliance Operator does not automatically resolve dependency issues that can occur between remediations. Users should perform a rescan after remediations are applied to ensure accurate results.

:::


**Procedure**

1.  Set the `apply` flag to `false`:
    ```terminal
    $ oc -n openshift-compliance \
    patch complianceremediations/rhcos4-moderate-worker-sysctl-net-ipv4-conf-all-accept-redirects \
    --patch '{"spec":{"apply":false}}' --type=merge
    ```
1.  Verify that the remediation status has changed to `NotApplied` and the composite `MachineConfig` object is re-rendered to not include the remediation.

    :::important

    All affected nodes with the remediation will be rebooted.
    
    :::