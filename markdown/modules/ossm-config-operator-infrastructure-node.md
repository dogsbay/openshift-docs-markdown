{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ SMProductShortName }} Operator to run on infrastructure nodes {id="ossm-config-operator-infrastructure-node_{{ context }}"}

This task should only be performed if the {{ SMProductShortName }} Operator runs on an infrastructure node.

If the operator will run on a worker node, skip this task.

**Prerequisites**

*   The {{ SMProductShortName }} Operator must be installed.
*   One of the nodes comprising the deployment must be an infrastructure node. For more information, see "Creating infrastructure machine sets."

**Procedure**

1.  List the operators installed in the namespace:
    ```terminal
    $ oc -n openshift-operators get subscriptions
    ```
1.  Edit the {{ SMProductShortName }} Operator `Subscription` resource to specify where the operator should run:
    ```terminal
    $ oc -n openshift-operators edit subscription <name> (1)
    ```
    1.  `<name>` represents the name of the `Subscription` resource. The default name of the `Subscription` resource is `servicemeshoperator`.
1.  Add the `nodeSelector` and `tolerations` to `spec.config` in the `Subscription` resource:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      labels:
        operators.coreos.com/servicemeshoperator.openshift-operators: ""
      name: servicemeshoperator
      namespace: openshift-operators
    # ...
    spec:
      config:
        nodeSelector: (1)
          node-role.kubernetes.io/infra: ""
        tolerations: (2)
        - effect: NoSchedule
          key: node-role.kubernetes.io/infra
          value: reserved
        - effect: NoExecute
          key: node-role.kubernetes.io/infra
          value: reserved
    ```
    1.  Ensures that the operator pod is only scheduled on an infrastructure node.
    1.  Ensures that the pod is accepted by the infrastructure node.