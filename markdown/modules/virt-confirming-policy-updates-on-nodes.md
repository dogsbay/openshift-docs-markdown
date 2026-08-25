{%- set _mod_docs_content_type = "PROCEDURE" %}
# Confirming node network policy updates on nodes {id="virt-confirming-policy-updates-on-nodes_{{ context }}"}

When you apply a node network policy, a `NodeNetworkConfigurationEnactment` object is created for every node in the cluster. The node network configuration enactment is a read-only object that represents the status of execution of the policy on that node. {._abstract}

If the policy fails to be applied on the node, the enactment for that node includes a traceback for troubleshooting.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  To confirm that a policy has been applied to the cluster, list the policies and their status:
    ```terminal
    $ oc get nncp
    ```
1.  Optional: If a policy is taking longer than expected to successfully configure, you can inspect the requested state and status conditions of a particular policy:
    ```terminal
    $ oc get nncp <policy> -o yaml
    ```
1.  Optional: If a policy is taking longer than expected to successfully configure on all nodes, you can list the status of the enactments on the cluster:
    ```terminal
    $ oc get nnce
    ```
1.  Optional: To view the configuration of a particular enactment, including any error reporting for a failed configuration:
    ```terminal
    $ oc get nnce <node>.<policy> -o yaml
    ```