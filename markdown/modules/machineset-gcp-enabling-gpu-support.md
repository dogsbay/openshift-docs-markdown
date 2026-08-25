{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling GPU support for a compute machine set {id="machineset-gcp-enabling-gpu-support_{{ context }}"}

Use the {{ gcp_first }} Compute Engine to add GPUs to Virtual Machine (VM) instances. Workloads that benefit from access to GPU resources can perform better on compute machines with this feature enabled. {{ product_title }} on {{ gcp_short }} supports NVIDIA GPU models in the A2 and N1 machine series. {._abstract}

**Supported GPU configurations**

<table>
<thead>
<tr>
  <th>Model name</th>
  <th>GPU type</th>
  <th>Machine types <sup>[1]</sup></th>
</tr>
</thead>
<tbody>
<tr>
  <td>NVIDIA A100</td>
  <td><code>nvidia-tesla-a100</code></td>
  <td><ul><li><code>a2-highgpu-1g</code></li><li><code>a2-highgpu-2g</code></li><li><code>a2-highgpu-4g</code></li><li><code>a2-highgpu-8g</code></li><li><code>a2-megagpu-16g</code></li></ul></td>
</tr>
<tr>
  <td>NVIDIA K80</td>
  <td><code>nvidia-tesla-k80</code></td>
  <td rowspan="5"><ul><li><code>n1-standard-1</code></li><li><code>n1-standard-2</code></li><li><code>n1-standard-4</code></li><li><code>n1-standard-8</code></li><li><code>n1-standard-16</code></li><li><code>n1-standard-32</code></li><li><code>n1-standard-64</code></li><li><code>n1-standard-96</code></li><li><code>n1-highmem-2</code></li><li><code>n1-highmem-4</code></li><li><code>n1-highmem-8</code></li><li><code>n1-highmem-16</code></li><li><code>n1-highmem-32</code></li><li><code>n1-highmem-64</code></li><li><code>n1-highmem-96</code></li><li><code>n1-highcpu-2</code></li><li><code>n1-highcpu-4</code></li><li><code>n1-highcpu-8</code></li><li><code>n1-highcpu-16</code></li><li><code>n1-highcpu-32</code></li><li><code>n1-highcpu-64</code></li><li><code>n1-highcpu-96</code></li></ul></td>
</tr>
<tr>
  <td>NVIDIA P100</td>
  <td><code>nvidia-tesla-p100</code></td>
</tr>
<tr>
  <td>NVIDIA P4</td>
  <td><code>nvidia-tesla-p4</code></td>
</tr>
<tr>
  <td>NVIDIA T4</td>
  <td><code>nvidia-tesla-t4</code></td>
</tr>
<tr>
  <td>NVIDIA V100</td>
  <td><code>nvidia-tesla-v100</code></td>
</tr>
</tbody>
</table>

1.  For more information about machine types, including specifications, compatibility, regional availability, and limitations, see the {{ gcp_short }} Compute Engine documentation about [N1 machine series](https://cloud.google.com/compute/docs/general-purpose-machines#n1_machines), [A2 machine series](https://cloud.google.com/compute/docs/accelerator-optimized-machines#a2_vms), and [GPU regions and zones availability](https://cloud.google.com/compute/docs/gpus/gpu-regions-zones#gpu_regions_and_zones).

You can define which supported GPU to use for an instance by using the Machine API.

You can configure machines in the N1 machine series to deploy with one of the supported GPU types. Machines in the A2 machine series come with associated GPUs, and cannot use guest accelerators.


:::note

GPUs for graphics workloads are not supported.

:::


**Procedure**

1.  In a text editor, open the YAML file for an existing compute machine set or create a new one.
1.  Specify a GPU configuration under the `providerSpec` field in your compute machine set YAML file. See the following examples of valid configurations:
    ```yaml title="Example configuration for the A2 machine series"
      providerSpec:
        value:
          machineType: a2-highgpu-1g
          onHostMaintenance: Terminate
          restartPolicy: Always
    ```

    where

    `spec.template.spec.providerSpec.value.machineType`
    :   Specifies the machine type. Ensure that the machine type is included in the A2 machine series.

    `spec.template.spec.providerSpec.value.onHostMaintenance`
    :   Sets `onHostMaintenance` to `Terminate`. When using GPU support, you must set `onHostMaintenance` to `Terminate`.

    `spec.template.spec.providerSpec.value.restartPolicy`
    :   Specifies the restart policy for machines deployed by the compute machine set. The allowed values are `Always` or `Never`.
    ```yaml title="Example configuration for the N1 machine series"
    providerSpec:
      value:
        gpus:
        - count: 1
          type: nvidia-tesla-p100
        machineType: n1-standard-1
        onHostMaintenance: Terminate
        restartPolicy: Always
    ```

    where

    `spec.template.spec.providerSpec.value.gpus.count`
    :   Specifies the number of GPUs to attach to the machine.

    `spec.template.spec.providerSpec.value.gpus.type`
    :   Specifies the type of GPUs to attach to the machine. Ensure that the machine type and GPU type are compatible.

    `spec.template.spec.providerSpec.value.machineType`
    :   Specifies the machine type. Ensure that the machine type and GPU type are compatible.

    `spec.template.spec.providerSpec.value.onHostMaintenance`
    :   Sets `onHostMaintenance` to `Terminate`. When using GPU support, you must set `onHostMaintenance` to `Terminate`.

    `spec.template.spec.providerSpec.value.restartPolicy`
    :   Specifies the restart policy for machines deployed by the compute machine set. The allowed values are `Always` or `Never`.