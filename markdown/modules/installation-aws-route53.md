{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Route 53 {id="installation-aws-route53_{{ context }}"}

To install {{ product_title }}, the {{ aws_first }} account you use must have a dedicated public hosted zone in your Route 53 service. This zone must be
authoritative for the domain. The Route 53 service provides cluster DNS resolution and name lookup for external connections to the cluster. {._abstract}

**Procedure**

1.  Identify your domain, or subdomain, and registrar. You can transfer an existing domain and
registrar or obtain a new one through {{ aws_short }} or another source.

    :::note

    If you purchase a new domain through {{ aws_short }}, it takes time for the relevant DNS changes to propagate. For more information about purchasing domains
    through {{ aws_short }}, see
    [Registering Domain Names Using Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar.html)
    in the {{ aws_short }} documentation.
    
    :::

1.  If you are using an existing domain and registrar, migrate its DNS to {{ aws_short }}. See
[Making Amazon Route 53 the DNS Service for an Existing Domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html)
in the {{ aws_short }} documentation.
1.  Create a public hosted zone for your domain or subdomain. See
[Creating a Public Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html)
in the {{ aws_short }} documentation.

    Use an appropriate root domain, such as `openshiftcorp.com`, or subdomain, such as `clusters.openshiftcorp.com`.
1.  Extract the new authoritative name servers from the hosted zone records. See
[Getting the Name Servers for a Public Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/GetInfoAboutHostedZone.html)
in the {{ aws_short }} documentation.
1.  Update the registrar records for the {{ aws_short }} Route 53 name servers that your domain uses. For example, if you registered your domain to a Route 53 service in a different accounts, see the following topic in the {{ aws_short }} documentation:
[Adding or Changing Name Servers or Glue Records](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-name-servers-glue-records.html#domain-name-servers-glue-records-procedure).
1.  If you are using a subdomain, add its delegation records to the parent domain. This gives Amazon Route 53 responsibility for the subdomain. Follow the delegation procedure outlined by the DNS provider of the parent domain. See [Creating a subdomain that uses Amazon Route 53 as the DNS service without migrating the parent domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingNewSubdomain.html) in the {{ aws_short }} documentation for an example high level procedure.