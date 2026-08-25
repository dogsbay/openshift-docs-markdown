{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scheduling virtual machines with a custom scheduler {id="virt-vm-custom-scheduler_{{ context }}"}

You can use a custom scheduler to schedule a virtual machine (VM) on a node. {._abstract}

**Prerequisites**

*   A secondary scheduler is configured for your cluster.
*   You have installed the {{ oc_first }}.

**Procedure**

*   Add the custom scheduler to the VM configuration by editing the `VirtualMachine` manifest. For example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-fedora
    spec:
      runStrategy: Always
      template:
        spec:
          schedulerName: my-scheduler
          domain:
            devices:
              disks:
                - name: containerdisk
                  disk:
                    bus: virtio
    # ...
    ```

    `schedulerName`
    :   The name of the custom scheduler. If the `schedulerName` value does not match an existing scheduler, the `virt-launcher` pod stays in a `Pending` state until the specified scheduler is found.

**Verification**

*   Verify that the VM is using the custom scheduler specified in the `VirtualMachine` manifest by checking the `virt-launcher` pod events:
    1.  View the list of pods in your cluster by entering the following command:
        ```terminal
        $ oc get pods
        ```

        Example output:
        ```terminal
        NAME                             READY   STATUS    RESTARTS   AGE
        virt-launcher-vm-fedora-dpc87    2/2     Running   0          24m
        ```
    1.  Run the following command to display the pod events:
        ```terminal
        $ oc describe pod virt-launcher-vm-fedora-dpc87
        ```

        The value of the `From` field in the output verifies that the scheduler name matches the custom scheduler specified in the `VirtualMachine` manifest:

        Example output:
        ```terminal
        [...]
        Events:
          Type    Reason     Age   From              Message
          ----    ------     ----  ----              -------
          Normal  Scheduled  21m   my-scheduler  Successfully assigned default/virt-launcher-vm-fedora-dpc87 to node01
        [...]
        ```