{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPUDeployment custom resource {id="nw-dpf-creating-dpudeployment_{{ context }}"}

You can create a `DPUDeployment` custom resource as the main orchestration object that connects DPU services with specific BFB images and DPU flavors.
The `DPUDeployment` defines DPU sets for DPU provisioning and configures service chains to deploy services across DPUs. {._abstract}

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have created the `NodeSRIOVDevicePluginConfig` resource.
*   You have created the `DPUFlavor` resource.
*   You have created the `BFB` resource and it is in the `Ready` phase.

**Procedure**

1.  Create a file named `dpudeployment.yaml` with the following content:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUDeployment
    metadata:
      name: dpudeployment
      namespace: dpf-operator-system
    spec:
      dpus:
        nodeEffect:
          drain: true
        dpuSetStrategy:
          type: RollingUpdate
        bfb: bf-bundle
        flavor: hbn-ovnk
        dpuSets:
          - nameSuffix: "dpuset1"
            dpuNodeSelector:
              matchLabels:
                feature.node.kubernetes.io/dpu-enabled: ""
            dpuAnnotations:
              noderesources.dpu.nvidia.com/nodesriovdevicepluginconfig: bf3-vfs
      services:
        hbn:
          serviceTemplate: hbn
          serviceConfiguration: hbn
        ovn:
          serviceTemplate: ovn
          serviceConfiguration: ovn
        doca-telemetry-service:
          serviceTemplate: doca-telemetry-service
          serviceConfiguration: doca-telemetry-service
      serviceChains:
        switches:
          - ports:
              - serviceInterface:
                  matchLabels:
                    uplink: p0
              - service:
                  name: hbn
                  interface: p0_if
          - ports:
              - serviceInterface:
                  matchLabels:
                    uplink: p1
              - service:
                  name: hbn
                  interface: p1_if
          - ports:
              - serviceInterface:
                  matchLabels:
                    port: ovn
              - service:
                  name: hbn
                  interface: pf2dpu2_if
    ```
1.  Apply the resource file:
    ```terminal
    $ oc apply -f dpudeployment.yaml
    ```

**Verification**

*   Verify the `DPUDeployment` state:
    ```terminal
    $ oc get DPUDeployment -n dpf-operator-system
    ```
    ```terminal title="Example output"
    NAME            READY   PHASE     AGE
    dpudeployment   False   Pending   2m32s
    ```

    :::note

    A `Pending` phase is expected at this stage. The `DPUDeployment` transitions to `Ready` after DPU provisioning is complete and all services are deployed.
    
    :::