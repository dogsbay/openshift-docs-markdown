---
title: Adding compute machines to AWS by using CloudFormation templates
---

# Adding compute machines to AWS by using CloudFormation templates {#adding-aws-compute-user-infra}

To scale your OpenShift Container Platform cluster on {{ aws_first }} after user-provisioned installation, you can add compute machines by creating CloudFormation stacks from your installation templates. You can then approve certificate signing requests so the new nodes join the cluster.

## Prerequisites {#prerequisites_adding-aws-compute-user-infra}

- You installed your cluster on AWS by using the provided [AWS CloudFormation templates](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra).
- You have the JSON file and CloudFormation template that you used to create the compute machines during cluster installation. If you do not have these files, you must recreate them by following the instructions in the [installation procedure](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra).
