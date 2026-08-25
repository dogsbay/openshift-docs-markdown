{%- set _mod_docs_content_type = "REFERENCE" %}
# Control Plane Machine Set Operator {id="control-plane-machine-set-operator_{{ context }}"}

The Control Plane Machine Set Operator automates the management of control plane machine resources within an {{ product_title }} cluster.


:::note

This Operator is available for Amazon Web Services (AWS), {{ gcp_first }}, Microsoft Azure, Nutanix, and VMware vSphere.

:::


## Project {id="_project"}

[cluster-control-plane-machine-set-operator](https://github.com/openshift/cluster-control-plane-machine-set-operator)

## CRDs {id="_crds"}

*   `controlplanemachineset.machine.openshift.io`
    *   Scope: Namespaced
    *   CR: `ControlPlaneMachineSet`
    *   Validation: Yes