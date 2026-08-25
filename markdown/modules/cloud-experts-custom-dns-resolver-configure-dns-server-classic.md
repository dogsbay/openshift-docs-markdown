{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure your DNS server {id="cloud-experts-custom-dns-resolver-configure-dns-server-classic_{{ context }}"}

Configure your Domain Name System (DNS) server to forward the private hosted zone to your Amazon Route 53 Inbound Resolver so the {{ product_title }} cluster can resolve internal DNS names after creation. {._abstract}

The following private hosted zone must be forwarded:

*   `<domain-prefix>.<unique-ID>.p1.openshiftapps.com`

This Amazon Route 53 private hosted zone is created during cluster creation. The `domain-prefix` is a customer-specified value, but the `unique-ID` is randomly generated during cluster creation and cannot be preselected. As such, you must wait for the cluster creation process to begin before configuring forwarding for the `p1.openshiftapps.com` private hosted zone.

**Procedure**

1.  Create your cluster.
1.  After your cluster has begun the creation process, locate the newly created private hosted zone:
    ```terminal
    $ aws route53 list-hosted-zones-by-vpc \
      --vpc-id ${VPC_ID} \
      --vpc-region ${REGION} \
      --query 'HostedZoneSummaries[*].Name' \
      --output table
    ```
    ```text title="Example output"
    ----------------------------------------------
    |           ListHostedZonesByVPC             |
    +--------------------------------------------+
    |  domain-prefix.agls.p3.openshiftapps.com.  |
    +--------------------------------------------+
    ```

    :::note

    It may take a few minutes for the cluster creation process to create the private hosted zones in Route 53. If you do not see a `p1.openshiftapps.com` domain, wait a few minutes and run the command again.
    
    :::

1.  When you know the unique ID of the cluster domain, configure your DNS server to forward all DNS requests for `<domain-prefix>.<unique-ID>.p1.openshiftapps.com` to your Amazon Route 53 Inbound Resolver endpoints.

    If you use a BIND DNS server, add a new zone to the `/etc/named.conf` file using the following example:
    ```terminal
    zone "<domain-prefix>.<unique-ID>.p1.openshiftapps.com" {
      type forward;
      forward only;
      forwarders {
        10.0.45.253;
        10.0.23.131;
        10.0.148.159;
      };
    };
    ```
    *   Replace `<domain-prefix>` with your cluster domain prefix and `<unique-ID>` with your unique ID collected above.
    *   Replace with the IP addresses of your inbound resolver endpoints collected above, ensuring that following each IP address there is a `;`.