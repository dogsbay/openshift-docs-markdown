{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting an incorrect node network configuration policy configuration {id="virt-troubleshooting-incorrect-policy-config_{{ context }}"}

You can apply changes to the node network configuration across your entire cluster by applying a node network configuration policy. If you applied an incorrect configuration, you can use the following example to troubleshoot and correct the failed node network policy. {._abstract}

The example attempts to apply a Linux bridge policy to a cluster that has three control plane nodes and three compute nodes. The policy is not applied because the policy references the wrong interface. 

To find an error, you need to investigate the available NMState resources. You can then update the policy with the correct configuration.

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You ensured that an `ens01` interface does not exist on your Linux system.

**Procedure**

1.  Create a policy on your cluster. The following example creates a simple bridge, `br1` that has `ens01` as its member:
    ```yaml
    apiVersion: nmstate.io/v1
    kind: NodeNetworkConfigurationPolicy
    metadata:
      name: ens01-bridge-testfail
    spec:
      desiredState:
        interfaces:
          - name: br1
            description: Linux bridge with the wrong port
            type: linux-bridge
            state: up
            ipv4:
              dhcp: true
              enabled: true
            bridge:
              options:
                stp:
                  enabled: false
              port:
                - name: ens01
    # ...
    ```
1.  Apply the policy to your network interface:
    ```terminal
    $ oc apply -f ens01-bridge-testfail.yaml
    ```

    Example output:
    ```terminal
    nodenetworkconfigurationpolicy.nmstate.io/ens01-bridge-testfail created
    ```
1.  Verify the status of the policy by running the following command:
    ```terminal
    $ oc get nncp
    ```

    The output shows that the policy failed:
    ```terminal
    NAME                    STATUS
    ens01-bridge-testfail   FailedToConfigure
    ```

    The policy status alone does not indicate if it failed on all nodes or a subset of nodes.
1.  List the node network configuration enactments to see if the policy was successful on any of the nodes. If the policy failed for only a subset of nodes, the output suggests that the problem is with a specific node configuration. If the policy failed on all nodes, the output suggests that the problem is with the policy.
    ```terminal
    $ oc get nnce
    ```

    The output shows that the policy failed on all nodes:
    ```terminal
    NAME                                         STATUS
    control-plane-1.ens01-bridge-testfail        FailedToConfigure
    control-plane-2.ens01-bridge-testfail        FailedToConfigure
    control-plane-3.ens01-bridge-testfail        FailedToConfigure
    compute-1.ens01-bridge-testfail              FailedToConfigure
    compute-2.ens01-bridge-testfail              FailedToConfigure
    compute-3.ens01-bridge-testfail              FailedToConfigure
    ```
1.  View one of the failed enactments. The following command uses the output tool `jsonpath` to filter the output:
    ```terminal
    $ oc get nnce compute-1.ens01-bridge-testfail -o jsonpath='{.status.conditions[?(@.type=="Failing")].message}'
    ```

    Example output:
    ```terminal
    [2024-10-10T08:40:46Z INFO  nmstatectl] Nmstate version: 2.2.37
    NmstateError: InvalidArgument: Controller interface br1 is holding unknown port ens01
    ```

    The previous example shows the output from an `InvalidArgument` error that indicates that the `ens01` is an unknown port. For this example, you might need to change the port configuration in the policy configuration file.
1.  To ensure that the policy is configured properly, view the network configuration for one or all of the nodes by requesting the `NodeNetworkState` object. The following command returns the network configuration for the `control-plane-1` node:
    ```
    $ oc get nns control-plane-1 -o yaml
    ```

    The output shows that the interface name on the nodes is `ens1` but the failed policy incorrectly uses `ens01`:
    ```yaml
       - ipv4:
    # ...
          name: ens1
          state: up
          type: ethernet
    ```
1.  Correct the error by editing the existing policy:
    ```terminal
    $ oc edit nncp ens01-bridge-testfail
    ```
    ```yaml
    # ...
              port:
                - name: ens1
    ```

    Save the policy to apply the correction.
1.  Check the status of the policy to ensure it updated successfully:
    ```terminal
    $ oc get nncp
    ```

    Example output:
    ```terminal
    NAME                    STATUS
    ens01-bridge-testfail   SuccessfullyConfigured
    ```

    The updated policy is successfully configured on all nodes in the cluster.