---
title: Adding compute machines to AWS by using CloudFormation templates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding compute machines to AWS by using CloudFormation templates {id="adding-aws-compute-user-infra"}
{%- set context = "adding-aws-compute-user-infra" %}

To scale your {{ product_title }} cluster on {{ aws_first }} after user-provisioned installation, you can add compute machines by creating CloudFormation stacks from your installation templates. You can then approve certificate signing requests so the new nodes join the cluster. {._abstract}

## Prerequisites {id="prerequisites_adding-aws-compute-user-infra"}

*   You installed your cluster on AWS by using the provided [AWS CloudFormation templates](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra).
*   You have the JSON file and CloudFormation template that you used to create the compute machines during cluster installation. If you do not have these files, you must recreate them by following the instructions in the [installation procedure](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra).

{% leveloffset +1 %}{% include "./modules/machine-adding-aws-compute-cloudformation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}