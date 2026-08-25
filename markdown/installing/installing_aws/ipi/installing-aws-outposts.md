---
title: Extending an AWS VPC cluster into an AWS Outpost
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Extending an AWS VPC cluster into an AWS Outpost {id="installing-aws-outposts"}
{%- set context = "installing-aws-outposts" -%}
{%- set zone_type = "AWS Outposts" %}

In {{ product_title }} version 4.14, you could install a cluster on Amazon Web Services (AWS) with compute nodes running in AWS Outposts as a Technology Preview. As of {{ product_title }} version 4.15, this installation method is no longer supported. {._abstract}

Instead, you can install a cluster on AWS into an existing VPC, and provision compute nodes on AWS Outposts as a postinstallation configuration task.

After following the instructions in "Installing a cluster on Amazon Web Services (AWS) into an existing Amazon Virtual Private Cloud (VPC)", you can create a compute machine set that deploys compute machines in AWS Outposts.
AWS Outposts is an AWS edge compute service that enables using many features of a cloud-based AWS deployment with the reduced latency of an on-premise environment.
For more information, see the "AWS Outposts documentation".

{% leveloffset +1 %}{% include "./modules/aws-outposts-requirements-limitations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using the AWS Load Balancer Operator in an AWS VPC cluster extended into an Outpost](/installing/installing_aws/ipi/installing-aws-outposts#nw-aws-load-balancer-with-outposts_installing-aws-outposts)

{% leveloffset +1 %}{% include "./modules/aws-outposts-environment-info.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/aws-outposts-environment-info-oc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/aws-outposts-environment-info-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/aws-outposts-config-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-change.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-change-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-checking.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-migration.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-verifying-configuration.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-finalizing-migration.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-subnets-edge.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-subnet-localzone.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/aws-outposts-machine-set.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/create-user-workloads-aws-edge.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/aws-outposts-schedule-workloads.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/aws-outposts-load-balancer-clb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-aws-load-balancer-with-outposts.md" %}{% endleveloffset %}

## Additional resources {id="additional-installing-aws-outposts" ._additional-resources}

*   [Installing a cluster on AWS into an existing VPC](/installing/installing_aws/ipi/installing-aws-vpc#installing-aws-vpc)
*   [AWS Outposts documentation](https://docs.aws.amazon.com/outposts/)
*   [Creating the AWS Load Balancer Controller](/networking/networking_operators/aws_load_balancer_operator/install-aws-load-balancer-operator#nw-creating-instance-aws-load-balancer-controller_aws-load-balancer-operator)