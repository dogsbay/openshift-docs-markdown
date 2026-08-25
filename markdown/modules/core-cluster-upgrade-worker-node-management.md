{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing and unpausing worker nodes by using {{ cgu_operator }} {id="core-cluster-upgrade-worker-node-management_{{ context }}"}

You can pause worker nodes before updating the control plane by using {{ cgu_operator_full }} ({{ cgu_operator }}) policies.
After the control plane update completes, you can unpause worker nodes to apply the update to compute resources during a separate maintenance window. {._abstract}

Pausing worker nodes prevents the `MachineConfigPool` resource from updating worker nodes while the control plane updates, minimizing workload disruption.

**Prerequisites**

*   You have access to clusters with cluster-admin privileges.
*   {{ cgu_operator_full }} ({{ cgu_operator }}) is installed on the {{ rh_rhacm_first }} hub cluster.

**Procedure**

1.  Create a {{ rh_rhacm }} policy for each `MachineConfigPool` resource that needs to be paused during the update:
    ```yaml
    apiVersion: policy.open-cluster-management.io/v1
    kind: Policy
    metadata:
      name: pause-<mcp_name>
      namespace: openshift-upgrade-policies
    spec:
      disabled: false
      policy-templates:
        - objectDefinition:
            apiVersion: policy.open-cluster-management.io/v1
            evaluationInterval:
              compliant: never
            kind: ConfigurationPolicy
            metadata:
              name: pause-<mcp_name>
            spec:
              object-templates:
                - complianceType: musthave
                  objectDefinition:
                    apiVersion: machineconfiguration.openshift.io/v1
                    kind: MachineConfigPool
                    metadata:
                      name: <mcp_name>
                    spec:
                      paused: true
              remediationAction: inform
              severity: low
      remediationAction: inform
    ```

    where `<mcp_name>` is the name of the machine config pool to pause, for example `mcp-1`. This value is used in both the policy name and the `MachineConfigPool` resource name.

    :::important

    Create a separate policy for each `MachineConfigPool` resource that you need to pause during the cluster update. If the machine config pool is not paused, any machine configuration change triggers a node reboot. Pausing the machine config pool allows all configuration changes to be applied in a single reboot when the pool is unpaused.
    
    :::

1.  Apply the policy to {{ rh_rhacm }} by running the following command:
    ```terminal
    $ oc apply -f pause-<mcp_name>-policy.yaml
    ```
1.  Include the pause policy in your `ClusterGroupUpgrade` custom resource (CR) before the update policy:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: <cgu_name>
      namespace: <namespace>
    spec:
      clusters:
      - <cluster_name>
      managedPolicies:
      - pause-<mcp_name>
      - <upgrade_policy_name>
      enable: false
      remediationStrategy:
        maxConcurrency: 1
        timeout: 120
    ```

    {{ cgu_operator }} applies the pause policy before applying the update policy, ensuring workers remain paused during the control plane update.
1.  After the control plane update completes and you are ready to update worker nodes, create an unpause policy for each `MachineConfigPool` resource:
    ```yaml
    apiVersion: policy.open-cluster-management.io/v1
    kind: Policy
    metadata:
      name: unpause-<mcp_name>
      namespace: openshift-upgrade-policies
    spec:
      disabled: false
      policy-templates:
        - objectDefinition:
            apiVersion: policy.open-cluster-management.io/v1
            evaluationInterval:
              compliant: never
            kind: ConfigurationPolicy
            metadata:
              name: unpause-<mcp_name>
            spec:
              object-templates:
                - complianceType: musthave
                  objectDefinition:
                    apiVersion: machineconfiguration.openshift.io/v1
                    kind: MachineConfigPool
                    metadata:
                      name: <mcp_name>
                    spec:
                      paused: false
              remediationAction: inform
              severity: low
      remediationAction: inform
    ```

    where `<mcp_name>` is the name of the machine config pool to unpause, for example `mcp-1`.

    The unpause policies for each machine config pool are included as managed policies in the final `ClusterGroupUpgrade` CR. When {{ cgu_operator }} enforces these policies, the machine config pools unpause and all accumulated configuration changes are applied in a single reboot per node.
1.  Apply the unpause policy by using a `ClusterGroupUpgrade` CR:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: <cgu_name>
      namespace: <namespace>
    spec:
      clusters:
      - <cluster_name>
      managedPolicies:
      - unpause-<mcp_name>
      enable: false
      remediationStrategy:
        maxConcurrency: 1
    ```
1.  Apply and enable the `ClusterGroupUpgrade` CR to unpause workers by running the following commands:
    ```terminal
    $ oc apply -f <unpause_cgu_cr_filename>.yaml
    $ oc patch cgu <cgu_name> \
      -n <namespace> \
      --type merge \
      -p '{"spec":{"enable":true}}'
    ```
1.  Monitor worker node updates after unpausing by running the following command:
    ```terminal
    $ oc get mcp <mcp_name> -w
    ```

    The `MachineConfigPool` status shows the rolling update progress.
    Nodes update in a rolling fashion based on the `maxUnavailable` setting.

**Verification**

1.  Verify that worker nodes are updated and workloads are healthy by running the following commands:
    ```terminal
    $ oc get nodes
    $ oc get mcp <mcp_name>
    $ oc get pods -A | grep -v Running | grep -v Completed
    ```

    All nodes must show `Ready` status and the expected kubelet version.
    For the `MachineConfigPool` output, verify that `MACHINECOUNT` = `READYMACHINECOUNT` = `UPDATEDMACHINECOUNT`.
    The `oc get pods` command must return no unexpected pods.

**Troubleshooting**

*   If the pause policy does not take effect, verify the policy is enforced in {{ rh_rhacm }} by running the following command:
    ```terminal
    $ oc get policy <pause_policy_name> -n <namespace>
    ```
*   If workers update despite being paused, check for manual `MachineConfigPool` edits that override the policy.
*   If a worker node update gets stuck, check the node status by running the following command:
    ```terminal
    $ oc describe node <worker_node_name>
    ```
*   Common issues include pod disruption budgets blocking node draining, pods with local storage that cannot be evicted, or node cordoning preventing new pods from scheduling.

    To identify blocking pod disruption budgets, run the following command:
    ```terminal
    $ oc get pdb -A -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.namespace}{"\t"}{.metadata.name}{"\n"}{end}'
    ```