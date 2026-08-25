{%- set _mod_docs_content_type = "PROCEDURE" %}
# Controlling DNS pod placement {id="nw-controlling-dns-pod-placement_{{ context }}"}

Control where CoreDNS and node-resolver pods run by using taints, tolerations, and selectors. {._abstract}

The DNS Operator has two daemon sets: one for CoreDNS called `dns-default` and one for managing the `/etc/hosts` file called `node-resolver`.

You can assign and run CoreDNS pods on specified nodes. For example, if the cluster administrator has configured security policies that prohibit communication between pairs of nodes, you can configure CoreDNS pods to run on a restricted set of nodes.

DNS service is available to all pods if the following circumstances are true:

*   DNS pods are running on some nodes in the cluster.
*   The nodes on which DNS pods are not running have network connectivity to nodes on which DNS pods are running,

The `node-resolver` daemon set must run on every node host because it adds an entry for the cluster image registry to support pulling images. The `node-resolver` pods have only one job: to look up the `image-registry.openshift-image-registry.svc` service’s cluster IP address and add it to `/etc/hosts` on the node host so that the container runtime can resolve the service name.

As a cluster administrator, you can use a custom node selector to configure the daemon set for CoreDNS to run or not run on certain nodes.

**Prerequisites**

*   You installed the `oc` CLI.
*   You are logged in to the cluster as a user with `cluster-admin` privileges.
*   Your DNS Operator `managementState` is set to `Managed`.

**Procedure**

*   To allow the daemon set for CoreDNS to run on certain nodes, configure a taint and toleration:
    1.  Set a taint on the nodes that you want to control DNS pod placement by entering the following command:
        ```terminal
        $ oc adm taint nodes <node_name> dns-only=abc:NoExecute
        ```
        *   Replace `<node_name>` with the actual name of the node.
    1.  Modify the DNS Operator object named `default` to include the corresponding toleration by entering the following command:
        ```terminal
        $ oc edit dns.operator/default
        ```
    1.  Specify a taint key and a toleration for the taint. The following toleration matches the taint set on the nodes.
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: DNS
        metadata:
          name: default
        spec:
          nodePlacement:
            tolerations:
            - effect: NoExecute
              key: "dns-only"
              operator: Equal
              value: abc
              tolerationSeconds: 3600
        ```
        *   If the `key` field is set to `dns-only`, it can be tolerated indefinitely.
        *   The `tolerationSeconds` field is optional.
    1.  Optional: To specify node placement using a node selector, modify the default DNS Operator:
        1.  Edit the DNS Operator object named `default` to include a node selector:
            ```yaml
            apiVersion: operator.openshift.io/v1
            kind: DNS
            metadata:
              name: default
            spec:
              nodePlacement:
                nodeSelector:
                  node-role.kubernetes.io/control-plane: ""
            ```
            *   The `spec.nodePlacement.nodeSelector` field in the example ensures that the CoreDNS pods run only on control plane nodes.