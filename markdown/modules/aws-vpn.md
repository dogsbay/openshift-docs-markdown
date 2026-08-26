{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an AWS Virtual Private Network {id="aws-vpn_{{ context }}"}

Configure an AWS Site-to-Site Virtual Private Network (VPN) connection to enable secure communication between your {{ product_title }} cluster Virtual Private Cloud (VPC) and your remote on-site network. {._abstract}


:::note

AWS VPN does not currently provide a managed option to apply Network Address Translation (NAT) to VPN traffic. See the [AWS Knowledge Center](https://aws.amazon.com/premiumsupport/knowledge-center/configure-nat-for-vpn-traffic/) for more details.

Routing all traffic, for example `0.0.0.0/0`, through a private connection is not supported. This requires deleting the internet gateway, which disables SRE management traffic.

:::


**Prerequisites**

*   Hardware VPN gateway device model and software version, for example Cisco Adaptive Security Appliance (ASA) running version 8.3. See the [AWS documentation](https://docs.aws.amazon.com/vpc/latest/adminguide/Introduction.html#DevicesTested) to confirm whether your gateway device is supported by AWS.
*   Public, static IP address for the VPN gateway device.
*   Border Gateway Protocol (BGP) or static routing: if BGP, the Autonomous System Number (ASN) is available. If static routing, at least one static route is configured.
*   Optional: Internet Protocol (IP) address and port/protocol of a reachable service to test the VPN connection.

**Procedure**

1.  [Create a customer gateway](https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html#vpn-create-cgw) to configure the VPN connection.
1.  If you do not already have a Virtual Private Gateway attached to the intended VPC, [create and attach](https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html#vpn-create-target-gateway) a Virtual Private Gateway.
1.  [Configure routing and enable VPN route propagation](https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html#vpn-configure-route-tables).
1.  [Update your security group](https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html#vpn-configure-security-groups).
1.  [Establish the Site-to-Site VPN connection](https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html#vpn-create-vpn-connection).

    :::note

    Note the VPC subnet information, which you must add to your configuration as the remote network.
    
    :::