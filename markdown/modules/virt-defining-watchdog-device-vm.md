{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a watchdog device for the virtual machine {id="virt-defining-watchdog-device-vm"}

You configure a watchdog device for the virtual machine (VM). {._abstract}

**Prerequisites**

*   For `x86` systems, the VM must use a kernel that works with the `i6300esb` watchdog device. If you use `s390x` architecture, the kernel must be enabled for `diag288`. {{ op_system_base_full }} images support `i6300esb` and `diag288`.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `YAML` file with the following contents:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      labels:
        kubevirt.io/vm: <vm-label>
      name: <vm-name>
    spec:
      runStrategy: Halted
      template:
        metadata:
          labels:
            kubevirt.io/vm: <vm-label>
        spec:
          domain:
            devices:
              watchdog:
                name: <watchdog>
                <watchdog-device-model>:
                  action: "poweroff"
    # ...
    ```
    *   `spec.template.spec.domain.devices.watchdog.name.<watchdog-device-model>` defines the watchdog device model to use. For `x86` specify `i6300esb`. For `s390x` specify `diag288`.
    *   `spec.template.spec.domain.devices.watchdog.name.<watchdog-device-model>.action` defines the watchdog device action. Specify `poweroff`, `reset`, or `shutdown`. The `shutdown` action requires that the guest virtual machine is responsive to ACPI signals. Using `shutdown` is not recommended.

        The example above configures the watchdog device on a VM with the `poweroff` action and exposes the device as `/dev/watchdog`.

        This device can now be used by the watchdog binary.
1.  Apply the YAML file to your cluster by running the following command:
    ```yaml
    $ oc apply -f <file_name>.yaml
    ```

**Verification**

1.  Run the following command to verify that the VM is connected to the watchdog device:

    :::important

    Verification steps are provided for testing watchdog functionality only and must not be run on production machines.
    
    :::

    ```terminal
    $ lspci | grep watchdog -i
    ```
1.  Run one of the following commands to confirm the watchdog is active:
    *   Trigger a kernel panic:
        ```terminal
        # echo c > /proc/sysrq-trigger
        ```
    *   Stop the watchdog service:
        ```terminal
        # pkill -9 watchdog
        ```