{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring the GPU Operator {id="rdma-configuring-the-gpu-operator_{{ context }}"}

The GPU Operator automates the management of the NVIDIA drivers, device plugins for GPUs, the NVIDIA Container Toolkit, and other components required for GPU provisioning.  

**Prerequisites**

*   You have installed the GPU Operator.

**Procedure**

1.  Check that the Operator pod is running to look at the pods under the namespace by running the following command:
    ```terminal
    $ oc get pods -n nvidia-gpu-operator
    ```
    ```terminal title="Example output"
    NAME                          READY   STATUS    RESTARTS   AGE
    gpu-operator-b4cb7d74-zxpwq   1/1     Running   0          32s
    ```
1.  Create a GPU cluster policy custom resource file similar to the following example:
    ```yaml
    apiVersion: nvidia.com/v1
    kind: ClusterPolicy
    metadata:
      name: gpu-cluster-policy
    spec:
      vgpuDeviceManager:
        config:
          default: default
        enabled: true
      migManager:
        config:
          default: all-disabled
          name: default-mig-parted-config
        enabled: true
      operator:
        defaultRuntime: crio
        initContainer: {}
        runtimeClass: nvidia
        use_ocp_driver_toolkit: true
      dcgm:
        enabled: true
      gfd:
        enabled: true
      dcgmExporter:
        config:
          name: ''
        serviceMonitor:
          enabled: true
        enabled: true
      cdi:
        default: false
        enabled: false
      driver:
        licensingConfig:
          nlsEnabled: true
          configMapName: ''
        certConfig:
          name: ''
        rdma:
          enabled: false
        kernelModuleConfig:
          name: ''
        upgradePolicy:
          autoUpgrade: true
          drain:
            deleteEmptyDir: false
            enable: false
            force: false
            timeoutSeconds: 300
          maxParallelUpgrades: 1
          maxUnavailable: 25%
          podDeletion:
            deleteEmptyDir: false
            force: false
            timeoutSeconds: 300
          waitForCompletion:
            timeoutSeconds: 0
        repoConfig:
          configMapName: ''
        virtualTopology:
          config: ''
        enabled: true
        useNvidiaDriverCRD: false
        useOpenKernelModules: true
      devicePlugin:
        config:
          name: ''
          default: ''
        mps:
          root: /run/nvidia/mps
        enabled: true
      gdrcopy:
        enabled: true
      kataManager:
        config:
          artifactsDir: /opt/nvidia-gpu-operator/artifacts/runtimeclasses
      mig:
        strategy: single
      sandboxDevicePlugin:
        enabled: true
      validator:
        plugin:
          env:
            - name: WITH_WORKLOAD
              value: 'false'
      nodeStatusExporter:
        enabled: true
      daemonsets:
        rollingUpdate:
          maxUnavailable: '1'
        updateStrategy: RollingUpdate
      sandboxWorkloads:
        defaultWorkload: container
        enabled: false
      gds:
        enabled: true
        image: nvidia-fs
        version: 2.20.5
        repository: nvcr.io/nvidia/cloud-native
      vgpuManager:
        enabled: false
      vfioManager:
        enabled: true
      toolkit:
        installDir: /usr/local/nvidia
        enabled: true
    ```
1.  When the GPU `ClusterPolicy` custom resource has generated, create the resource on the cluster by running the following command:
    ```terminal
    $ oc create -f gpu-cluster-policy.yaml
    ```
    ```terminal title="Example output"
    clusterpolicy.nvidia.com/gpu-cluster-policy created
    ```
1.  Validate that the Operator is installed and running by running the following command: 
    ```terminal
    $ oc get pods -n nvidia-gpu-operator
    ```
    ```terminal title="Example output"
    NAME                                                  READY   STATUS      RESTARTS   AGE
    gpu-feature-discovery-d5ngn                           1/1     Running     0          3m20s
    gpu-feature-discovery-z42rx                           1/1     Running     0          3m23s
    gpu-operator-6bb4d4b4c5-njh78                         1/1     Running     0          4m35s
    nvidia-container-toolkit-daemonset-bkh8l              1/1     Running     0          3m20s
    nvidia-container-toolkit-daemonset-c4hzm              1/1     Running     0          3m23s
    nvidia-cuda-validator-4blvg                           0/1     Completed   0          106s
    nvidia-cuda-validator-tw8sl                           0/1     Completed   0          112s
    nvidia-dcgm-exporter-rrw4g                            1/1     Running     0          3m20s
    nvidia-dcgm-exporter-xc78t                            1/1     Running     0          3m23s
    nvidia-dcgm-nvxpf                                     1/1     Running     0          3m20s
    nvidia-dcgm-snj4j                                     1/1     Running     0          3m23s
    nvidia-device-plugin-daemonset-fk2xz                  1/1     Running     0          3m23s
    nvidia-device-plugin-daemonset-wq87j                  1/1     Running     0          3m20s
    nvidia-driver-daemonset-416.94.202410211619-0-ngrjg   4/4     Running     0          3m58s
    nvidia-driver-daemonset-416.94.202410211619-0-tm4x6   4/4     Running     0          3m58s
    nvidia-node-status-exporter-jlzxh                     1/1     Running     0          3m57s
    nvidia-node-status-exporter-zjffs                     1/1     Running     0          3m57s
    nvidia-operator-validator-l49hx                       1/1     Running     0          3m20s
    nvidia-operator-validator-n44nn                       1/1     Running     0          3m23s
    ```
1.  Optional: When you have verified the pods are running, remote shell into the NVIDIA driver daemonset pod and confirm that the NVIDIA modules are loaded. Specifically, ensure the `nvidia_peermem` is loaded. 
    ```terminal
    $ oc rsh -n nvidia-gpu-operator $(oc -n nvidia-gpu-operator get pod -o name -l app.kubernetes.io/component=nvidia-driver)
    sh-4.4# lsmod|grep nvidia
    ```
    ```terminal title="Example output"
    nvidia_fs             327680  0
    nvidia_peermem         24576  0
    nvidia_modeset       1507328  0
    video                  73728  1 nvidia_modeset
    nvidia_uvm           6889472  8
    nvidia               8810496  43 nvidia_uvm,nvidia_peermem,nvidia_fs,gdrdrv,nvidia_modeset
    ib_uverbs             217088  3 nvidia_peermem,rdma_ucm,mlx5_ib
    drm                   741376  5 drm_kms_helper,drm_shmem_helper,nvidia,mgag200
    ```
1.  Optional: Run the `nvidia-smi` utility to show the details about the driver and the hardware:
```terminal
sh-4.4# nvidia-smi 
```
    ```terminal title="Example output"
    Wed Nov  6 22:03:53 2024       
    +-----------------------------------------------------------------------------------------+
    | NVIDIA-SMI 550.90.07              Driver Version: 550.90.07      CUDA Version: 12.4     |
    |-----------------------------------------+------------------------+----------------------+
    | GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
    |                                         |                        |               MIG M. |
    |=========================================+========================+======================|
    |   0  NVIDIA A40                     On  |   00000000:61:00.0 Off |                    0 |
    |  0%   37C    P0             88W /  300W |       1MiB /  46068MiB |      0%      Default |
    |                                         |                        |                  N/A |
    +-----------------------------------------+------------------------+----------------------+
    |   1  NVIDIA A40                     On  |   00000000:E1:00.0 Off |                    0 |
    |  0%   28C    P8             29W /  300W |       1MiB /  46068MiB |      0%      Default |
    |                                         |                        |                  N/A |
    +-----------------------------------------+------------------------+----------------------+
                                                                                             
    +-----------------------------------------------------------------------------------------+
    | Processes:                                                                              |
    |  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
    |        ID   ID                                                               Usage      |
    |=========================================================================================|
    |  No running processes found                                                             |
    +-----------------------------------------------------------------------------------------+
    ```
1.  While you are still in the driver pod, set the GPU clock to maximum using the `nvidia-smi` command:
    ```terminal
    $ oc rsh -n nvidia-gpu-operator nvidia-driver-daemonset-416.94.202410172137-0-ndhzc
    sh-4.4# nvidia-smi -i 0 -lgc $(nvidia-smi -i 0 --query-supported-clocks=graphics --format=csv,noheader,nounits | sort -h | tail -n 1)
    ```
    ```terminal title="Example output"
    GPU clocks set to "(gpuClkMin 1740, gpuClkMax 1740)" for GPU 00000000:61:00.0
    All done.
    ```
    ```terminal
    sh-4.4# nvidia-smi -i 1 -lgc $(nvidia-smi -i 1 --query-supported-clocks=graphics --format=csv,noheader,nounits | sort -h | tail -n 1)
    ```
    ```terminal title="Example output"
    GPU clocks set to "(gpuClkMin 1740, gpuClkMax 1740)" for GPU 00000000:E1:00.0
    All done.
    ```
1.  Validate the resource is available from a node describe perspective by running the following command:
    ```terminal
    $ oc describe node -l node-role.kubernetes.io/worker=| grep -E 'Capacity:|Allocatable:' -A9
    ```
    ```terminal title="Example output"
    Capacity:
      cpu:                          128
      ephemeral-storage:            1561525616Ki
      hugepages-1Gi:                0
      hugepages-2Mi:                0
      memory:                       263596712Ki
      nvidia.com/gpu:               2
      pods:                         250
      rdma/rdma_shared_device_eth:  63
      rdma/rdma_shared_device_ib:   63
    Allocatable:
      cpu:                          127500m
      ephemeral-storage:            1438028263499
      hugepages-1Gi:                0
      hugepages-2Mi:                0
      memory:                       262445736Ki
      nvidia.com/gpu:               2
      pods:                         250
      rdma/rdma_shared_device_eth:  63
      rdma/rdma_shared_device_ib:   63
    --
    Capacity:
      cpu:                          128
      ephemeral-storage:            1561525616Ki
      hugepages-1Gi:                0
      hugepages-2Mi:                0
      memory:                       263596672Ki
      nvidia.com/gpu:               2
      pods:                         250
      rdma/rdma_shared_device_eth:  63
      rdma/rdma_shared_device_ib:   63
    Allocatable:
      cpu:                          127500m
      ephemeral-storage:            1438028263499
      hugepages-1Gi:                0
      hugepages-2Mi:                0
      memory:                       262445696Ki
      nvidia.com/gpu:               2
      pods:                         250
      rdma/rdma_shared_device_eth:  63
      rdma/rdma_shared_device_ib:   63
    ```