{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the HBN DPU service configuration {id="nw-dpf-creating-hbn-service_{{ context }}"}

You can create a `DPUServiceConfiguration` custom resource for the Host-Based Networking (HBN) DPU service.
The HBN service provides BGP-based networking on the DPU with ECMP routing support. {._abstract}


:::note

HBN and OVN-Kubernetes are currently the only supported DPU network services. The DOCA Telemetry Service (DTS), which you configure in a later step, is deployed for observability and is not a network service.

:::



:::note

The `DPUServiceTemplate` resources are automatically created and managed by the `dpf-hcp-provisioner-operator`.
You only need to create the `DPUServiceConfiguration` resources.

:::


**Prerequisites**

*   The DPF Operator is installed.
*   The `DPFOperatorConfig` resource is created.
*   The DPF Operator environment variables are set. For details, see "DPF Operator installation environment variables".

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
1.  Apply the resource file:
    ```terminal
    $ oc apply -f hbn.yaml
    ```
    ```terminal title="Example output"
    dpuserviceconfiguration.svc.dpu.nvidia.com/hbn created
    ```