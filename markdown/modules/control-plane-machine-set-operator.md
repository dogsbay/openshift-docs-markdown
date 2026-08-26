{%- set _mod_docs_content_type = "REFERENCE" %}
# Control Plane Machine Set Operator {id="control-plane-machine-set-operator_{{ context }}"}

The Control Plane Machine Set Operator automates the management of control plane machine resources within an {{ product_title }} cluster. {._abstract}


:::note

This Operator is available for Amazon Web Services (AWS), {{ gcp_first }}, Microsoft Azure, Nutanix, and VMware vSphere.

:::


## CRDs {id="_crds"}

*   `controlplanemachineset.machine.openshift.io`
    *   Scope: Namespaced
    *   CR: `ControlPlaneMachineSet`
    *   Validation: Yes