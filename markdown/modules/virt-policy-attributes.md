{%- set _mod_docs_content_type = "REFERENCE" %}
# CPU feature policy attributes {id="policy-attributes_{{ context }}"}

A policy attribute controls how strictly the scheduler enforces a CPU feature that you set on a virtual machine (VM). Use a policy attribute to require a feature, treat it as optional, or forbid it. {._abstract}

| Policy attribute | Description |
| --- | --- |
| force | The VM is forced to be scheduled on a node. This is true even if the host CPU does not support the VM’s CPU. |
| require | Default policy that applies to a VM if the VM is not configured with a specific CPU model and feature specification. If a node is not configured to support CPU node discovery with this default policy attribute or any one of the other policy attributes, VMs are not scheduled on that node. Either the host CPU must support the VM’s CPU or the hypervisor must be able to emulate the supported CPU model. |
| optional | The VM is added to a node if that VM is supported by the host’s physical machine CPU. |
| disable | The VM cannot be scheduled with CPU node discovery. |
| forbid | The VM is not scheduled even if the feature is supported by the host CPU and CPU node discovery is enabled. |