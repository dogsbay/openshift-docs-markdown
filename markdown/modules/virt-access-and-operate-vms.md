{%- set _mod_docs_content_type = "CONCEPT" %}
# Access and operate virtual machines {id="virt-access-and-operate-vms_{{ context }}"}

Keep running virtual machines (VMs) healthy and current: connect to a guest to diagnose it, adjust its resources as the workload changes, and apply the same change to many VMs at once. {._abstract}

After you create a VM, the work shifts from provisioning to operation. Choose an interface based on the work:


{{ product_title }} web console
:   Interactive work on a single VM.


`virtctl` and the {{ oc_first }}
:   Scripted, repeatable work.


Redfish-compatible APIs
:   Programmatic control of VM power states and inventory from external tools and orchestration systems.