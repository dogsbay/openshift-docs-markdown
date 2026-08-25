{%- set _mod_docs_content_type = "CONCEPT" %}
# When to use MetalLB {id="nw-metallb-when-metallb_{{ context }}"}

To get fault-tolerant access to applications through an external IP on bare metal in {{ product_title }}, you can use MetalLB. {._abstract}

MetalLB is useful when you have a bare-metal cluster, or an on-premise infrastructure without a native load balancer, and you need to expose services through external IP addresses.

You must configure your networking infrastructure to route network traffic for the external IP address from clients to the host network for the cluster.

When you deploy MetalLB with the MetalLB Operator, and add a service of type `LoadBalancer`, MetalLB provides a platform-native load balancer.

When external traffic enters your {{ product_title }} cluster through a MetalLB `LoadBalancer` service, the return traffic to the client has the external IP address of the load balancer as the source IP.

MetalLB operating in layer2 mode provides support for failover by utilizing a mechanism similar to IP failover. However, instead of relying on the virtual router redundancy protocol (VRRP) and keepalived, MetalLB leverages a gossip-based protocol to identify instances of node failure. When a failover is detected, another node assumes the role of the leader node, and a gratuitous ARP message is dispatched to broadcast this change.

MetalLB operating in layer3 or border gateway protocol (BGP) mode delegates failure detection to the network. The BGP router or routers that the {{ product_title }} nodes have established a connection with will identify any node failure and terminate the routes to that node.

Using MetalLB instead of IP failover is preferable for ensuring high availability of pods and services.