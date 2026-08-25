{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a shared device RDMA on RoCE {id="rdma-creating-shared-device-rdma-roce_{{ context }}"}

Create the workload pods for a shared device RDMA on RDMA over Converged Ethernet (RoCE) for the NVIDIA Network Operator and test the pod configuration.

The NVIDIA GPUDirect RDMA device is shared among pods on the {{ product_title }} worker node where the device is exposed. 

**Prerequisites**

*   Ensure that the Operator is running.
*   Delete the `NicClusterPolicy` custom resource (CR), if it exists. 

**Procedure**

1.  Generate custom pod resources:
    ```yaml
    $ cat <<EOF > rdma-eth-32-workload.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: rdma-eth-32-workload
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/networks: rdmashared-net
    spec:
      nodeSelector: 
        kubernetes.io/hostname: nvd-srv-32.nvidia.eng.rdu2.dc.redhat.com
      containers:
      - image: quay.io/edge-infrastructure/nvidia-tools:0.1.5
        name: rdma-eth-32-workload
        resources:
          limits:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_eth: 1
          requests:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_eth: 1

    EOF

    $ cat <<EOF > rdma-eth-33-workload.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: rdma-eth-33-workload
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/networks: rdmashared-net
    spec:
      nodeSelector: 
        kubernetes.io/hostname: nvd-srv-33.nvidia.eng.rdu2.dc.redhat.com
      containers:
      - image: quay.io/edge-infrastructure/nvidia-tools:0.1.5
        name: rdma-eth-33-workload
        securityContext:
          capabilities:
            add: [ "IPC_LOCK" ]
        resources:
          limits:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_eth: 1
          requests:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_eth: 1
    EOF
    ```
1.  Create the pods on the cluster by using the following commands:
    ```terminal
    $ oc create -f rdma-eth-32-workload.yaml
    ```
    ```terminal title="Example output"
    pod/rdma-eth-32-workload created
    ```
    ```terminal
    $ oc create -f rdma-eth-33-workload.yaml
    ```
    ```terminal title="Example output"
    pod/rdma-eth-33-workload created
    ```
1.  Verify that the pods are running by using the following command:
    ```terminal
    $ oc get pods -n default
    ```
    ```terminal title="Example output"
    NAME                   READY   STATUS    RESTARTS   AGE
    rdma-eth-32-workload   1/1     Running   0          25s
    rdma-eth-33-workload   1/1     Running   0          22s
    ```