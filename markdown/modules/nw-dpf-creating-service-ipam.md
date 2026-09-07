{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the `DPUServiceIPAM` resources {id="nw-dpf-creating-service-ipam_{{ context }}"}

You can create `DPUServiceIPAM` custom resources to configure IP address management for DPU services.
Two IPAM pools are required: one for the VTEP network used by the high-speed data plane, and one for loopback addresses used by the HBN service. {._abstract}

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Create a file named `dpuservice-ipam.yaml` with the following content:
    ```yaml
    ---
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceIPAM
    metadata:
      name: pool1
      namespace: dpf-operator-system
    spec:
      ipv4Network:
        network: $VTEP_CIDR
        gatewayIndex: 3
        prefixSize: 29
    ---
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceIPAM
    metadata:
      name: loopback
      namespace: dpf-operator-system
    spec:
      ipv4Network:
        network: "11.0.0.0/24"
        prefixSize: 32
    ```
1.  Apply the resource file:
    ```terminal
    $ envsubst < dpuservice-ipam.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the `DPUServiceIPAM` resources are created:
    ```terminal
    $ oc get dpuserviceipam -n dpf-operator-system
    ```