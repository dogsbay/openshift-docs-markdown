---
title: Installing a cluster on AWS in a disconnected environment
---

# Installing a cluster on AWS in a disconnected environment {#installing-restricted-networks-aws-installer-provisioned}

You can install a cluster on {{ aws_first }} in a restricted network by creating an internal mirror of the installation release content on an existing {{ aws_short }} Virtual Private Cloud (VPC). By using this configuration, you can deploy a cluster in an environment with limited internet connectivity to help ensure compliance with security policies.

**Additional resources**

- [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

**Additional resources**

- [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

## Additional resources {#additional-resources_installing-restricted-networks-aws-installer-provisioned}

- [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Configure image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected)
- [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
- [Configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
- [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
