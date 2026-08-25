{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting missed Operator updates with {{ policy_gen_cr }} CRs {id="cnf-topology-aware-lifecycle-manager-operator-troubleshooting-{{ policy_gen_cr }}_{{ context }}"}

In some scenarios, {{ cgu_operator_first }} might miss Operator updates due to an out-of-date policy compliance state. {._abstract}

After a catalog source update, it takes time for the Operator Lifecycle Manager (OLM) to update the subscription status. The status of the subscription policy might continue to show as compliant while {{ cgu_operator }} decides whether remediation is needed. As a result, the Operator specified in the subscription policy does not get upgraded.

To avoid this scenario, add another catalog source configuration to the `{{ policy_gen_cr }}`{minja} and specify this configuration in the subscription for any Operators that require an update.

**Procedure**

1.  Add a catalog source configuration in the `{{ policy_gen_cr }}`{minja} resource:
{% if policy-gen-cr == "PolicyGenTemplate" %}
    {% include "./snippets/pgt-cnf-topology-aware-lifecycle-manager-operator-troubleshooting.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
    {% include "./snippets/pg-cnf-topology-aware-lifecycle-manager-operator-troubleshooting.md" %}
{% endif %}
1.  Update the `Subscription` resource to point to the new configuration for Operators that require an update:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: operator-subscription
      namespace: operator-namspace
    # ...
    spec:
      source: redhat-operators-disconnected-v2
    # ...
    ```
    *   `redhat-operators-disconnected-v2` specifies the name of the additional catalog source configuration that you defined in the `{{ policy_gen_cr }}`{minja} resource.