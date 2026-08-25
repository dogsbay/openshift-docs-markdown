---
title: Installation requirements for user-provisioned infrastructure on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation requirements for user-provisioned infrastructure on AWS {id="upi-aws-installation-reqs"}
{%- set context = "upi-aws-installation-reqs" %}

Before you install {{ product_title }} on infrastructure that you provision, ensure that your {{ aws_first }} environment meets the installation requirements. {._abstract}

For a cluster that has user-provisioned infrastructure, you must deploy all of the required machines.

{% leveloffset +1 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-aws-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-user-infra-other-infrastructure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-user-infra-cluster-machines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-marketplace-subscribe.md" %}{% endleveloffset %}