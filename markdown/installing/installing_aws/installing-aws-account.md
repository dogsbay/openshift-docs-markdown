---
title: "Configuring an {{ aws_short }} account"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an {{ aws_short }} account {id="installing-aws-account"}

{%- set context = "installing-aws-account" %}

To ensure {{ product_title }} can successfully install and run the cluster in {{ aws_first }}, you must configure an {{ aws_short }} account with the correct identity and permissions before you start the installation. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-aws-route53.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-endpoint-route53.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-limits.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Service Limits ({{ aws_short }} documentation)](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html)
*   [Regions and Zones ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
*   [NAT Gateways ({{ aws_short }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
*   [Elastic IP Addresses ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
*   [Region map ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure)
*   [Elastic load balancing ({{ aws_short }} documentation)](https://aws.amazon.com/elasticloadbalancing)

{% leveloffset +1 %}{% include "./modules/installation-aws-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-iam-user.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-iam-policies-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-permissions-iam-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-add-iam-roles.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Deploying the cluster](/installing/installing_aws/ipi/installing-aws-customizations#installation-launching-installer_installing-aws-customizations)

{% leveloffset +2 %}{% include "./modules/installation-aws-access-analyzer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-marketplace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-regions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Quickly install a cluster](/installing/installing_aws/ipi/installing-aws-default#installing-aws-default)
*   [Install a cluster with cloud customizations on installer-provisioned infrastructure](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)