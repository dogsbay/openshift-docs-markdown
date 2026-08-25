{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported conditions {id="olm-supported-operatorconditions_{{ context }}"}

Operator Lifecycle Manager (OLM) supports a specific set of Operator conditions that communicate the state of an Operator. {._abstract}

## Upgradeable condition {id="olm-upgradeable-operatorcondition_{{ context }}"}

The `Upgradeable` Operator condition prevents an existing cluster service version (CSV) from being replaced by a newer version of the CSV. This condition is useful when:

*   An Operator is about to start a critical process and should not be upgraded until the process is completed.
*   An Operator is performing a migration of custom resources (CRs) that must be completed before the Operator is ready to be upgraded.


:::important

Setting the `Upgradeable` Operator condition to the `False` value does not avoid pod disruption. If you must ensure your pods are not disrupted, see "Using pod disruption budgets to specify the number of pods that must be up" and "Graceful termination" in the "Additional resources" section.

:::


```yaml title="Example Upgradeable Operator condition"
apiVersion: operators.coreos.com/v1
kind: OperatorCondition
metadata:
  name: my-operator
  namespace: operators
spec:
  conditions:
  - type: Upgradeable
    status: "False"
    reason: "migration"
    message: "The Operator is performing a migration."
    lastTransitionTime: "2020-08-24T23:15:55Z"
```
*   The `type` field sets the name of the condition.
*   A `False` value in the `status` field indicates the Operator is not ready to be upgraded. OLM prevents a CSV that replaces the existing CSV of the Operator from leaving the `Pending` phase. A `False` value does not block cluster upgrades.