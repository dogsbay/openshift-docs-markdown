{%- set _mod_docs_content_type = "PROCEDURE" %}
# Coordinating reboots for configuration changes {id="ztp-coordinating-reboots-for-config-changes_{{ context }}"}

You can use {{ cgu_operator_full }} (TALM) to coordinate reboots across a fleet of spoke clusters when configuration changes require a reboot, such as deferred tuning changes. {{ cgu_operator }} reboots all nodes in the targeted `MachineConfigPool` on the selected clusters when the reboot policy is applied. {._abstract}

Instead of rebooting nodes after each individual change, you can apply all configuration updates through policies and then trigger a single, coordinated reboot. 

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have deployed and configured {{ cgu_operator }}.

**Procedure**

1.  Generate the configuration policies by creating a `PolicyGenerator` custom resource (CR). You can use one of the following sample manifests:
    *   `out/argocd/example/acmpolicygenerator/acm-example-sno-reboot`
    *   `out/argocd/example/acmpolicygenerator/acm-example-multinode-reboot`
1.  Update the `policyDefaults.placement.labelSelector` field in the `PolicyGenerator` CR to target the clusters that you want to reboot. Modify other fields as necessary for your use case. 

    If you are coordinating a reboot to apply a deferred tuning change, ensure the `MachineConfigPool` in the reboot policy matches the value specified in the `spec.recommend` field in the `Tuned` object.
1.  Apply the `PolicyGenerator` CR to generate and apply the configuration policies. For detailed steps, see "Customizing a managed cluster with PolicyGenerator CRs".
1.  After ArgoCD completes syncing the policies, create and apply the `ClusterGroupUpgrade` (CGU) CR. 
    ```yaml title="Example CGU custom resource configuration"
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: reboot
      namespace: default
    spec:
      clusterLabelSelectors:
      - matchLabels:
    # ...
      enable: true
      managedPolicies:
      - example-reboot
      remediationStrategy:
        timeout: 300
        maxConcurrency: 10
    # ...
    ```

    where:

    `matchLabels`
    :   Configure the labels that match the clusters you want to reboot.

    `managedPolicies`
    :   Add all required configuration policies before the reboot policy. {{ cgu_operator }} applies the configuration changes as specified in the policies, in the order they are listed.

    `timeout`
    :   Specify the timeout in seconds for the entire upgrade across all selected clusters. Set this field by considering the worst-case scenario.
1.  After you apply the CGU custom resource, {{ cgu_operator }} rolls out the configuration policies in order. Once all policies are compliant, it applies the reboot policy and triggers a reboot of all nodes in the specified `MachineConfigPool`.

**Verification**

1.  Monitor the CGU rollout status.

    You can monitor the rollout of the CGU custom resource on the hub by checking the status. Verify the successful rollout of the reboot by running the following command:
    ```terminal
    oc get cgu -A
    ```
    ```terminal title="Example output"
    NAMESPACE   NAME     AGE   STATE       DETAILS
    default     reboot   1d    Completed   All clusters are compliant with all the managed policies
    ```
1.  Verify successful reboot on a specific node.

    To confirm that the reboot was successful on a specific node, check the status of the `MachineConfigPool` (MCP) for the node by running the following command:
    ```terminal
    oc get mcp master

    ```
    ```terminal title="Example output"
    NAME     CONFIG                                             UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master   rendered-master-be5785c3b98eb7a1ec902fef2b81e865   True      False      False      3              3                   3                     0                      72d
    ```