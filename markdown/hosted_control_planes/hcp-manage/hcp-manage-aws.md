---
title: "Managing {{ hcp }} on {{ aws_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing {{ hcp }} on {{ aws_short }} {id="hcp-manage-aws"}
{%- set context = "hcp-managing-aws" %}

After you deploy a hosted cluster on {{ aws_first }}, you can manage the cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/hcp-manage-aws-prereq.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-manage-aws-infra-req.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-manage-aws-infra-ho-req.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-unmanaged-aws-hc-prereq.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-managed-aws-infra-mgmt.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-managed-aws-infra-hc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-k8s-managed-aws-infra-hc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-managed-aws-iam.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-managed-aws-infra-iam-separate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-managed-aws-infra-separate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-managed-aws-hc-separate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-migrate-aws-single-to-multiarch.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-migrate-aws-multiarch-nodepools.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-aws-tags.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-np-capacity-blocks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-np-capacity-blocks-destroy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-aws-spot-instance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-config-sqs-eventbridge.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Getting started with Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html)
*   [Getting started: Create an Amazon EventBridge event bus rule](https://docs.aws.amazon.com/eventbridge/latest/userguide/event-bus-rule-get-started.html)

{% leveloffset +2 %}{% include "./modules/hcp-aws-spot-instance-enable.md" %}{% endleveloffset %}