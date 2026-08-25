{%- set _mod_docs_content_type = "CONCEPT" %}
# Unmanaged infrastructure requirements for a management {{ aws_short }} account {id="hcp-unmanaged-aws-hc-prereq_{{ context }}"}

When your infrastructure is prerequired and unmanaged in a hosted cluster {{ aws_first }} account, ensure that you are familiar with the infrastructure requirements for all access modes. {._abstract}

*   One VPC
*   One DHCP Option
*   Two subnets
    *   A private subnet that is an internal data plane subnet
    *   A public subnet that enables access to the internet from the data plane
*   One internet gateway
*   One elastic IP
*   One NAT gateway
*   One security group (worker nodes)
*   Two route tables (one private and one public)
*   Two Route 53 hosted zones
*   Enough quota for the following items:
    *   One Ingress service load balancer for public hosted clusters
    *   One private link endpoint for private hosted clusters


    :::note

    For private link networking to work, the endpoint zone in the hosted cluster {{ aws_short }} account must match the zone of the instance that is resolved by the service endpoint in the management cluster {{ aws_short }} account. In {{ aws_short }}, the zone names are aliases, such as us-east-2b, which do not necessarily map to the same zone in different accounts. As a result, for private link to work, the management cluster must have subnets or workers in all zones of its region.
    
    :::