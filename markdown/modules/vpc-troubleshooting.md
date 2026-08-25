{%- set _mod_docs_content_type = "REFERENCE" %}

# Troubleshooting cluster creation {id="troubleshooting_shared-vpc-hcp_vpc-creation_{{ context }}"}

If your cluster fails to install, common VPC configuration issues might be the cause. {._abstract}

*   Ensure your [DHCP option set](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html) includes a domain name, and ensure that the domain name does not include any spaces or capital letters.
*   If your VPC uses a custom DNS resolver (the `domain name servers` field is not `AmazonProvideDNS`), ensure that it can resolve the private hosted zones in Route53.