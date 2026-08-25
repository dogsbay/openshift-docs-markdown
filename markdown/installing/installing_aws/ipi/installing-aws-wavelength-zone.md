---
title: Installing a cluster with compute nodes on AWS Wavelength Zones
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster with compute nodes on AWS Wavelength Zones {id="installing-aws-wavelength-zone"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-aws-wavelength-zone" -%}
{%- set zone_type = "Wavelength Zones" %}

You can quickly install an {{ product_title }} cluster on Amazon Web Services (AWS) {{ zone_type }} by setting the zone names in the edge compute pool of the `install-config.yaml` file, or install a cluster in an existing Amazon Virtual Private Cloud (VPC) with Wavelength Zone subnets.

AWS {{ zone_type }} is an infrastructure that AWS configured for mobile edge computing (MEC) applications.

A Wavelength Zone embeds AWS compute and storage services within the 5G network of a communication service provider (CSP). By placing application servers in a Wavelength Zone, the application traffic from your 5G devices can stay in the 5G network. The application traffic of the device reaches the target server directly, making latency a non-issue.

**Additional resources**

*   [Wavelength Zones({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-wavelength-zones)

{% leveloffset +1 %}{% include "./modules/installing-aws-wavelength-zone-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-limitations-aws-zone.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/edge-machine-pools-aws-local-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [MTU value selection](/networking/advanced_networking/changing-cluster-network-mtu#mtu-value-selection_changing-cluster-network-mtu)
*   [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#nw-ovn-ipsec-enable_configuring-ipsec-ovn)
*   [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
*   [Storage classes](/storage/understanding-persistent-storage#pvc-storage-class_understanding-persistent-storage)
*   [Ingress Controller sharding](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#nw-ingress-sharding_configuring-ingress-cluster-traffic-ingress-controller)
*   [How {{ aws_short }} Wavelength works ({{ aws_short }} documentation)](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html)

{% leveloffset +1 %}{% include "./modules/installation-aws-add-zone-locations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-tested-machine-types.md" %}{% endleveloffset %}

**Additional resources**

*   [AWS Wavelength features({{ aws_short }} documentation)](https://aws.amazon.com/wavelength/features/)

{% leveloffset +1 %}{% include "./modules/installation-generate-aws-user-infra-install-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-edge-compute-pools-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/aws-cluster-installation-options-aws-lzs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-cluster-quickly-extend-compute-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/install-creating-install-config-aws-edge-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating the installation configuration file](/installing/installing_aws/ipi/installing-aws-wavelength-zone#installation-generate-aws-user-infra-install-config_installing-aws-wavelength-zone)
*   [Cluster limitations in AWS {{ zone_type }}](/installing/installing_aws/ipi/installing-aws-wavelength-zone#cluster-limitations-aws-zone_installing-aws-wavelength-zone)
*   [Deploying the cluster](/installing/installing_aws/ipi/installing-aws-wavelength-zone#installation-launching-installer_installing-aws-wavelength-zone)

{% leveloffset +1 %}{% include "./modules/install-aws-wavelength-zone-existing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-localzone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-vpc-localzone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-carrier-gw.md" %}{% endleveloffset %}

**Additional resources**

*   [Amazon S3 ({{ aws_short }} documentation)](https://aws.amazon.com/s3/)

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-vpc-carrier-gw.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-vpc-subnets-wz.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-subnet-localzone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-aws-edge-zones-custom-vpc-config.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ aws_short }} CloudFormation console](https://console.aws.amazon.com/cloudformation)
*   [Configuration and credential file settings in the {{ aws_short }} CLI ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
*   [Deploying the cluster](/installing/installing_aws/ipi/installing-aws-wavelength-zone#installation-launching-installer_installing-aws-wavelength-zone)

{% leveloffset +1 %}{% include "./modules/installing-with-edge-node-public.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/machine-edge-pool-review-nodes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
*   If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).