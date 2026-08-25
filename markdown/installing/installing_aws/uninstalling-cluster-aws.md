---
title: "Uninstalling a cluster on {{ aws_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling a cluster on {{ aws_short }} {id="uninstalling-cluster-aws"}
{%- set context = "uninstall-cluster-aws" %}

You can remove a cluster that you deployed to {{ aws_first }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-uninstall-clouds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-ccoctl-deleting-sts-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-delete-cluster.md" %}{% endleveloffset %}

## Additional resources {id="installing-localzone-additional-resources" ._additional-resources}

*   [Working with stacks ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)
*   [Opt in to {{ aws_short }} Local Zones ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#opt-in-local-zone)
*   [{{ aws_short }} Local Zones available locations ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure/localzones/locations)
*   [{{ aws_short }} Local Zones features ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure/localzones/features)