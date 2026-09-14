{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPUServiceNAD resource {id="nw-dpf-creating-service-nads_{{ context }}"}

Create a `DPUServiceNAD` custom resource to define the network attachment available to DPU services on the hosted cluster.
The `DPUServiceNAD` resource maps to an Open vSwitch (OVS) bridge on the DPU and specifies the resource type, IP address management (IPAM) mode, and maximum transmission unit (MTU) configuration: {._abstract}

*   `mybrhbn` maps to the `br-hbn` bridge, used by the HBN service. IPAM is disabled because IP allocation is handled by `DPUServiceIPAM`.

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Create a file named `dpuservice-nad.yaml` with the following content:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceNAD
    metadata:
      name: mybrhbn
      namespace: dpf-operator-system
    spec:
      resourceType: sf
      ipam: false
      bridge: "br-hbn"
      serviceMTU: $NODES_MTU
    ```
1.  Apply the resource file:
    ```terminal
    $ envsubst < dpuservice-nad.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the `DPUServiceNAD` resource is created:
    ```terminal
    $ oc get dpuservicenad mybrhbn -n dpf-operator-system
    ```
    ```terminal title="Example output"
    NAME       READY   AGE
    mybrhbn    True    2m
    ```