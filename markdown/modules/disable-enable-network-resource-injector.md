{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling or enabling the Network Resources Injector {id="disable-enable-network-resource-injector_{{ context }}"}

To control the automatic configuration of your cluster workloads, enable or disable the Network Resources Injector. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   You must have installed the SR-IOV Network Operator.

**Procedure**

*   Set the `enableInjector` field. Replace `<value>` with `false` to disable the feature or `true` to enable the feature.
    ```terminal
    $ oc patch sriovoperatorconfig default \
      --type=merge -n openshift-sriov-network-operator \
      --patch '{ "spec": { "enableInjector": <value> } }'
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
      enableInjector: <value>
    # ...
    ```
    
    :::