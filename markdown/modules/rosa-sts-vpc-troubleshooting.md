{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting VPC configuration for ROSA clusters {id="rosa-sts-vpc-troubleshooting_{{ context }}"}

If your cluster fails to install, check common VPC configuration issues. {._abstract}

Consider the following troubleshooting items:

*   Make sure your [DHCP option set](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html) includes a domain name, and ensure that the domain name does not include any spaces or capital letters.
*   If your VPC uses a custom DNS resolver (the `domain name servers` field of your DHCP option set is not `AmazonProvideDNS`), make sure it is able to properly resolve the private hosted zones configured in Route53.

For more information about troubleshooting {{ product_title }} cluster installations, see [Troubleshooting {{ product_title }} installations](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/support/index#rosa-troubleshooting-installations).

## Getting support {id="_getting_support"}

If you need additional [support](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/support/index#support_getting-support), visit the Red Hat Customer Portal to review knowledge base articles, submit a support case, and review additional product documentation and resources.