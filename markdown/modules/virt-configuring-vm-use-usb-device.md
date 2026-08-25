{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting a USB device to a virtual machine {id="virt-configuring-vm-use-usb-device_{{ context }}"}

You can configure virtual machine (VM) access to a USB device. This configuration enables the VM to connect to USB hardware that is attached to an {{ product_title }} node, as if the hardware and the VM are physically connected. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have attached the required USB device as a resource at the cluster level.

**Procedure**

1.  In the `HyperConverged` custom resource (CR), find the assigned resource name of the USB device:
    ```terminal
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```

    Example output:
    ```yaml
    # ...
      spec:
        permittedHostDevices:
          usbHostDevices:
            - resourceName: kubevirt.io/peripherals
              selectors:
                - vendor: "045e"
                  product: "07a5"
                - vendor: "062a"
                  product: "4102"
                - vendor: "072f"
                  product: "b100"
    ```
1.  Open the VM CR:
    ```terminal
    $ oc edit vm <vm_name>
    ```

    where:

    `<vm_name>`
    :   Specifies the name of the `VirtualMachine` CR.

1.  Edit the CR by adding the USB device, as shown in the following example:

    Example configuration:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
    spec:
      template:
        spec:
          architecture: amd64
          domain:
            devices:
              hostDevices:
              - deviceName: kubevirt.io/peripherals
                name: local-peripherals
    # ...
    ```
    *   `spec.template.spec.domain.devices.hostDevices.deviceName` specifies the resource name from the `HyperConverged` CR.
    *   `spec.template.spec.domain.devices.hostDevices.name` defines the name of the USB device.
1.  Save and apply your changes:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    where:

    `<filename>`
    :   Specifies the name of the `VirtualMachine` manifest YAML file.