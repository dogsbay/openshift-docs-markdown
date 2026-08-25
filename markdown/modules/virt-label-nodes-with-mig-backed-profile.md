{%- set _mod_docs_content_type = "PROCEDURE" %}
# Labeling nodes with a MIG-backed vGPU profile {id="virt-label-nodes-with-mig-backed-profile_{{ context }}"}

If you have GPUs that support NVIDIA Multi-Instance GPU (MIG), you can select a MIG-backed vGPU instance instead of time-sliced vGPU instances. When you use MIG, you give a partition of dedicated hardware to selected VMs. {._abstract}

**Prerequisites**

*   You have configured vGPU support.
*   You have the NVIDIA GPU Operator version 25.10 or higher.
*   You are using the NVIDIA AI Enterprise (AIE) vGPU Manager image.

**Procedure**

*   Label the node with the name of the MIG-backed vGPU profile:
    ```terminal
    $ oc label node <node> --overwrite nvidia.com/vgpu.config=<profile>
    ```
    *   Replace `<node>` with the fully qualified domain name (FQDN) of your compute node.
    *   Replace `<profile>` with a supported MIG profile.

        Example command:
        ```terminal
        $ oc label node worker_1 --overwrite nvidia.com/vgpu.config=A30-1-6C
        ```