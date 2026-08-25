{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the Node Observability custom resource {id="creating-node-observability-custom-resource_{{ context }}"}

You must create and run the `NodeObservability` custom resource (CR) before you run the profiling query. When you run the `NodeObservability` CR, it creates the necessary machine config and machine config pool CRs to enable the CRI-O profiling on the worker nodes matching the `nodeSelector`. {._abstract}


:::important

If CRI-O profiling is not enabled on the worker nodes, the `NodeObservabilityMachineConfig` resource gets created. Worker nodes matching the `nodeSelector` specified in `NodeObservability` CR restarts. This might take 10 or more minutes to complete.

:::



:::note

Kubelet profiling is enabled by default.

:::


The CRI-O unix socket of the node is mounted on the agent pod, which allows the agent to communicate with CRI-O to run the pprof request. Similarly, the `kubelet-serving-ca` certificate chain is mounted on the agent pod, which allows secure communication between the agent and node’s kubelet endpoint.

**Prerequisites**

*   You have installed the Node Observability Operator.
*   You have installed the OpenShift CLI (oc).
*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Log in to the {{ product_title }} CLI by running the following command:
    ```terminal
    $ oc login -u kubeadmin https://<HOSTNAME>:6443
    ```
1.  Switch back to the `node-observability-operator` namespace by running the following command:
    ```terminal
    $ oc project node-observability-operator
    ```
1.  Create a CR file named `nodeobservability.yaml` that contains the following text:
    ```yaml
        apiVersion: nodeobservability.olm.openshift.io/v1alpha2
        kind: NodeObservability
        metadata:
          name: cluster
        spec:
          nodeSelector:
            kubernetes.io/hostname: <node_hostname>
          type: crio-kubelet
    ```

    where:

    `cluster`
    :   You must specify the name as `cluster` because there should be only one `NodeObservability` CR per cluster.

    `<node_hostname>`
    :   Specify the nodes on which the Node Observability agent must be deployed.

1.  Run the `NodeObservability` CR:
    ```terminal
    oc apply -f nodeobservability.yaml
    ```

    ```terminal title="Example output"
    nodeobservability.olm.openshift.io/cluster created
    ```
1.  Review the status of the `NodeObservability` CR by running the following command:
    ```terminal
    $ oc get nob/cluster -o yaml | yq '.status.conditions'
    ```

    ```terminal title="Example output"
    conditions:
      conditions:
      - lastTransitionTime: "2022-07-05T07:33:54Z"
        message: 'DaemonSet node-observability-ds ready: true NodeObservabilityMachineConfig
          ready: true'
        reason: Ready
        status: "True"
        type: Ready
    ```


    `NodeObservability` CR run is completed when the reason is `Ready` and the status is `True`.