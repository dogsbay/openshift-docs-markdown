{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding Operator conditions {id="olm-supported-operatorconditions_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
As a cluster administrator,
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
As an administrator with the `dedicated-admin` role,
{%- endif %}
you might want to ignore a supported Operator condition reported by an Operator. When present, Operator conditions in the `Spec.Overrides` array override the conditions in the `Spec.Conditions` array, allowing
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
`dedicated-admin` administrators
{%- endif %}
to deal with situations where an Operator is incorrectly reporting a state to Operator Lifecycle Manager (OLM).


:::note

By default, the `Spec.Overrides` array is not present in an `OperatorCondition` object until it is added by
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
a cluster administrator
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
an administrator with the `dedicated-admin` role
{%- endif %}
. The `Spec.Conditions` array is also not present until it is either added by a user or as a result of custom Operator logic.

:::


For example, consider a known version of an Operator that always communicates that it is not upgradeable. In this instance, you might want to upgrade the Operator despite the Operator communicating that it is not upgradeable. This could be accomplished by overriding the Operator condition by adding the condition `type` and `status` to the `Spec.Overrides` array in the `OperatorCondition` object.

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   An Operator with an `OperatorCondition` object, installed using OLM.

**Procedure**

1.  Edit the `OperatorCondition` object for the Operator:
    ```terminal
    $ oc edit operatorcondition <name>
    ```
1.  Add a `Spec.Overrides` array to the object:
    ```yaml title="Example Operator condition override"
    apiVersion: operators.coreos.com/v2
    kind: OperatorCondition
    metadata:
      name: my-operator
      namespace: operators
    spec:
      overrides:
      - type: Upgradeable
        status: "True"
        reason: "upgradeIsSafe"
        message: "This is a known issue with the Operator where it always reports that it cannot be upgraded."
      conditions:
      - type: Upgradeable
        status: "False"
        reason: "migration"
        message: "The operator is performing a migration."
        lastTransitionTime: "2020-08-24T23:15:55Z"
    ```
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

    Setting the 'type' field to `Upgradeable` allows the cluster administrator to change the upgrade readiness to `True`.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

    Setting the 'type' field to `Upgradeable` allows the `dedicated-admin` user to change the upgrade readiness to `True`.
{% endif %}