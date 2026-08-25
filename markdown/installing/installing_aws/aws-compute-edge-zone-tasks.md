---
title: AWS Local Zone or Wavelength Zone tasks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AWS Local Zone or Wavelength Zone tasks {id="aws-compute-edge-zone-tasks"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "aws-compute-edge-zone-tasks" -%}
{%- set zone_type = "Local Zones or Wavelength Zones" %}

After you install {{ product_title }} on {{ aws_first }}, you can further configure {{ aws_short }} {{ zone_type }} and an edge compute pool. Configure {{ aws_short }} networking, subnets, compute pools, security groups, and zone data so {{ product_title }} can create efficient, isolated edge compute nodes in {{ aws_short }} {{ zone_type }} with correct placement, networking, and workload control.

{% leveloffset +1 %}{% include "./modules/post-install-edge-aws-extend-cluster.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ aws_short }} Local Zones features ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/)
*   [{{ aws_short }} Wavelength features ({{ aws_short }} documentation)](https://aws.amazon.com/wavelength/features/)

{% leveloffset +2 %}{% include "./modules/edge-machine-pools-aws-local-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [How {{ aws_short }} Local Zones work ({{ aws_short }} documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html)
*   [How {{ aws_short }} Wavelength works ({{ aws_short }} documentation)](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html)

{% leveloffset +1 %}{% include "./modules/installation-changing-cluster-mtu-zones-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-change-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-change.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-change-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-checking.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-migration.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-verifying-configuration.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-cluster-mtu-finalizing-migration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-add-zone-locations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-extend-existing-to-zone-type.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-carrier-gw.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-vpc-carrier-gw.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-subnets-edge.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-subnet-localzone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-edge-aws-extend-machineset.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/machineset-yaml-aws.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on AWS with compute nodes on AWS Local Zones](/installing/installing_aws/ipi/installing-aws-localzone#installing-aws-localzone)
*   [Installing a cluster on AWS with compute nodes on AWS Wavelength Zones](/installing/installing_aws/ipi/installing-aws-wavelength-zone#installing-aws-wavelength-zone)
*   [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
*   [Installing the AWS Load Balancer Operator](/networking/networking_operators/aws_load_balancer_operator/install-aws-load-balancer-operator#install-aws-load-balancer-operator_install-aws-load-balancer-operator)

{% leveloffset +1 %}{% include "./modules/installation-extend-edge-nodes-aws-local-zones-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-extend-edge-nodes-aws-local-zones.md" %}{% endleveloffset %}