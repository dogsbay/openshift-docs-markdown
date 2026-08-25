{%- set _mod_docs_content_type = "PROCEDURE" %}
# Custom DNS and domains {id="mos-checklist-custom-dns-domains_{{ context }}"}

You can configure a custom domain name server and custom domain name for your cluster. {._abstract}

**Prerequisites**

*   By default, {{ product_title }} clusters require you to set the `domain name servers` option to `AmazonProvidedDNS` to ensure successful cluster creation and operation.
*   To use a custom DNS server and domain name for your cluster, the {{ product_title }} installer must be able to use VPC DNS with default DHCP options so that it can resolve internal IPs and services. This means that you must create a custom DHCP option set to forward DNS lookups to your DNS server, and associate this option set with your VPC before you create the cluster.

**Procedure**

*   Confirm that your VPC is using VPC Resolver by running the following command:
    ```terminal
    $ aws ec2 describe-dhcp-options
    ```