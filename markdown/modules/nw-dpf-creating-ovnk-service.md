{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the OVN-Kubernetes DPU service configuration {id="nw-dpf-creating-ovnk-service_{{ context }}"}

You can create a `DPUServiceConfiguration` custom resource for the OVN-Kubernetes DPU service.
The OVN-Kubernetes service provides pod networking on the DPU. {._abstract}

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have created the HBN `DPUServiceConfiguration` resource.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Create a file named `ovn-k.yaml` with the following content:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceConfiguration
    metadata:
      name: ovn
      namespace: dpf-operator-system
    spec:
      deploymentServiceName: "ovn"
      serviceConfiguration:
        helmChart:
          values:
            global:
              enableOvnKubeIdentity: false
            k8sAPIServer: https://$HOST_CLUSTER_API:6443
            podNetwork: 10.128.0.0/14/23
            serviceNetwork: 172.30.0.0/16
            hostNetworkNamespace: "openshift-host-network"
            mtu: $OVN_MTU
            dpuManifests:
              kubernetesSecretName: "ovn-dpu"
              vtepCIDR: $VTEP_CIDR
              hostCIDR: $DPU_HOST_CIDR
              ipamPool: "pool1"
              ipamPoolType: "cidrpool"
              ipamVTEPIPIndex: 0
              ipamPFIPIndex: 1
              cniBinDir: "/var/lib/cni/bin/"
              cniConfDir: "/run/multus/cni/net.d"
    ```
1.  Apply the resource file:
    ```terminal
    $ envsubst < ovn-k.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the HBN and OVN-Kubernetes service configurations are created:
    ```terminal
    $ oc get dpuserviceconfiguration -n dpf-operator-system
    ```