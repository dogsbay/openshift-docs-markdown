---
title: Installing a cluster with compute nodes on AWS Local Zones
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster with compute nodes on AWS Local Zones {id="installing-aws-localzone"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-aws-localzone" -%}
{%- set zone_type = "Local Zones" %}

You can quickly install an {{ product_title }} cluster on Amazon Web Services (AWS) {{ zone_type }} by setting the zone names in the edge compute pool of the `install-config.yaml` file, or install a cluster in an existing Amazon Virtual Private Cloud (VPC) with Local Zone subnets.

AWS {{ zone_type }} is an infrastructure that place Cloud Resources close to metropolitan regions. For more information, see the [AWS Local Zones Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones).

{% leveloffset +1 %}{% include "./modules/installing-aws-localzone-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-limitations-aws-zone.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/edge-machine-pools-aws-local-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [MTU value selection](/networking/advanced_networking/changing-cluster-network-mtu#mtu-value-selection_changing-cluster-network-mtu)
*   [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#nw-ovn-ipsec-enable_configuring-ipsec-ovn)
*   [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
*   [Storage classes](/storage/understanding-persistent-storage#pvc-storage-class_understanding-persistent-storage)
*   [Ingress Controller sharding](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#nw-ingress-sharding_configuring-ingress-cluster-traffic-ingress-controller)
*   [How Local Zones work ({{ aws_short }} documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html)

{% leveloffset +1 %}{% include "./modules/installation-aws-add-zone-locations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-tested-machine-types.md" %}{% endleveloffset %}

**Additional resources**

*   [AWS Local Zones features ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/)

{% leveloffset +1 %}{% include "./modules/installation-generate-aws-user-infra-install-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-edge-compute-pools-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-cluster-network-mtu.md" %}{% endleveloffset %}

**Additional resources**

*   [AWS resources supported in Local Zones ({{ aws_short }} documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html#considerations)

{% leveloffset +1 %}{% include "./modules/aws-cluster-installation-options-aws-lzs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-cluster-quickly-extend-compute-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/install-creating-install-config-aws-edge-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating the installation configuration file](/installing/installing_aws/ipi/installing-aws-localzone#installation-generate-aws-user-infra-install-config_installing-aws-localzone)
*   [Cluster limitations in AWS Local Zones](/installing/installing_aws/ipi/installing-aws-localzone#cluster-limitations-aws-zone_installing-aws-localzone)
*   [Deploying the cluster](/installing/installing_aws/ipi/installing-aws-localzone#installation-launching-installer_installing-aws-localzone)

{% leveloffset +1 %}{% include "./modules/install-aws-localzone-existing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-localzone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-vpc-localzone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-subnets-lz.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-subnet-localzone.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ aws_short }} CloudFormation console ({{ aws_short }} documentation)](https://console.aws.amazon.com/cloudformation/)

{% leveloffset +2 %}{% include "./modules/installing-aws-edge-zones-custom-vpc-config.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ aws_short }} CloudFormation console](https://console.aws.amazon.com/cloudformation)
*   [Configuration and credential file settings in the {{ aws_short }} CLI ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
*   [Deploying the cluster](/installing/installing_aws/ipi/installing-aws-localzone#installation-launching-installer_installing-aws-localzone)

{% leveloffset +1 %}{% include "./modules/installation-aws-security-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-with-edge-node-public.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/machine-edge-pool-review-nodes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)