{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the VM interface link state by using the CLI {id="virt-configuring-interface-link-state_{{ context }}"}

You can set the link state of a primary or secondary virtual machine (VM) network interface by using the CLI. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Edit the VM configuration to set the interface link state, as in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: my-vm
    spec:
      template:
        spec:
          domain:
            devices:
              interfaces:
                - name: default
                  state: down
                  masquerade: { }
          networks:
            - name: default
              pod: { }
    # ...
    ```
    *   `spec.template.spec.domain.devices.interfaces.name` defines the name of the interface.
    *   `spec.template.spec.domain.devices.interfaces.state` defines the state of the interface. The possible values are:
        *   `up`: Represents an active network connection. This is the default if no value is specified.
        *   `down`: Represents a network interface link that is switched off.
        *   `absent`: Represents a network interface that is hot unplugged.

            :::important

            If you have defined readiness or liveness probes to run VM health checks, setting the primary interface’s link state to `down` causes the probes to fail. If a liveness probe fails, the VM is deleted and a new VM is created to restore responsiveness.
            
            :::

1.  Apply the `VirtualMachine` manifest:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   Verify that the desired link state is set by checking the `status.interfaces.linkState` field of the `VirtualMachineInstance` manifest.
    ```terminal
    $ oc get vmi <vmi-name>
    ```

    Example output:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachineInstance
    metadata:
      name: my-vm
    spec:
      domain:
        devices:
          interfaces:
          - name: default
            state: down
            masquerade: { }
      networks:
      - name: default
        pod: { }
    status:
      interfaces:
        - name: default
          linkState: down
    # ...
    ```