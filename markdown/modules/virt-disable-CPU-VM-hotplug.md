{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adjusting or disabling the CPU hot plug by VM {id="virt-disable-CPU-VM-hotplug_{{ context }}"}

As a VM owner, you can adjust or disable the CPU hot plug for individual VMs.
This is the simplest solution for large, performance-critical VMs where you want to ensure a fixed CPU allocation from the start. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Modify the `VirtualMachine` custom resource (CR) for the VM that you want to configure to add a `maxSockets` and `sockets` spec:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: large-numa-vm
    spec:
      template:
        spec:
          domain:
            cpu:
              maxSockets: 10
              sockets: 10
              cores: 1
              threads: 1
    ```

    By explicitly setting `maxSockets` and `sockets` to a value of 10 or higher, you are specifying that additional capacity is not reserved for hot plugging, which ensures that the entire requested cores are the actual cores allocated.
1.  Apply the changes to the `VirtualMachine` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

1.  Check that you have configured the `maxSockets` and `sockets` values correctly, by running the following commands:
    ```terminal
    $ oc get vmi -o jsonpath='{.spec.domain.cpu.maxSockets}'
    ```
    ```terminal
    $ oc get vmi -o jsonpath='{.spec.domain.cpu.sockets}'
    ```

    If the configuration was successful, the outputs are the `maxSockets` and `sockets` values that you set in the previous procedure:

    **Example output**
    ```terminal
    10
    ```