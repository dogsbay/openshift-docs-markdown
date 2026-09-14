{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify DPU service reconciliation {id="nw-dpf-verifying-dpu-services_{{ context }}"}

After the DPU hosted cluster and `DPUCluster` are ready, verify that the DPU services, IPAM pools, service interfaces, and service chains created for the `DPUDeployment` are reconciled. {._abstract}

**Prerequisites**

*   You have created the DPF custom resources: `DPFOperatorConfig`, `NodeSRIOVDevicePluginConfig`, `DPUFlavor`, `BFB`, and `DPUDeployment`.
*   You have created the HBN, OVN-Kubernetes, and DTS DPU service resources.
*   The `DPUCluster` is ready.
*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.


:::note

You might need to run the commands multiple times to ensure that the condition is met, because the DPU services can take time to converge.

:::


**Procedure**

1.  Verify that the `DPUService` resources are created and reconciled:
    ```terminal
    $ oc wait --for=condition=ApplicationsReconciled \
      --namespace dpf-operator-system dpuservices \
      -l svc.dpu.nvidia.com/owned-by-dpudeployment=dpf-operator-system_dpudeployment
    ```
1.  Verify that the `DPUServiceIPAM` resources are reconciled:
    ```terminal
    $ oc wait --for=condition=DPUIPAMObjectReconciled \
      --namespace dpf-operator-system dpuserviceipam --all
    ```
1.  Verify that the `DPUServiceInterface` resources are reconciled:
    ```terminal
    $ oc wait --for=condition=ServiceInterfaceSetReconciled \
      --namespace dpf-operator-system dpuserviceinterface --all
    ```
1.  Verify that the `DPUServiceChain` resources are reconciled:
    ```terminal
    $ oc wait --for=condition=ServiceChainSetReconciled \
      --namespace dpf-operator-system dpuservicechain --all
    ```