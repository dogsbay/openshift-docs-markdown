{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a BGP peer {id="nw-metallb-configure-bgppeer_{{ context }}"}

To exchange routing information and advertise IP addresses for load balancer services, configure MetalLB BGP peer CRs. Establishing these peers ensures that your network infrastructure can reach and correctly route traffic to cluster application workloads. {._abstract}

You can add a BGP peer custom resource to exchange routing information with network routers and advertise the IP addresses for services.

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   Configure MetalLB with a BGP advertisement.

**Procedure**

1.  Create a file, such as `bgppeer.yaml`, with content like the following example:
    ```yaml
    apiVersion: metallb.io/v1beta2
    kind: BGPPeer
    metadata:
      namespace: metallb-system
      name: doc-example-peer
    spec:
      peerAddress: 10.0.0.1
      peerASN: 64501
      myASN: 64500
      routerID: 10.10.10.10
    # ...
    ```
1.  Apply the BGP peer configuration by entering the following command:
    ```terminal
    $ oc apply -f bgppeer.yaml
    ```