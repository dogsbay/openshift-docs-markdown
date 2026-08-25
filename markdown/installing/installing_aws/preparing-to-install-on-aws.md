---
title: Installation methods
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation methods {id="installing-methods-aws"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "preparing-to-install-on-aws" %}

You can install {{ product_title }} on {{ aws_full }} using installer-provisioned, user-provisioned infrastructure, or on a single node, depending on the needs of your use case.

The default installation type uses installer-provisioned infrastructure, where the installation program provisions the underlying infrastructure for the cluster.

You can also install {{ product_title }} on infrastructure that you provision. If you do not use infrastructure that the installation program provisions, you must manage and maintain the cluster resources yourself.

You can also install {{ product_title }} on a single node, which is a specialized installation method that is ideal for edge computing environments.

{% leveloffset +1 %}{% include "./modules/installing-aws-ipi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-aws-upi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-aws-single-node.md" %}{% endleveloffset %}

## Additional resources {id="installing-methods-aws-ipi-additional-resources"}
*   [Installing a cluster quickly on AWS](/installing/installing_aws/ipi/installing-aws-default#installing-aws-default)
*   [Installing a customized cluster on AWS](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Post-installation](/post_installation_configuration/cluster-tasks#post-install-cluster-tasks)
*   [Installing a cluster on AWS in a restricted network](/installing/installing_aws/ipi/installing-restricted-networks-aws-installer-provisioned#installing-restricted-networks-aws-installer-provisioned)
*   [Installing a cluster on an existing Virtual Private Cloud](/installing/installing_aws/ipi/installing-aws-vpc#installing-aws-vpc)
*   [Installing a private cluster on an existing VPC](/installing/installing_aws/ipi/installing-aws-private#installing-aws-private)
*   [Installing a cluster on AWS into a government or secret region](/installing/installing_aws/ipi/installing-aws-specialized-region#installing-aws-specialized-region)
*   [Installing a cluster on AWS infrastructure that you provide](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)
*   [Installing a cluster on AWS in a restricted network with user-provisioned infrastructure](/installing/installing_aws/upi/installing-restricted-networks-aws#installing-restricted-networks-aws)
*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)