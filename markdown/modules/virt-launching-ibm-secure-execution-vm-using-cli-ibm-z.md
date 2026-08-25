{%- set _mod_docs_content_type = "PROCEDURE" %}
# Launching an {{ ibm_title }} Secure Execution VM by using the CLI {id="virt-launching-ibm-secure-execution-vm-using-cli-ibm-z_{{ context }}"}

You can launch an {{ ibm_name }} Secure Execution VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }} by using the command-line interface. {._abstract}

To launch {{ ibm_name }} Secure Execution VMs, you must include the `launchSecurity` parameter to the `VirtualMachine` manifest. The rest of the VM manifest depends on your setup.

**Procedure**

*   Apply a `VirtualMachine` manifest similar to the following, to the cluster:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      labels:
        kubevirt.io/vm: f41-se
      name: f41-se
    spec:
      runStrategy: Always
      template:
        metadata:
          labels:
            kubevirt.io/vm: f41-se
        spec:
          domain:
            launchSecurity: {}
            devices:
              disks:
              - disk:
                  bus: virtio
                name: rootfs
            machine:
              type: ""
            resources:
              requests:
                memory: 4Gi
          terminationGracePeriodSeconds: 0
          volumes:
            - name: rootfs
              dataVolume:
                name: f41-se
    ```

    where:

    `spec.template.spec.domain.launchSecurity`
    :   Specifies to enable hardware-based memory encryption. 

    :::note

    Because the memory of the VM is protected, you cannot live migrate {{ ibm_name }} Secure Execution VMs. The VMs can only be migrated offline.
    
    :::