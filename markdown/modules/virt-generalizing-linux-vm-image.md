{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generalizing a VM image {id="virt-generalizing-linux-vm-image_{{ context }}"}

You can generalize a {{ op_system_base_full }} image to remove all system-specific configuration data before you use the image to create a boot source image, a preconfigured snapshot of a virtual machine (VM). You can use a boot source image to deploy new VMs. {._abstract}

You can generalize a {{ op_system_base }} VM by using the `virtctl`, `guestfs`, and `virt-sysprep` tools.

**Prerequisites**

*   You have a {{ op_system_base }} virtual machine (VM) to use as a base VM.
*   You have installed the OpenShift CLI (`oc`).
*   You have installed the `virtctl` tool.

**Procedure**

1.  Stop the {{ op_system_base }} VM if it is running, by entering the following command:
    ```terminal
    $ virtctl stop <my_vm_name>
    ```
1.  Optional: Clone the virtual machine to avoid losing the data from your original VM. You can then generalize the cloned VM.
1.  Retrieve the `dataVolume` that stores the root filesystem for the VM by running the following command:
    ```terminal
    $ oc get vm <my_vm_name> -o jsonpath="{.spec.template.spec.volumes}{'\n'}"
    ```

    Example output:
    ```terminal
    [{"dataVolume":{"name":"<my_vm_volume>"},"name":"rootdisk"},{"cloudInitNoCloud":{...}]
    ```
1.  Retrieve the persistent volume claim (PVC) that matches the listed `dataVolume` by running the followimg command:
    ```terminal
    $ oc get pvc
    ```

    Example output:
    ```terminal
    NAME            STATUS   VOLUME  CAPACITY   ACCESS MODES  STORAGECLASS     AGE
    <my_vm_volume> Bound  …
    ```

    :::note

    If your cluster configuration does not enable you to clone a VM, to avoid losing the data from your original VM, you can clone the VM PVC to a data volume instead. You can then use the cloned PVC to create a boot source image.

    If you are creating a boot source image by cloning a PVC, continue with the next steps, using the cloned PVC.
    
    :::

1.  Deploy a new interactive container with `libguestfs-tools` and attach the PVC to it by running the following command:
    ```terminal
    $ virtctl guestfs <my-vm-volume> --uid 107
    ```

    This command opens a shell for you to run the next command.
1.  Remove all configurations specific to your system by running the following command:
    ```terminal
    $ virt-sysprep -a disk.img
    ```
1.  In the {{ product_title }} console, click **Virtualization** -> **Catalog**.
1.  Click **Add volume**.
1.  In the **Add volume** window:
    1.  From the **Source type** list, select **Use existing Volume**.
    1.  From the **Volume project** list, select your project. 
    1.  From the **Volume name** list, select the correct PVC.
    1.  In the **Volume name** field, enter a name for the new boot source image.
    1.  From the **Preference** list, select the {{ op_system_base }} version you are using.
    1.  From the **Default Instance Type** list, select the instance type with the correct CPU and memory requirements for the version of {{ op_system_base }} you selected previously.
    1.  Heterogeneous clusters only: From the **Architecture** list, select the architecture that corresponds with the selected volume.
    1.  Click **Save**.

**Result**

The new volume appears in the **Select volume to boot from** list. This is your new boot source image. You can use this volume to create new VMs.