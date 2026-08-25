{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the NVIDIA GPU Operator {id="using-nvidia-gpu_{{ context }}"}

You can use the NVIDIA GPU Operator to provision worker nodes for running GPU-accelerated virtual machines (VMs) in {{ VirtProductName }}. {._abstract}

The NVIDIA GPU Operator manages NVIDIA GPU resources in an {{ product_title }} cluster and automates tasks when preparing nodes for GPU workloads.
The NVIDIA GPU Operator can also facilitate provisioning complex artificial intelligence and machine learning (AI/ML) workloads.


:::note

You can get support for the NVIDIA GPU Operator through NVIDIA. For more information, see "Obtaining Support from NVIDIA" in the Red&#160;Hat Knowledgebase.

:::


**Procedure**

1.  Configure your `ClusterPolicy` manifest. Your `ClusterPolicy` manifest must match the provided example:
    ```yaml
    apiVersion: nvidia.com/v1
    kind: ClusterPolicy
    metadata:
      name: gpu-cluster-policy
    spec:
      daemonsets:
        updateStrategy: RollingUpdate
      dcgm:
        enabled: true
      dcgmExporter: {}
      devicePlugin: {}
      driver:
        enabled: false
        kernelModuleType: auto
      gfd: {}
      mig:
        strategy: single
      migManager:
        enabled: true
      nodeStatusExporter:
        enabled: true
      operator:
        defaultRuntime: crio
        initContainer: {}
        runtimeClass: nvidia
        use_ocp_driver_toolkit: true
      sandboxDevicePlugin:
        enabled: true
      sandboxWorkloads:
        defaultWorkload: vm-vgpu
        enabled: true
      toolkit:
        enabled: true
        installDir: /usr/local/nvidia
      validator:
        plugin:
          env:
          - name: WITH_WORKLOAD
            value: "true"
      vfioManager:
        enabled: true
      vgpuDeviceManager:
        config:
          default: default
          name: vgpu-devices-config
        enabled: true
      vgpuManager:
        enabled: true
        image: <vgpu_image_name>
        repository: <vgpu_container_registry>
        version: <nvidia_vgpu_manager_version>
    ```

    where:

    `<vgpu_image_name>`
    :   Specifies the vGPU image name.

    `<vgpu_container_registry>`
    :   Specifies the vGPU container registry value.

    `<nvidia_vgpu_manager_version>`
    :   Specifies the version of the vGPU driver you have downloaded from the NVIDIA website and used to build the image.

1.  Use the NVIDIA GPU Operator to configure mediated devices. For more information see [NVIDIA GPU Operator with OpenShift Virtualization](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/openshift-virtualization.html).