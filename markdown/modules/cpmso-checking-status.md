{% if context == "cpmso-disabling" %}
{%- set cpmso_disabling = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the control plane machine set custom resource state {id="cpmso-checking-status_{{ context }}"}

Check the state of the control plane machine set custom resource to determine if it is active, inactive, or missing before making configuration changes. {._abstract}

**Procedure**

*   Determine the state of the CR by running the following command:
    ```terminal
    $ oc get controlplanemachineset.machine.openshift.io cluster \
      --namespace openshift-machine-api
    ```
    *   A result of `Active` indicates that the `ControlPlaneMachineSet` CR exists and is activated. No administrator action is required.
    *   A result of `Inactive` indicates that a `ControlPlaneMachineSet` CR exists but is not activated.
    *   A result of `NotFound` indicates that there is no existing `ControlPlaneMachineSet` CR.

{% if not cpmso_disabling %}

**Next steps**

To use the control plane machine set, you must ensure that a `ControlPlaneMachineSet` CR with the correct settings for your cluster exists.

*   If your cluster has an existing CR, you must verify that the configuration in the CR is correct for your cluster.
*   If your cluster does not have an existing CR, you must create one with the correct configuration for your cluster.
{% endif %}

{% if context == "cpmso-disabling" %}
{%- set cpmso_disabling = "" -%}
{% endif %}