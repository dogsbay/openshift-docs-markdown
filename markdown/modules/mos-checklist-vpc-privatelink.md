{%- set _mod_docs_content_type = "PROCEDURE" %}
# VPC requirements for PrivateLink clusters {id="mos-checklist-vpc-privatelink_{{ context }}"}

If you choose to deploy a PrivateLink cluster, then be sure to deploy the cluster in the pre-existing BYO VPC: {._abstract}

{% include "./snippets/snip_install-cluster-in-vpc.md" %}

**Procedure**

1.  Create a public and private subnet for each AZ that your cluster uses.
    *   Alternatively, implement transit gateway for internet and egress with appropriate routes.
1.  The VPC’s CIDR block must contain the `Networking.MachineCIDR` range, which is the IP address for cluster machines.
    *   The subnet CIDR blocks must belong to the machine CIDR that you specify.
1.  Set both `enableDnsHostnames` and `enableDnsSupport` to `true`.
    *   That way, the cluster can use the Route 53 zones that are attached to the VPC to resolve cluster internal DNS records.
1.  Verify route tables by running:
        ----
        $ aws ec2 describe-route-tables --filters "Name=vpc-id,Values=<vpc-id>"
        ----
    1.  Ensure that the cluster can egress either through NAT gateway in public subnet or through transit gateway.
    1.  Ensure whatever UDR you want to follow is set up.
1.  You can also configure a cluster-wide proxy during or after install.

    :::note

    You can install a non-PrivateLink {{ product_title }} cluster in a pre-existing BYO VPC.
    
    :::