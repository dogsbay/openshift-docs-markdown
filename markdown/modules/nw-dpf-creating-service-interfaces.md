{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPUServiceInterface custom resources {id="nw-dpf-creating-service-interfaces_{{ context }}"}

You can create `DPUServiceInterface` custom resources to define interface objects that are specified in service chains.
You must create physical interface resources for the DPU ports and an OVN-Kubernetes interface resource for host workloads. {._abstract}

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.

**Procedure**

1.  Create a file named `physical-if.yaml` with the following content to define the physical DPU port interfaces:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceInterface
    metadata:
      name: p0
      namespace: dpf-operator-system
    spec:
      template:
        spec:
          template:
            metadata:
              labels:
                uplink: "p0"
            spec:
              interfaceType: physical
              physical:
                interfaceName: p0
    ---
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceInterface
    metadata:
      name: p1
      namespace: dpf-operator-system
    spec:
      template:
        spec:
          template:
            metadata:
              labels:
                uplink: "p1"
            spec:
              interfaceType: physical
              physical:
                interfaceName: p1
    ```
1.  Apply the physical interface resource file:
    ```terminal
    $ oc apply -f physical-if.yaml
    ```
1.  Create a file named `ovnk-if.yaml` with the following content to define the OVN-Kubernetes interface:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceInterface
    metadata:
      name: ovn
      namespace: dpf-operator-system
    spec:
      template:
        spec:
          template:
            metadata:
              labels:
                port: ovn
            spec:
              interfaceType: ovn
    ```
1.  Apply the OVN-Kubernetes interface resource file:
    ```terminal
    $ oc apply -f ovnk-if.yaml
    ```

**Verification**

*   Verify that all `DPUServiceInterface` resources are created:
    ```terminal
    $ oc get dpuserviceinterface -n dpf-operator-system
    ```