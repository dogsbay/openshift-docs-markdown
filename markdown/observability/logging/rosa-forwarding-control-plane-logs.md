{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Forwarding control plane logs {id="rosa-forwarding-control-plane-logs"}

{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "rosa-configuring-the-log-forwarder" %}

{{ product_title }} provides a control plane log forwarder that is a separate system outside your cluster. You can use the control plane log forwarder to send your logs to either an Amazon CloudWatch group or Amazon S3 bucket. {._abstract}

The {{ product_title }} control plane log forwarder is a managed system and it does not use resources reserved for workloads on your worker nodes.

{% leveloffset +1 %}{% include "./modules/rosa-determine-log-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-create-an-iam-role-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-set-up-cloudwatch-log-group.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-set-up-s3-bucket.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-manage-control-plane-log-forwarding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-verify-karpenter-log-forwarding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-create-cluster-ui-log-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-create-cluster-log-forwarding-ui.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-edit-cluster-log-forwarding-ui.md" %}{% endleveloffset %}