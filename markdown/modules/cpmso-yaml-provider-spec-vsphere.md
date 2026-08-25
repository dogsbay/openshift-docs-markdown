{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ vmw_short }} provider specification {id="cpmso-yaml-provider-spec-vsphere_{{ context }}"}

You can update your control plane machines to reflect changes in your underlying infrastructure by editing values in the control plane machine set provider specification. {._abstract}

The following example YAML illustrates a valid configuration for a {{ vmw_first }} cluster.

{% include "./snippets/cpmso-new-providerspec-match-install.md" %}

You can omit any field that has a value set in the failure domain section of the CR.

```yaml title="Sample vSphere providerSpec values"
apiVersion: machine.openshift.io/v1
kind: ControlPlaneMachineSet
metadata:
  name: cluster
  namespace: openshift-machine-api
spec:
# ...
  template:
# ...
      spec:
        providerSpec:
          value:
            apiVersion: machine.openshift.io/v1beta1
            credentialsSecret:
              name: vsphere-cloud-credentials
            dataDisks:
            - name: "<disk_name>"
              provisioningMode: "<mode>"
              sizeGiB: 20
            diskGiB: 120
            kind: VSphereMachineProviderSpec
            memoryMiB: 16384
            metadata:
              creationTimestamp: null
            network:
              devices:
              - networkName: <vm_network_name>
            numCPUs: 4
            numCoresPerSocket: 4
            snapshot: ""
            template: <vm_template_name>
            userDataSecret:
              name: master-user-data
            workspace:
              datacenter: <vcenter_data_center_name>
              datastore: <vcenter_datastore_name>
              folder: <path_to_vcenter_vm_folder>
              resourcePool: <vsphere_resource_pool>
              server: <vcenter_server_ip>
```
where:


`spec.template.spec.providerSpec.value.credentialsSecret`
:   Specifies the secret name for the cluster.
    Do not change this value.

`spec.template.spec.providerSpec.value.dataDisks`
:   Specifies one or more data disk definitions.
    For more information, see "Configuring data disks by using machine sets".

`spec.template.spec.providerSpec.value.diskGiB`
:   Specifies the VM disk size for the control plane machines.

`spec.template.spec.providerSpec.value.kind`
:   Specifies the cloud provider platform type.
    Do not change this value.

`spec.template.spec.providerSpec.value.memoryMiB`
:   Specifies the memory allocated for the control plane machines.

`spec.template.spec.providerSpec.value.network`
:   Specifies the network on which to deploy the control plane.

    :::note

    {% include "./snippets/cpmso-failure-domain-param-precedence.md" %}
    
    :::



`spec.template.spec.providerSpec.value.numCPUs`
:   Specifies the number of CPUs allocated for the control plane machines.

`spec.template.spec.providerSpec.value.numCoresPerSocket`
:   Specifies the number of cores for each control plane CPU.

`spec.template.spec.providerSpec.value.template`
:   Specifies the vSphere VM template to use, such as `user-5ddjd-rhcos`.

    :::note

    {% include "./snippets/cpmso-failure-domain-param-precedence.md" %}
    
    :::



`spec.template.spec.providerSpec.value.userDataSecret`
:   Specifies the control plane user data secret.
    Do not change this value.

`spec.template.spec.providerSpec.value.workspace`
:   Specifies the workspace details for the control plane.

    :::note

    {% include "./snippets/cpmso-failure-domain-param-precedence.md" %}
    
    :::


    The following keys in this stanza specify additional details:

`datacenter`
:   Specifies the vCenter datacenter for the control plane.

`datastore`
:   Specifies the vCenter datastore for the control plane.

`folder`
:   Specifies the path to the vSphere VM folder in vCenter, such as `/dc1/vm/user-inst-5ddjd`.

`resourcePool`
:   Specifies the vSphere resource pool for your VMs.

`server`
:   Specifies the vCenter server IP or fully qualified domain name.