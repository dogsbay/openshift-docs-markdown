{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting the VPN connection {id="dedicated-aws-vpn-troubleshooting"}

## Tunnel does not connect {id="dedicated-aws-vpn-tunnel-down"}

If the tunnel connection is still **Down**, there are several things you can verify:

*   The AWS tunnel will not initiate a VPN connection. The connection attempt must be initiated from the Customer Gateway.
*   Ensure that your source traffic is coming from the same IP as the configured customer gateway. AWS will silently drop all traffic to the gateway whose source IP address does not match.
*   Ensure that your configuration matches values [supported by AWS](https://docs.aws.amazon.com/vpc/latest/adminguide/Introduction.html#CGRequirements). This includes IKE versions, DH groups, IKE lifetime, and more.
*   Recheck the route table for the VPC. Ensure that propagation is enabled and that there are entries in the route table that have the virtual private gateway you created earlier as a target.
*   Confirm that you do not have any firewall rules that could be causing an interruption.
*   Check if you are using a policy-based VPN as this can cause complications depending on how it is configured.
*   Further troubleshooting steps can be found at the [AWS Knowledge Center](https://aws.amazon.com/premiumsupport/knowledge-center/vpn-tunnel-troubleshooting/).

## Tunnel does not stay connected {id="dedicated-aws-vpn-tunnel-stay-connected"}

If the tunnel connection has trouble staying **Up** consistently, know that all
AWS tunnel connections must be initiated from your gateway. AWS tunnels
[do not initiate tunneling](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html#CustomerGateway).

Red Hat recommends setting up an SLA Monitor (Cisco ASA) or some device on your
side of the tunnel that constantly sends "interesting" traffic, for example
`ping`, `nc`, or `telnet`, at any IP address configured within the VPC CIDR
range. It does not matter whether the connection is successful, just that the
traffic is being directed at the tunnel.

## Secondary tunnel in Down state {id="dedicated-aws-vpn-secondary-tunnel-down"}

When a VPN tunnel is created, AWS creates an additional failover tunnel.
Depending upon the gateway device, sometimes the secondary tunnel will be seen
as in the **Down** state.

The AWS Notification is as follows:

```
You have new non-redundant VPN connections

One or more of your vpn connections are not using both tunnels. This mode of
operation is not highly available and we strongly recommend you configure your
second tunnel. View your non-redundant VPN connections.
```