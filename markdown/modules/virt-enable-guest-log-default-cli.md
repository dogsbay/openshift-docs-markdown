{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling default access to guest system logs with the CLI {id="virt-enable-guest-log-default-cli_{{ context }}"}

To troubleshoot issues more easily, you can enable default access to virtual machine (VM) guest system logs by editing the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Update the `disableSerialConsoleLog` value. For example:
    ```yaml
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      virtualMachineOptions:
        disableSerialConsoleLog: true
    #...
    ```

    Set the value of `disableSerialConsoleLog` to `false` if you want serial console access to be enabled on VMs by default.