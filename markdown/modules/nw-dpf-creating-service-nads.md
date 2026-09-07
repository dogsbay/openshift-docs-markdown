{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPUServiceNAD resources {id="nw-dpf-creating-service-nads_{{ context }}"}

Create `DPUServiceNAD` custom resources to define the network attachments available to DPU services on the hosted cluster. {._abstract}

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
    ---
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceNAD
    metadata:
      name: mybrsfc
      namespace: dpf-operator-system
    spec:
      resourceType: sf
      ipam: true
      bridge: "br-sfc"
      serviceMTU: $NODES_MTU
    ```
1.  Apply the resource file:
    ```terminal
    $ envsubst < dpuservice-nad.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the `DPUServiceNAD` resources are created:
    ```terminal
    $ oc get dpuservicenad -n dpf-operator-system
    ```
    ```terminal title="Example output"
    NAME       READY   AGE
    mybrhbn    True    2m
    mybrsfc    True    2m
    ```