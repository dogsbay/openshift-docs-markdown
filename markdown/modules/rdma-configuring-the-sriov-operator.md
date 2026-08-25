{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring the SR-IOV Operator {id="rdma-configuring-the-sriov-operator_{{ context }}"}

Single root I/O virtualization (SR-IOV) enhances the performance of NVIDIA GPUDirect RDMA by providing sharing across multiple pods from a single device. 

**Prerequisites**

*   You have installed the SR-IOV Operator.

**Procedure**

1.  Validate that the Operator is installed and running by looking at the pods in the `openshift-sriov-network-operator` namespace by running the following command:
    ```terminal
    $ oc get pods -n openshift-sriov-network-operator
    ```
    ```terminal title="Example output"
    NAME                                      READY   STATUS    RESTARTS   AGE
    sriov-network-operator-7cb6c49868-89486   1/1     Running   0          22s
    ```
1.  For the default `SriovOperatorConfig` CR to work with the MLNX_OFED container, run this command to update the following values:
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovOperatorConfig
    metadata:
      name: default
      namespace: openshift-sriov-network-operator
    spec:
      enableInjector: true
      enableOperatorWebhook: true
      logLevel: 2
    ```
1.  Create the resource on the cluster by running the following command:
    ```terminal
    $ oc create -f sriov-operator-config.yaml 
    ```
    ```terminal title="Example output"
    sriovoperatorconfig.sriovnetwork.openshift.io/default created
    ```
1.  Patch the sriov-operator so the MOFED container can work with it by running the following command:
    ```terminal
    $ oc patch sriovoperatorconfig default   --type=merge -n openshift-sriov-network-operator   --patch '{ "spec": { "configDaemonNodeSelector": { "network.nvidia.com/operator.mofed.wait": "false", "node-role.kubernetes.io/worker": "", "feature.node.kubernetes.io/pci-15b3.sriov.capable": "true" } } }'
    ```
    ```terminal title="Example output"
    sriovoperatorconfig.sriovnetwork.openshift.io/default patched
    ```