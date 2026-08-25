{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample Nutanix provider specification {id="cpmso-yaml-provider-spec-nutanix_{{ context }}"}

You can update your control plane machines to reflect changes in your underlying infrastructure by editing values in the control plane machine set provider specification. {._abstract}

The following example YAML illustrates a valid configuration for a Nutanix cluster.

{% include "./snippets/cpmso-new-providerspec-match-install.md" %}

{% include "./snippets/cluster-id-explanation-oc-get.md" %}

```yaml title="Sample Nutanix providerSpec values"
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
            apiVersion: machine.openshift.io/v1
            bootType: ""
            categories:
            - key: <category_name>
              value: <category_value>
            cluster:
              type: uuid
              uuid: <cluster_uuid>
            credentialsSecret:
              name: nutanix-credentials
            image:
              name: <cluster_id>-rhcos
              type: name
            kind: NutanixMachineProviderConfig
            memorySize: 16Gi
            metadata:
              creationTimestamp: null
            project:
              type: name
              name: <project_name>
            subnets:
            - type: uuid
              uuid: <subnet_uuid>
            systemDiskSize: 120Gi
            userDataSecret:
              name: master-user-data
            vcpuSockets: 8
            vcpusPerSocket: 1
```
where:


`spec.template.spec.providerSpec.value.bootType`
:   Specifies the boot type that the control plane machines use.
    For more information about boot types, see [Understanding UEFI, Secure Boot, and TPM in the Virtualized Environment (Nutanix documentation)](https://portal.nutanix.com/page/documents/kbs/details?targetId=kA07V000000H3K9SAK).

    Valid values are `Legacy`, `SecureBoot`, or `UEFI`.
    The default is `Legacy`.

    :::note


    You must use the `Legacy` boot type in {{ product_title }} {{ product_version }}.
    
    :::



`spec.template.spec.providerSpec.value.categories`
:   Specifies one or more Nutanix Prism categories to apply to control plane machines.
    This stanza requires `key` and `value` parameters for a category key-value pair that exists in Prism Central.
    For more information about categories, see [Category management](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_6:ssp-ssp-categories-manage-pc-c.html).


`spec.template.spec.providerSpec.value.cluster`
:   Specifies a Nutanix Prism Element cluster configuration.
    In this example, the cluster type is `uuid`, so there is a `uuid` stanza.

    :::note

{% include "./snippets/cpmso-failure-domain-param-precedence.md" %}
    
    :::



`spec.template.spec.providerSpec.value.credentialsSecret`
:   Specifies the secret name for the cluster.
    Do not change this value.


`spec.template.spec.providerSpec.value.image`
:   Specifies the path to the source image for the disk.


`spec.template.spec.providerSpec.value.kind`
:   Specifies the cloud provider platform type.
    Do not change this value.


`spec.template.spec.providerSpec.value.memorySize`
:   Specifies the memory allocated for the control plane machines.


`spec.template.spec.providerSpec.value.project`
:   Specifies the Nutanix project that you use for your cluster.
    In this example, the project type is `name`, so there is a `name` stanza.


`spec.template.spec.providerSpec.value.subnets`
:   Specify one or more Prism Element subnet objects.
    In this example, the subnet type is `uuid`, so there is a `uuid` stanza.
    A maximum of 32 subnets for each Prism Element failure domain in the cluster is supported.

    :::important


    Do not remove the original subnet, which hosts the API server and ingress server, from the cluster.
    
    :::


    The CIDR IP address prefix for one of the specified subnets must contain the virtual IP addresses that the {{ product_title }} cluster uses.
    All subnet UUID values must be unique.

    :::note

{% include "./snippets/cpmso-failure-domain-param-precedence.md" %}
    
    :::



`spec.template.spec.providerSpec.value.systemDiskSize`
:   Specifies the VM disk size for the control plane machines.


`spec.template.spec.providerSpec.value.userDataSecret`
:   Specifies the control plane user data secret.
    Do not change this value.


`spec.template.spec.providerSpec.value.vcpuSockets`
:   Specifies the number of vCPU sockets allocated for the control plane machines.


`spec.template.spec.providerSpec.value.vcpusPerSocket`
:   Specifies the number of vCPUs for each control plane vCPU socket.