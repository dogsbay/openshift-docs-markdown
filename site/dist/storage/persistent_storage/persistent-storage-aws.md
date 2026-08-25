---
title: Persistent storage using AWS Elastic Block Store
---

# Persistent storage using AWS Elastic Block Store {#persistent-storage-aws}

OpenShift Container Platform supports Amazon Elastic Block Store (EBS) volumes. You can provision your OpenShift Container Platform cluster with persistent storage by using Amazon EC2.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure. You can dynamically provision Amazon EBS volumes. Persistent volumes are not bound to a single project or namespace; they can be shared across the OpenShift Container Platform cluster. Persistent volume claims are specific to a project or namespace and can be requested by users. You can define a KMS key to encrypt container-persistent volumes on AWS. By default, newly created clusters by using OpenShift Container Platform version 4.10 and later use gp3 storage and the AWS EBS CSI driver.

> [!IMPORTANT]
> High-availability of storage in the infrastructure is left to the underlying storage provider.

> [!IMPORTANT]
> OpenShift Container Platform 4.12 and later provides automatic migration for the AWS Block in-tree volume plugin to its equivalent CSI driver.
>
> CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see CSI automatic migration.

## Additional resources {#additional-resources_persistent-storage-aws}

- [Amazon EC2 documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
- [AWS EBS CSI driver](https://github.com/openshift/aws-ebs-csi-driver)
- [CSI automatic migration](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
- [AWS Elastic Block Store CSI Driver Operator](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-ebs#persistent-storage-csi-ebs)
