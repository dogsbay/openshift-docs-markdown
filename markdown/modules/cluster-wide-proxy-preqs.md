{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites for configuring a cluster-wide proxy {id="cluster-wide-proxy-prereqs_{{ context }}"}

To configure a cluster-wide proxy, you must meet the following requirements. These requirements are valid when you configure a proxy during installation or postinstallation. {._abstract}

## General requirements {id="cluster-wide-proxy-general-prereqs_{{ context }}"}

*   You are the cluster owner.
*   Your account has enough privileges.
{%- if openshift_rosa or openshift_rosa_hcp %}
*   You have an existing Virtual Private Cloud (VPC) for your cluster.
{%- endif %}
{%- if openshift_dedicated %}
*   You have an existing VPC for your cluster.
*   You are using the Customer Cloud Subscription (CCS) model for your cluster.
{%- endif %}
*   The proxy can access the VPC for the cluster and the private subnets of the VPC. The proxy must also be accessible from the VPC for the cluster and from the private subnets of the VPC.
*   You have added the following endpoints to your VPC endpoint:
    *   `ec2.<aws_region>.amazonaws.com`
    *   `elasticloadbalancing.<aws_region>.amazonaws.com`
    *   `s3.<aws_region>.amazonaws.com`

        These endpoints are required to complete requests from the nodes to the AWS EC2 API. Because the proxy works at the container level and not at the node level, you must route these requests to the AWS EC2 API through the AWS private network. Adding the public IP address of the EC2 API to your allowlist in your proxy server is not enough.

        :::important

        When using a cluster-wide proxy, you must configure the `s3.<aws_region>.amazonaws.com` endpoint as type `Gateway`.
        
        :::


## Network requirements {id="cluster-wide-proxy-network-prereqs_{{ context }}"}

If your proxy re-encrypts egress traffic, you must create exclusions to several domain and port combinations required by OpenShift.

Your proxy must exclude re-encrypting the following OpenShift URLs:

**URLs to exclude from egress traffic re-encryption**

| Address | Protocol/Port | Function |
| --- | --- | --- |
| `observatorium-mst.api.openshift.com` | https/443 | Required. Used for Managed OpenShift-specific telemetry. |
| `sso.redhat.com` | https/443 | The `console.redhat.com/openshift` site uses authentication from `sso.redhat.com` to download the cluster pull secret and use Red Hat SaaS solutions to ease monitoring of your subscriptions, cluster inventory, and chargeback reporting. |