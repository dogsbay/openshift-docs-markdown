{%- set _mod_docs_content_type = "PROCEDURE" %}
# Isolating the DNS domain of the target cluster from the clients {id="migration-isolating-dns-domain-of-target-cluster-from-clients_{{ context }}"}

You can allow the clients' requests sent to the DNS domain of the source cluster to reach the DNS domain of the target cluster without exposing the target cluster to the clients.

**Procedure**

1.  Place an exterior network component, such as an application load balancer or a reverse proxy, between the clients and the target cluster.
1.  Update the application FQDN on the source cluster in the DNS server to return the IP address of the exterior network component.
1.  Configure the network component to send requests received for the application in the source domain to the load balancer in the target cluster domain.
1.  Create a wildcard DNS record for the `*.apps.source.example.com` domain that points to the IP address of the load balancer of the source cluster.
1.  Create a DNS record for each application that points to the IP address of the exterior network component in front of the target cluster. A specific DNS record has higher priority than a wildcard record, so no conflict arises when the application FQDN is resolved.


:::note

*   The exterior network component must terminate all secure TLS connections. If the connections pass through to the target cluster load balancer, the FQDN of the target application is exposed to the client and certificate errors occur.
*   The applications must not return links referencing the target cluster domain to the clients. Otherwise, parts of the application might not load or work properly.

:::