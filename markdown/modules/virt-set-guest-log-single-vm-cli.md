{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting guest system log access for a single VM with the CLI {id="virt-set-guest-log-single-vm-cli_{{ context }}"}

To troubleshoot a specific virtual machine (VM) without changing global settings, you can configure the guest system log access by editing the `VirtualMachine` CR.  {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the virtual machine manifest by running the following command:
    ```terminal
    $ oc edit vm <vm_name>
    ```
1.  Update the value of the `logSerialConsole` field. For example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
    spec:
      template:
        spec:
          domain:
            devices:
              logSerialConsole: true
    #...
    ```

    To enable access to the guest serial console log, set the `logSerialConsole` value to `true`.
1.  Apply the new configuration to the VM by running the following command:
    ```terminal
    $ oc apply vm <vm_name>
    ```
1.  Optional: If you edited a running VM, restart the VM to apply the new configuration. For example:
    ```terminal
    $ virtctl restart <vm_name> -n <namespace>
    ```