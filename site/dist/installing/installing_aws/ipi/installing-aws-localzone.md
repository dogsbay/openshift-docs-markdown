---
title: Installing a cluster with compute nodes on AWS Local Zones
---

# Installing a cluster with compute nodes on AWS Local Zones {#installing-aws-localzone}

You can quickly install an OpenShift Container Platform cluster on Amazon Web Services (AWS) Local Zones by setting the zone names in the edge compute pool of the `install-config.yaml` file, or install a cluster in an existing Amazon Virtual Private Cloud (VPC) with Local Zone subnets.

AWS Local Zones is an infrastructure that place Cloud Resources close to metropolitan regions. For more information, see the [AWS Local Zones Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones).

**Additional resources**

- [MTU value selection](/openshift-docs-markdown/networking/advanced_networking/changing-cluster-network-mtu#mtu-value-selection_changing-cluster-network-mtu)
- [Changing the MTU for the cluster network](/openshift-docs-markdown/networking/advanced_networking/changing-cluster-network-mtu#nw-ovn-ipsec-enable_configuring-ipsec-ovn)
- [Understanding taints and tolerations](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
- [Storage classes](/openshift-docs-markdown/storage/understanding-persistent-storage#pvc-storage-class_understanding-persistent-storage)
- [Ingress Controller sharding](/openshift-docs-markdown/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#nw-ingress-sharding_configuring-ingress-cluster-traffic-ingress-controller)
- [How Local Zones work ({{ aws_short }} documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html)

**Additional resources**

- [AWS Local Zones features ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/)

**Additional resources**

- [AWS resources supported in Local Zones ({{ aws_short }} documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html#considerations)

**Additional resources**

- [Creating the installation configuration file](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-localzone#installation-generate-aws-user-infra-install-config_installing-aws-localzone)
- [Cluster limitations in AWS Local Zones](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-localzone#cluster-limitations-aws-zone_installing-aws-localzone)
- [Deploying the cluster](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-localzone#installation-launching-installer_installing-aws-localzone)

**Additional resources**

- [{{ aws_short }} CloudFormation console ({{ aws_short }} documentation)](https://console.aws.amazon.com/cloudformation/)

**Additional resources**

- [{{ aws_short }} CloudFormation console](https://console.aws.amazon.com/cloudformation)
- [Configuration and credential file settings in the {{ aws_short }} CLI ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [Deploying the cluster](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-localzone#installation-launching-installer_installing-aws-localzone)

**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)

## Additional resources {#additional-resources_installing-aws-localzone}

- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
