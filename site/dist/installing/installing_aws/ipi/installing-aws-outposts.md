---
title: Extending an AWS VPC cluster into an AWS Outpost
---

# Extending an AWS VPC cluster into an AWS Outpost {#installing-aws-outposts}

In OpenShift Container Platform version 4.14, you could install a cluster on Amazon Web Services (AWS) with compute nodes running in AWS Outposts as a Technology Preview. As of OpenShift Container Platform version 4.15, this installation method is no longer supported. Instead, you can install a cluster on AWS into an existing VPC, and provision compute nodes on AWS Outposts as a postinstallation configuration task.

After [installing a cluster on Amazon Web Services (AWS) into an existing Amazon Virtual Private Cloud (VPC)](/installing/installing_aws/ipi/installing-aws-vpc#installing-aws-vpc), you can create a compute machine set that deploys compute machines in AWS Outposts. AWS Outposts is an AWS edge compute service that enables using many features of a cloud-based AWS deployment with the reduced latency of an on-premise environment. For more information, see the [AWS Outposts documentation](https://docs.aws.amazon.com/outposts/).

**Additional resources**

- [Using the AWS Load Balancer Operator in an AWS VPC cluster extended into an Outpost](/installing/installing_aws/ipi/installing-aws-outposts#nw-aws-load-balancer-with-outposts_installing-aws-outposts)

**Additional resources**

- [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)

**Additional resources**

- [Creating the AWS Load Balancer Controller](/networking/networking_operators/aws_load_balancer_operator/install-aws-load-balancer-operator#nw-creating-instance-aws-load-balancer-controller_aws-load-balancer-operator)

## Additional resources {#additional-installing-aws-outposts}

- [Installing a cluster on AWS into an existing VPC](/installing/installing_aws/ipi/installing-aws-vpc#installing-aws-vpc)
