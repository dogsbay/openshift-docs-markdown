{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the HBN and OVN-Kubernetes DPU service configurations {id="nw-dpf-creating-ovnk-service_{{ context }}"}

You can create `DPUServiceConfiguration` custom resources for the Host-Based Networking (HBN) and OVN-Kubernetes DPU services.
The HBN service provides BGP-based networking on the DPU with ECMP routing support.
The OVN-Kubernetes service provides pod networking on the DPU. {._abstract}


:::note

The `DPUServiceTemplate` resources for both HBN and OVN-Kubernetes are automatically created and managed by the `dpf-hcp-provisioner-operator` controller.
You only need to create the `DPUServiceConfiguration` resources.

:::


**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Create a file named `hbn.yaml` with the following content:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceConfiguration
    metadata:
      name: hbn
      namespace: dpf-operator-system
    spec:
      deploymentServiceName: "hbn"
      serviceConfiguration:
        serviceDaemonSet:
          annotations:
            k8s.v1.cni.cncf.io/networks: |-
              [
              {"name": "iprequest", "interface": "ip_lo", "cni-args": {"poolNames": ["loopback"], "poolType": "cidrpool"}},
              {"name": "iprequest", "interface": "ip_pf2dpu2", "cni-args": {"poolNames": ["pool1"], "poolType": "cidrpool", "allocateDefaultGateway": true}}
              ]
        helmChart:
          values:
            configuration:
              perDPUValuesYAML: |
                - hostnamePattern: "*"
                  values:
                    bgp_peer_group: hbn
              startupYAMLJ2: |
                - header:
                    model: BLUEFIELD
                    nvue-api-version: nvue_v1
                    rev-id: 1.0
                    version: HBN 2.4.0
                - set:
                    interface:
                      lo:
                        ip:
                          address:
                            {{ ipaddresses.ip_lo.ip }}/32: {}
                        type: loopback
                      p0_if,p1_if:
                        type: swp
                        link:
                          mtu: 9216
                      pf2dpu2_if:
                        ip:
                          address:
                            {{ ipaddresses.ip_pf2dpu2.cidr }}: {}
                        type: swp
                        link:
                          mtu: 9216
                    router:
                      bgp:
                        autonomous-system: {{ ( ipaddresses.ip_lo.ip.split(".")[3] | int ) + 65101 }}
                        enable: on
                        graceful-restart:
                          mode: full
                        router-id: {{ ipaddresses.ip_lo.ip }}
                    vrf:
                      default:
                        router:
                          bgp:
                            address-family:
                              ipv4-unicast:
                                enable: on
                                redistribute:
                                  connected:
                                    enable: on
                              ipv6-unicast:
                                enable: on
                                redistribute:
                                  connected:
                                    enable: on
                            enable: on
                            neighbor:
                              p0_if:
                                peer-group: {{ config.bgp_peer_group }}
                                type: unnumbered
                              p1_if:
                                peer-group: {{ config.bgp_peer_group }}
                                type: unnumbered
                            path-selection:
                              multipath:
                                aspath-ignore: on
                            peer-group:
                              {{ config.bgp_peer_group }}:
                                remote-as: external
      interfaces:
        - name: p0_if
          network: mybrhbn
        - name: p1_if
          network: mybrhbn
        - name: pf2dpu2_if
          network: mybrhbn
    ```
1.  Apply the HBN resource file:
    ```terminal
    $ oc apply -f hbn.yaml
    ```
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
1.  Apply the OVN-Kubernetes resource file:
    ```terminal
    $ envsubst < ovn-k.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the HBN and OVN-Kubernetes service configurations are created:
    ```terminal
    $ oc get dpuserviceconfiguration -n dpf-operator-system
    ```