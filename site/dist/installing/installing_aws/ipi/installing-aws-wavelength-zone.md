---
title: Installing a cluster with compute nodes on AWS Wavelength Zones
---

# Installing a cluster with compute nodes on AWS Wavelength Zones {#installing-aws-wavelength-zone}

You can quickly install an OpenShift Container Platform cluster on Amazon Web Services (AWS) Wavelength Zones by setting the zone names in the edge compute pool of the `install-config.yaml` file, or install a cluster in an existing Amazon Virtual Private Cloud (VPC) with Wavelength Zone subnets.

AWS Wavelength Zones is an infrastructure that AWS configured for mobile edge computing (MEC) applications.

A Wavelength Zone embeds AWS compute and storage services within the 5G network of a communication service provider (CSP). By placing application servers in a Wavelength Zone, the application traffic from your 5G devices can stay in the 5G network. The application traffic of the device reaches the target server directly, making latency a non-issue.

**Additional resources**

- [Wavelength Zones({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-wavelength-zones)

**Additional resources**

- [MTU value selection](/openshift-docs-markdown/networking/advanced_networking/changing-cluster-network-mtu#mtu-value-selection_changing-cluster-network-mtu)
- [Changing the MTU for the cluster network](/openshift-docs-markdown/networking/advanced_networking/changing-cluster-network-mtu#nw-ovn-ipsec-enable_configuring-ipsec-ovn)
- [Understanding taints and tolerations](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
- [Storage classes](/openshift-docs-markdown/storage/understanding-persistent-storage#pvc-storage-class_understanding-persistent-storage)
- [Ingress Controller sharding](/openshift-docs-markdown/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#nw-ingress-sharding_configuring-ingress-cluster-traffic-ingress-controller)
- [How {{ aws_short }} Wavelength works ({{ aws_short }} documentation)](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html)

**Additional resources**

- [AWS Wavelength features({{ aws_short }} documentation)](https://aws.amazon.com/wavelength/features/)

**Additional resources**

- [Creating the installation configuration file](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-wavelength-zone#installation-generate-aws-user-infra-install-config_installing-aws-wavelength-zone)
- [Cluster limitations in AWS Wavelength Zones](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-wavelength-zone#cluster-limitations-aws-zone_installing-aws-wavelength-zone)
- [Deploying the cluster](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-wavelength-zone#installation-launching-installer_installing-aws-wavelength-zone)

**Additional resources**

- [Amazon S3 ({{ aws_short }} documentation)](https://aws.amazon.com/s3/)

**Additional resources**

- [{{ aws_short }} CloudFormation console](https://console.aws.amazon.com/cloudformation)
- [Configuration and credential file settings in the {{ aws_short }} CLI ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [Deploying the cluster](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-wavelength-zone#installation-launching-installer_installing-aws-wavelength-zone)

**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)

## Additional resources {#additional-resources_installing-aws-wavelength-zone}

- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
