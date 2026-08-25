{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying remediation when using customized machine config pools {id="compliance-operator-apply-remediation-for-customized-mcp"}

When you create a custom `MachineConfigPool`, add a label to the `MachineConfigPool` so that `machineConfigPoolSelector` present in the `KubeletConfig` can match the label with `MachineConfigPool`. {._abstract}


:::important

Do not set `protectKernelDefaults: false` in the `KubeletConfig` file, because the `MachineConfigPool` object might fail to unpause unexpectedly after the Compliance Operator finishes applying remediation.

:::


**Procedure**

1.  List the nodes.
    ```terminal
    $ oc get nodes -n openshift-compliance
    ```
    ```terminal title="Example output"
    NAME                                       STATUS  ROLES  AGE    VERSION
    ip-10-0-128-92.us-east-2.compute.internal  Ready   master 5h21m  v1.35.4
    ip-10-0-158-32.us-east-2.compute.internal  Ready   worker 5h17m  v1.35.4
    ip-10-0-166-81.us-east-2.compute.internal  Ready   worker 5h17m  v1.35.4
    ip-10-0-171-170.us-east-2.compute.internal Ready   master 5h21m  v1.35.4
    ip-10-0-197-35.us-east-2.compute.internal  Ready   master 5h22m  v1.35.4
    ```
1.  Add a label to nodes.
    ```terminal
    $ oc -n openshift-compliance \
    label node ip-10-0-166-81.us-east-2.compute.internal \
    node-role.kubernetes.io/<machine_config_pool_name>=
    ```
    ```terminal title="Example output"
    node/ip-10-0-166-81.us-east-2.compute.internal labeled
    ```
1.  Create custom `MachineConfigPool` CR.
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfigPool
    metadata:
      name: <machine_config_pool_name>
      labels:
        pools.operator.machineconfiguration.openshift.io/<machine_config_pool_name>: ''
    spec:
      machineConfigSelector:
      matchExpressions:
      - {key: machineconfiguration.openshift.io/role, operator: In, values: [worker,<machine_config_pool_name>]}
      nodeSelector:
      matchLabels:
        node-role.kubernetes.io/<machine_config_pool_name>: ""
    ```

    where:

    `metadata.labels.pools.operator.machineconfiguration.openshift.io/<machine_config_pool_name>`
    :   The `labels` field defines the label name to add for the machine config pool (MCP).

1.  Verify MCP created successfully.
    ```terminal
    $ oc get mcp -w
    ```