{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a shared device RDMA on Infiniband {id="rdma-creating-shared-device-rdma-ib_{{ context }}"}

Create the workload pods for a shared device Remote Direct Memory Access (RDMA) for an Infiniband installation.

**Procedure**

1.  Generate custom pod resources:
    ```yaml
    $ cat <<EOF > rdma-ib-32-workload.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: rdma-ib-32-workload
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/networks: example-ipoibnetwork
    spec:
      nodeSelector: 
        kubernetes.io/hostname: nvd-srv-32.nvidia.eng.rdu2.dc.redhat.com
      containers:
      - image: quay.io/edge-infrastructure/nvidia-tools:0.1.5
        name: rdma-ib-32-workload
        resources:
          limits:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_ib: 1
          requests:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_ib: 1
    EOF

    $ cat <<EOF > rdma-ib-32-workload.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: rdma-ib-33-workload
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/networks: example-ipoibnetwork
    spec:
      nodeSelector: 
        kubernetes.io/hostname: nvd-srv-33.nvidia.eng.rdu2.dc.redhat.com
      containers:
      - image: quay.io/edge-infrastructure/nvidia-tools:0.1.5
        name: rdma-ib-33-workload
        securityContext:
          capabilities:
            add: [ "IPC_LOCK" ]
        resources:
          limits:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_ib: 1
          requests:
            nvidia.com/gpu: 1
            rdma/rdma_shared_device_ib: 1
    EOF
    ```
1.  Create the pods on the cluster by using the following commands:
    ```terminal
    $ oc create -f rdma-ib-32-workload.yaml
    ```
    ```terminal title="Example output"
    pod/rdma-ib-32-workload created
    ```
    ```terminal
    $ oc create -f rdma-ib-33-workload.yaml
    ```
    ```terminal title="Example output"
    pod/rdma-ib-33-workload created
    ```
1.  Verify that the pods are running by using the following command:
    ```terminal
    $ oc get pods 
    ```
    ```terminal title="Example output"
    NAME                  READY   STATUS    RESTARTS   AGE
    rdma-ib-32-workload   1/1     Running   0          10s
    rdma-ib-33-workload   1/1     Running   0          3s
    ```