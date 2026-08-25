{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable underlay routing for the default cluster network {id="nw-no-overlay-enable-default-network_{{ context }}"}

To steer default network’s east-west traffic over the underlay network instead of Geneve, configure the Cluster Network Operator (CNO) for `NoOverlay` transport and set the source network address translation (SNAT) and routing. If you use unmanaged routing, apply `FRRConfiguration` and `RouteAdvertisements` custom resources (CRs) so your routers exchange pod routes. {._abstract}

**Prerequisites**

*   You have cluster-admin privileges.
*   Your cluster is installed on bare-metal infrastructure with single-node zone interconnect mode.
*   You have enabled Border Gateway Protocol (BGP) routing for the cluster. See "About BGP routing" and "Enabling BGP routing" for more information.
*   You deployed FRR-K8s on cluster nodes installed with the BGP prerequisite.


:::important

*   Choose `spec.defaultNetwork.ovnKubernetesConfig.noOverlayConfig.outboundSNAT` based on whether pod IPs are routable on your external network. You can set to `Enabled` when they are not, and `Disabled` when the underlay can route pod IP addressess directly.
*   For `unmanaged` mode you must set `outboundSNAT` to `Enabled` or cluster deployment will fail.

:::


**Procedure**

1.  Enable no-overlay for the default network in the Cluster Network Operator (CNO) custom resource (CR).
    1.  At installation time (day 0), set the BGP manifest in your installation `manifests/` directory to configure the `noOverlayConfig` object such as in the following managed and unmanaged routing examples.
        ```yaml title="Example CNO CR using no-overlay with unmanaged routing"
        apiVersion: operator.openshift.io/v1
        kind: Network
        metadata:
          name: cluster
        spec:
          additionalRoutingCapabilities:
            providers:
            - FRR
          defaultNetwork:
            ovnKubernetesConfig:
              routeAdvertisements: Enabled
              transport: NoOverlay
              noOverlayConfig:
                outboundSNAT: Enabled
                routing: Unmanaged
            type: OVNKubernetes
        ```
        ```yaml title="Example CNO CR using no-overlay with managed routing"
        apiVersion: operator.openshift.io/v1
        kind: Network
        metadata:
          name: cluster
        spec:
          additionalRoutingCapabilities:
            providers:
            - FRR
          defaultNetwork:
            ovnKubernetesConfig:
              routeAdvertisements: Enabled
              transport: NoOverlay
              noOverlayConfig:
                outboundSNAT: Enabled
                routing: Managed
                bgpTopology: FullMesh
                asNumber: 64512
            type: OVNKubernetes
        ```

        `spec.defaultNetwork.ovnKubernetesConfig.noOverlayConfig.bgpTopology`
        :   Specifies `FullMesh` for a full-mesh BGP fabric between nodes.

        `spec.defaultNetwork.ovnKubernetesConfig.noOverlayConfig.asNumber`
        :   Optional: specifies the BGP autonomous system number used in the default VRF. When omitted, `64512` is used.
    1.  On a running cluster (day 2), configure the `noOverlayConfig` object in CNO using the following command:
        ```terminal
        $ oc patch network.operator.openshift.io cluster --type merge --patch '{"spec":{"defaultNetwork":{"ovnKubernetesConfig":{"noOverlayConfig":{"outboundSNAT":"Enabled"}}}}}'
        ```
    1.  For managed routing, proceed to the verification step. Do not create `RouteAdvertisements` or `FRRConfiguration` objects. OVN-Kubernetes can reconcile the managed BGP fabric
1.  If you use unmanaged routing, add manifests to the installation `manifests/` directory (day 0) for the following custom resources (CRs):
    1.  Add the following `FRRConfiguration` CR:
        ```yaml
        apiVersion: frrk8s.metallb.io/v1beta1
        kind: FRRConfiguration
        metadata:
          name: external-bgp
          namespace: openshift-frr-k8s
          labels:
            network: default
        spec:
          bgp:
            routers:
            - asn: 64512
              neighbors:
              - address: 192.168.111.1
                asn: 64512
                disableMP: true
                toReceive:
                  allowed:
                    mode: filtered
        ```

        Replace `spec.bgp.routers[].neighbors[].address`, ASN values, and `toReceive` filters so they match your external BGP design.
    1.  Add the following `RouteAdvertisements` CR:
        ```yaml
        apiVersion: k8s.ovn.org/v1
        kind: RouteAdvertisements
        metadata:
          name: default
        spec:
          advertisements:
          - PodNetwork
          frrConfigurationSelector:
            matchLabels:
              network: default
        ```
1.  Optional: Alternatively, you can create or apply the following CRs with `oc apply` (day 2):
    1.  Create an `FRRConfiguration` CR that defines BGP peering toward your external router.
        ```yaml title="Example FRRConfiguration CR for unmanaged routing"
        apiVersion: frrk8s.metallb.io/v1beta1
        kind: FRRConfiguration
        metadata:
          name: external-bgp
          namespace: openshift-frr-k8s
          labels:
            network: default
        spec:
          bgp:
            routers:
            - asn: 64512
              neighbors:
              - address: 192.168.111.1
                asn: 64512
                disableMP: true
                toReceive:
                  allowed:
                    mode: filtered
        ```

        Replace `spec.bgp.routers[].neighbors[].address`, ASN values, and `toReceive` filters so they match your external BGP design.
    1.  Apply the `FRRConfiguration` CR using the following command:
        ```terminal
        $ oc apply -f <frrconfiguration_file>.yaml
        ```

        Replace `<frrconfiguration_file>.yaml` with your manifest file name.
    1.  Create a `RouteAdvertisements` CR that advertises the pod network.
        ```yaml title="Example RouteAdvertisements CR for unmanaged routing"
        apiVersion: k8s.ovn.org/v1
        kind: RouteAdvertisements
        metadata:
          name: default
        spec:
          advertisements:
          - PodNetwork
          frrConfigurationSelector:
            matchLabels:
              network: default
          networkSelectors:
          - networkSelectionType: DefaultNetwork
          nodeSelector: {}
        ```

        :::note

        For unmanaged routing on the default network, at least one `RouteAdvertisements` object must select the default network. In the example, the `spec.networkSelectors` entry with `networkSelectionType: DefaultNetwork` selects the default network, `spec.advertisements` includes `PodNetwork`, and the `RouteAdvertisements` CR reaches `Accepted=True` in status. OVN-Kubernetes uses this configuration when advertising pod subnets to your BGP infrastructure.
        
        :::

    1.  Apply the `RouteAdvertisements` CR using the following command:
        ```terminal
        $ oc apply -f <routeadvertisements_file>.yaml
        ```

        Replace `<routeadvertisements_file>.yaml` with your file name.

**Verification**

1.  Verify that the OVN-Kubernetes pods are running:
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes
    ```