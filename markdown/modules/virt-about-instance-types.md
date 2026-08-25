{%- set _mod_docs_content_type = "CONCEPT" %}
# About instance types {id="virt-about-instance-types_{{ context }}"}

An instance type is a reusable object where you can define resources and characteristics to apply to new VMs. You can define custom instance types or use the variety that are included when you install {{ VirtProductName }}. {._abstract}

To create a new instance type, you must first create a manifest, either manually or by using the `virtctl` CLI tool. You then create the instance type object by applying the manifest to your cluster.

{{ VirtProductName }} provides two CRDs for configuring instance types:

*   A namespaced object: `VirtualMachineInstancetype`
*   A cluster-wide object: `VirtualMachineClusterInstancetype`

These objects use the same `VirtualMachineInstancetypeSpec`.

## Required attributes {id="required-attributes_{{ context }}"}

When you configure an instance type, you must define the `cpu` and `memory` attributes. Other attributes are optional.


:::note

When you create a VM from an instance type, you cannot override any parameters defined in the instance type.

Because instance types require defined CPU and memory attributes, {{ VirtProductName }} always rejects additional requests for these resources when creating a VM from an instance type.

:::


You can manually create an instance type manifest. For example:

```yaml
apiVersion: instancetype.kubevirt.io/v1beta1
kind: VirtualMachineInstancetype
metadata:
  name: example-instancetype
spec:
  cpu:
    guest: 1
  memory:
    guest: 128Mi
```
*   `spec.cpu.guest` is a required field that specifies the number of vCPUs to allocate to the guest.
*   `spec.memory.guest` is a required field that specifies an amount of memory to allocate to the guest.

You can create an instance type manifest by using the `virtctl` CLI utility. For example:

```terminal
$ virtctl create instancetype --cpu 2 --memory 256Mi
```

where:


`--cpu <value>`
:   Specifies the number of vCPUs to allocate to the guest. Required.

`--memory <value>`
:   Specifies an amount of memory to allocate to the guest. Required.


:::tip

You can immediately create the object from the new manifest by running the following command:

```terminal
$ virtctl create instancetype --cpu 2 --memory 256Mi | oc apply -f -
```

:::


## Optional attributes {id="optional-attributes_{{ context }}"}

In addition to the required `cpu` and `memory` attributes, you can include the following optional attributes in the `VirtualMachineInstancetypeSpec`:


`annotations`
:   List annotations to apply to the VM.

`gpus`
:   List vGPUs for passthrough.

`hostDevices`
:   List host devices for passthrough.

`ioThreadsPolicy`
:   Define an IO threads policy for managing dedicated disk access.

`launchSecurity`
:   Configure Secure Encrypted Virtualization (SEV).

`nodeSelector`
:   Specify node selectors to control the nodes where this VM is scheduled.

`schedulerName`
:   Define a custom scheduler to use for this VM instead of the default scheduler.

## Controller revisions {id="virt-about-instance-types-controller-revisions_{{ context }}"}

When you create a VM by using an instance type, a `ControllerRevision` object retains an immutable snapshot of the instance type object. This snapshot locks in resource-related characteristics defined in the instance type object, such as the required guest CPU and memory. The VM status also contains a reference to the `ControllerRevision` object.

This snapshot is essential for versioning, and ensures that the VM instance created when starting a VM does not change if the underlying instance type object is updated while the VM is running.