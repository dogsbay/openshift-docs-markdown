{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring AWS PrivateLink DNS forwarding {id="osd-aws-privatelink-config-dns-forwarding_{{ context }}"}

Configure DNS forwarding to enable resolution of cluster DNS records from outside the VPC. {._abstract}

With AWS PrivateLink clusters, a public hosted zone and a private hosted zone are created in Route 53. With the private hosted zone, records within the zone are resolvable only from within the VPC to which it is assigned.

The _Let’s Encrypt DNS-01_ validation requires a public zone so that valid, publicly trusted certificates can be issued for the domain. The validation records are deleted after _Let’s Encrypt_ validation is complete; however, the zone is still required for issuing and renewing these certificates, which are typically required every 60 days. While these zones usually appear empty, it is serving a critical role in the validation process.

For more information about private hosted zones, see [AWS private hosted zones documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html). For more information about public hosted zones, see [AWS public hosted zones documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html).

**Prerequisites**

*   Your corporate network or other VPC has connectivity
*   UDP port 53 and TCP port 53 ARE enabled across your networks to allow for DNS queries
*   You have created an AWS PrivateLink cluster using {{ product_title }}

**Procedure**

1.  To allow for records such as `api.<cluster_domain>` and `*.apps.<cluster_domain>` to resolve outside of the VPC, [configure a Route 53 Resolver Inbound Endpoint](https://aws.amazon.com/premiumsupport/knowledge-center/route53-resolve-with-inbound-endpoint/).
1.  When you configure the inbound endpoint, select the VPC and private subnets that were used when you created the cluster.
1.  After the endpoints are operational and associated, configure your corporate network to forward DNS queries to those IP addresses for the top-level cluster domain, such as `drow-pl-01.htno.p1.openshiftapps.com`.
1.  If you are forwarding DNS queries from one VPC to another VPC, [configure forwarding rules](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-rules-managing.html).
1.  If you are configuring your remote network DNS server, see your specific DNS server documentation to configure selective DNS forwarding for the installed cluster domain.