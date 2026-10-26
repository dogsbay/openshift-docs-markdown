{%- set _mod_docs_content_type = "PROCEDURE" %}
# Increase the per-node subnet size {id="nw-hostprefix-increase-procedure_{{ context }}"}

To increase the number of pod IP addresses available per node, enlarge each node’s OVN-Kubernetes pod subnet by updating the `k8s.ovn.org/node-subnets` annotation on the node while the Cluster Version Operator (CVO) and Cluster Network Operator (CNO) are scaled down. {._abstract}


:::important

*   This workflow increases per-node subnets only. Complete this workflow in a representative non-production environment before you apply it to production.
*   On {{ product_title }} 4.22 and later, including 5.0, scaling the network operator to `0` replicas is not enough. The CVO reconciles the network operator deployment back to `1` replica unless you also scale the CVO to `0` first.
*   Choose target subnets that do not overlap. Enlarging a `/23` to a `/21` can collide with another node’s existing allocation; if that happens, select a non-overlapping `/21` block from the cluster network CIDR.
*   If your workloads require modified drain behavior, adjust the `oc adm drain` options. Review the "Node drain options for hostPrefix changes" reference before you execute node maintenance.

:::


**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in with a user that has `cluster-admin` privileges.
*   Your cluster uses the OVN-Kubernetes network plugin.
*   You have verified that the target per-node prefix and cluster CIDR provide sufficient address capacity for your node count.
*   You have reviewed workload disruption risks and validated node maintenance windows.
*   If you intend to schedule a higher pod density after the subnet change, you have planned a `KubeletConfig` that sets appropriate `maxPods` and `podPidsLimit` values for the target machine config pool.

**Procedure**

1.  Record the current per-node subnet annotations by entering the following command:
    ```terminal
    $ oc get nodes -o custom-columns='NAME:.metadata.name,SUBNET:.metadata.annotations.k8s\.ovn\.org/node-subnets'
    ```
    ```terminal title="Example output"
    NAME                                         SUBNET
    ip-10-0-26-42.us-west-2.compute.internal     {"default":["10.131.0.0/23"]}
    ip-10-0-42-58.us-west-2.compute.internal     {"default":["10.128.2.0/23"]}
    ```
1.  Scale the CVO to `0` replicas so that it cannot reconcile the network operator during the change:
    ```terminal
    $ oc -n openshift-cluster-version scale deployment/cluster-version-operator --replicas=0
    ```
1.  Scale the network operator to `0` replicas and wait until it is no longer available:
    ```terminal
    $ oc -n openshift-network-operator scale deployment/network-operator --replicas=0
    ```
    ```terminal
    $ oc -n openshift-network-operator wait deployment/network-operator --for=condition=Available=false --timeout=60s
    ```
1.  For each node that requires a larger per-node subnet, complete the following steps one node at a time:
    1.  Drain the node by entering the following command:
        ```terminal
        $ oc adm drain <node_name> --ignore-daemonsets --delete-emptydir-data --force
        ```

        where:

        `<node_name>`
        :   Specifies the name of the node to update.
    1.  Display the current `k8s.ovn.org/node-subnets` annotation for the node by entering the following command:
        ```terminal
        $ oc get node <node_name> -o jsonpath='{.metadata.annotations.k8s\.ovn\.org/node-subnets}{"\n"}'
        ```
        ```terminal title="Example output"
        {"default":["10.131.0.0/23"]}
        ```
    1.  Update the annotation to the target prefix length by entering the following command:
        ```terminal
        $ oc annotate node <node_name> --overwrite \
          k8s.ovn.org/node-subnets='{"default":["10.131.0.0/21"]}'
        ```

        where:

        `<node_name>`
        :   Specifies the name of the node to update.

        `10.131.0.0/21`
        :   Specifies the enlarged per-node subnet for this node. Replace this value with the correct subnet for the node you are updating. Keep the same network address unless that `/21` block would overlap another node; in that case, choose a non-overlapping block from the cluster network CIDR.
    1.  Identify the `ovnkube-node` pod on the node by entering the following command:
        ```terminal
        $ OVN_POD=$(oc -n openshift-ovn-kubernetes get pods \
          --field-selector spec.nodeName=<node_name> \
          -l app=ovnkube-node -o jsonpath='{.items[0].metadata.name}')
        ```
    1.  Delete the `ovnkube-node` pod so that OVN-Kubernetes reloads the updated subnet by entering the following command:
        ```terminal
        $ oc -n openshift-ovn-kubernetes delete pod ${OVN_POD}
        ```
    1.  After the pod restarts, verify that the OVN northbound logical switch uses the enlarged subnet by entering the following commands:
        ```terminal
        $ OVN_POD=$(oc -n openshift-ovn-kubernetes get pods \
          --field-selector spec.nodeName=<node_name> \
          -l app=ovnkube-node -o jsonpath='{.items[0].metadata.name}')
        ```
        ```terminal
        $ oc -n openshift-ovn-kubernetes get pod ${OVN_POD}
        ```
        ```terminal
        $ oc rsh -n openshift-ovn-kubernetes ${OVN_POD} \
          ovn-nbctl find logical_switch name=<node_name>
        ```

        Confirm that the logical switch subnet matches the annotated `/21` or your custom value before you continue.
    1.  Uncordon the node by entering the following command:
        ```terminal
        $ oc adm uncordon <node_name>
        ```
    1.  Confirm that the node is `Ready` and that critical workloads can schedule before you process the next node.
1.  After every required node is updated, scale the network operator back to `1` replica:
    ```terminal
    $ oc -n openshift-network-operator scale deployment/network-operator --replicas=1
    ```
1.  Scale the CVO back to `1` replica:
    ```terminal
    $ oc -n openshift-cluster-version scale deployment/cluster-version-operator --replicas=1
    ```
1.  Optional: If you need higher pod density after enlarging the per-node subnets, apply a `KubeletConfig` to the target machine config pool and wait for the pool to update. The following example configures worker nodes:
    ```terminal
    $ oc label machineconfigpool worker custom-kubelet=config-worker --overwrite
    ```
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: machineconfiguration.openshift.io/v1
    kind: KubeletConfig
    metadata:
      name: set-allocatable-worker
    spec:
      autoSizingReserved: true
      kubeletConfig:
        containerLogMaxFiles: 7
        podPidsLimit: 8192
        containerLogMaxSize: 100Mi
        maxPods: 2500
      machineConfigPoolSelector:
        matchLabels:
          custom-kubelet: config-worker
    EOF
    ```

    Adjust `maxPods`, `podPidsLimit`, and the machine config pool selector for your environment. Wait until the selected nodes reboot and the machine config pool reports an updated state before you continue.

**Verification**

1.  Confirm that each updated node still has the enlarged subnet annotation:
    ```terminal
    $ oc get nodes -o custom-columns='NAME:.metadata.name,SUBNET:.metadata.annotations.k8s\.ovn\.org/node-subnets'
    ```
    ```terminal title="Example output"
    NAME                                         SUBNET
    ip-10-0-26-42.us-west-2.compute.internal     {"default":["10.131.0.0/21"]}
    ip-10-0-42-58.us-west-2.compute.internal     {"default":["10.128.2.0/21"]}
    ```
1.  Confirm that the network operator and CVO are available again:
    ```terminal
    $ oc get co network cluster-version
    ```
1.  Verify critical workloads and pod scheduling behavior. If you completed the optional `KubeletConfig` step, confirm that new pods receive addresses from the enlarged per-node subnets.

    :::note

    The cluster `Network.config.openshift.io` object might continue to report the original `hostPrefix` value. That is expected for this workflow. The effective per-node subnet size is the value in the `k8s.ovn.org/node-subnets` annotation and in the OVN northbound logical switch, not a patched `spec.clusterNetwork[].hostPrefix` field.
    
    :::