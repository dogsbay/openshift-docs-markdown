{%- set _mod_docs_content_type = "REFERENCE" %}
# Run strategies {id="virt-runstrategies-vms_{{ context }}"}

The `spec.runStrategy` key determines how a VM behaves under certain conditions.
This key has four possible values: `Always`, `RerunOnFailure`, `Manual`, and `Halted`. {._abstract}


`Always`
:   The virtual machine instance (VMI) is always present when a virtual machine (VM) is created on another node. A new VMI is created if the original stops for any reason.


`RerunOnFailure`
:   The VMI is re-created on another node if the previous instance fails. The instance is not re-created if the VM stops successfully, such as when it is shut down.

    :::important


    Setting `spec.runStrategy: RerunOnFailure` is an explicit command to start the VM. If the VM is intentionally stopped and you do not want it to start, do not change the run strategy value to `RerunOnFailure`.
    
    :::



`Manual`
:   You control the VMI state manually with the `start`, `stop`, and `restart` virtctl client commands. The VM is not automatically restarted.


`Halted`
:   No VMI is present when a VM is created.

Different combinations of the `virtctl start`, `stop` and `restart` commands affect the run strategy.

The following table describes a VM’s transition between states. The first column shows the VM’s initial run strategy. The remaining columns show a virtctl command and the new run strategy after that command is run.

**Run strategy before and after `virtctl` commands**

| Initial run strategy | Start | Stop | Restart |
| --- | --- | --- | --- |
| Always | - | Halted | Always |
| RerunOnFailure | RerunOnFailure | RerunOnFailure | RerunOnFailure |
| Manual | Manual | Manual | Manual |
| Halted | Always | - | - |


:::note

If a node in a cluster installed by using installer-provisioned infrastructure fails the machine health check and is unavailable, VMs with `runStrategy: Always` or `runStrategy: RerunOnFailure` are rescheduled on a new node.

:::