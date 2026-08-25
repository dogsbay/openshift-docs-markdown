{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring data disks by using machine sets {id="machineset-vsphere-data-disks_{{ context }}"}

To provide persistent storage beyond the root volume for specialized application workloads, define a `dataDisks` array in the `MachineSet` YAML file to specify disk size and storage policy.  {._abstract}

{{ product_title }} clusters on {{ vmw_first }} support adding up to 29 disks to the virtual machine (VM) controller.

{%- set FeatureName = "Configuring {{ vmw_short }} data disks" %}
{% include "./snippets/technology-preview.md" %}

By configuring data disks, you can attach disks to VMs and use them to store data for etcd, container images, and other uses.
Separating data can help avoid filling the primary disk so that important activities such as upgrades have the resources that they require.


:::note

Adding data disks attaches them to the VM and mounts them to the location that {{ op_system }} designates.

:::


**Prerequisites**

*   You have administrator access to {{ oc_first }} for an {{ product_title }} cluster on {{ vmw_short }}.

**Procedure**

1.  In a text editor, open the YAML file for an existing machine set or create a new one.
1.  Edit the following lines under the `providerSpec` field:
    ```yaml
    tag::compute[]
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    end::compute[]
    tag::controlplane[]
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    end::controlplane[]
    # ...
    spec:
      template:
    tag::compute[]
        spec:
          providerSpec:
            value:
              dataDisks:
              - name: "<disk_name>"
                provisioningMode: "<mode>"
                sizeGiB: 20
              - name: "<disk_name>"
                provisioningMode: "<mode>"
                sizeGiB: 20
    end::compute[]
    tag::controlplane[]
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
                dataDisks:
                - name: "<disk_name>"
                  provisioningMode: "<mode>"
                  sizeGiB: 20
                - name: "<disk_name>"
                  provisioningMode: "<mode>"
                  sizeGiB: 20
    end::controlplane[]
    # ...
    ```

    where
    tag::compute[]


    `spec.template.spec.providerSpec.value.dataDisks`
    :   Specifies a collection of 1-29 data disk definitions. This sample configuration shows the formatting to include two data disk definitions.

    `spec.template.spec.providerSpec.value.dataDisks.name`
    :   Specifies the name of the data disk. The name must meet the following requirements:
        *   Start and end with an alphanumeric character
        *   Consist only of alphanumeric characters, hyphens (`-`), and underscores (`_`)
        *   Have a maximum length of 80 characters

    `spec.template.spec.providerSpec.value.dataDisks.provisioningMode`
    :   Specifies the data disk provisioning method. This value defaults to the vSphere default storage policy if not set. Valid values are `Thin`, `Thick`, and `EagerlyZeroed`.

    `spec.template.spec.providerSpec.value.dataDisks.sizeGiB`
    :   Specifies the size of the data disk in GiB. The maximum size is 16,384 GiB.
        end::compute[]


        tag::controlplane[]


    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.dataDisks`
    :   Specifies a collection of 1-29 data disk definitions. This sample configuration shows the formatting to include two data disk definitions.

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.dataDisks.name`
    :   Specifies the name of the data disk. The name must meet the following requirements:
        *   Start and end with an alphanumeric character
        *   Consist only of alphanumeric characters, hyphens (`-`), and underscores (`_`)
        *   Have a maximum length of 80 characters

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.dataDisks.provisioningMode`
    :   Specifies the data disk provisioning method. This value defaults to the vSphere default storage policy if not set. Valid values are `Thin`, `Thick`, and `EagerlyZeroed`.

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.dataDisks.sizeGiB`
    :   Specifies the size of the data disk in GiB. The maximum size is 16,384 GiB.
        end::controlplane[]