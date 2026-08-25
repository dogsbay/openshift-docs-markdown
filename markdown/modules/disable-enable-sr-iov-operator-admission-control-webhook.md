{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling or enabling the SR-IOV Network Operator admission controller webhook {id="disable-enable-sr-iov-operator-admission-control-webhook_{{ context }}"}

To manage validation of your network configurations, enable or disable the SR-IOV Network Operator admission controller webhook. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   You must have installed the SR-IOV Network Operator.

**Procedure**

*   Set the `enableOperatorWebhook` field. Replace `<value>` with `false` to disable the feature or `true` to enable it:
    ```terminal
    $ oc patch sriovoperatorconfig default --type=merge \
      -n openshift-sriov-network-operator \
      --patch '{ "spec": { "enableOperatorWebhook": <value> } }'
    ```

    :::tip

    You can alternatively apply the following YAML to update the Operator:

    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovOperatorConfig
    metadata:
      name: default
      namespace: openshift-sriov-network-operator
    spec:
      enableOperatorWebhook: <value>
    # ...
    ```
    
    :::