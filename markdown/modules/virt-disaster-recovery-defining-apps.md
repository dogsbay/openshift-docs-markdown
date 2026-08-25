{%- set _mod_docs_content_type = "CONCEPT" %}
# Defining applications for disaster recovery {id="virt-disaster-recovery-defining-apps_{{ context }}"}

Define applications for disaster recovery by using VMs that {{ rh_rhacm_first }} manages or discovers. {._abstract}

## Best practices when defining an {{ rh_rhacm }}-managed VM {id="best-practices-rhacm-managed-vm_{{ context }}"}

When creating an {{ rh_rhacm }}-managed application that includes a VM, you must use a GitOps workflow and create an {{ rh_rhacm }} application or `ApplicationSet` resource.

You can take several actions to improve your experience and chance of success when defining an {{ rh_rhacm }}-managed VM.


Use a PVC and populator to define storage for the VM
:   Because data volumes create persistent volume claims (PVCs) implicitly, data volumes and VMs with data volume templates do not fit as neatly into the GitOps model.


Use the import method when choosing a population source for your VM disk
:   Select a {{ op_system_base }} image from the software catalog to use the import method. Red&#160;Hat recommends using a specific version of the image rather than a floating tag for consistent results. The KubeVirt community maintains container disks for other operating systems in a Quay repository.


Use `pullMethod: node`
:   Use the pod `pullMethod: node` when creating a data volume from a registry source to take advantage of the {{ product_title }} pull secret, which is required to pull container images from the Red&#160;Hat registry.

## Best practices when defining an {{ rh_rhacm }}-discovered VM {id="best-practices-rhacm-discovered-vm_{{ context }}"}

You can configure any VM in the cluster that is not an {{ rh_rhacm }}-managed application as an {{ rh_rhacm }}-discovered application. This includes VMs imported by using the {{ mtv_first }}, VMs created by using the {{ product_title }} web console, or VMs created by any other means, such as the CLI.

You can take several actions to improve your experience and chance of success when defining an {{ rh_rhacm }}-discovered VM.


Protecting the VM when using MTV, the {{ product_title }} web console, or a custom VM
:   Because automatic labeling is not currently available, the application owner must manually label the components of the VM application when using MTV, the {{ product_title }} web console, or a custom VM.

    After creating the VM, apply a common label to the following resources associated with the VM: `VirtualMachine`, `DataVolume`, `PersistentVolumeClaim`, `Service`, `Route`, `Secret` and `ConfigMap`. If the VM uses an instance type or preference, you must also label the `ControllerRevision` copy of these objects referenced by the spec or status of the VM. Do not label virtual machine instances (VMIs) or pods; {{ VirtProductName }} creates and manages these automatically.

    :::important


    You must apply the common label to everything in the namespace that you want to protect, including objects that you added to the VM that are not listed here.
    
    :::



Including more than the `VirtualMachine` object in the VM
:   Working VMs typically also contain data volumes, persistent volume claims (PVCs), services, routes, secrets, `ConfigMap` objects, and `VirtualMachineSnapshot` objects.


Including the VM as part of a larger logical application
:   This includes other pod-based workloads and VMs.