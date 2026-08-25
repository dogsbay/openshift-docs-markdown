{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the QEMU guest agent on a Linux VM {id="virt-installing-qemu-guest-agent-on-linux-vm_{{ context }}"}

The `qemu-guest-agent` is available by default in {{ op_system_base_full }} virtual machines (VMs). To create snapshots of a VM in the `Running` state with the highest integrity, install the QEMU guest agent. {._abstract}

The QEMU guest agent takes a consistent snapshot by attempting to quiesce the VM file system. This ensures that in-flight I/O is written to the disk before the snapshot is taken. If the guest agent is not present, quiescing is not possible and a best-effort snapshot is taken. 

The conditions under which a snapshot is taken are reflected in the snapshot indications that are displayed in the web console or CLI. If these conditions do not meet your requirements, try creating the snapshot again, or use an offline snapshot

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Log in to the VM by using a console or SSH.
1.  Install the QEMU guest agent by running the following command:
    ```terminal
    $ yum install -y qemu-guest-agent
    ```
1.  Ensure the service is persistent and start it:
    ```terminal
    $ systemctl enable --now qemu-guest-agent
    ```

**Verification**

*   Run the following command to verify that `AgentConnected` is listed in the VM spec:

    ```terminal
    $ oc get vm <vm_name>
    ```