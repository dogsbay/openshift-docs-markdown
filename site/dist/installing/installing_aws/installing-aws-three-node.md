---
title: Installing a three-node cluster on {{ aws_short }}
---

# Installing a three-node cluster on {{ aws_short }} {#installing-aws-three-node}

In OpenShift Container Platform version 4.22, you can install a three-node cluster on {{ aws_first }}. A three-node cluster consists of three control plane machines, which also act as compute machines.

This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production.

You can install a three-node cluster using either installer-provisioned or user-provisioned infrastructure.

> [!NOTE]
> Deploying a three-node cluster using an {{ aws_short }} Marketplace image is not supported.

## Additional resources {#_additional_resources}

- [Installing a cluster on AWS with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
- [Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)
