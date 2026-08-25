---
title: Persistent storage using AWS Elastic Block Store
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using AWS Elastic Block Store {id="persistent-storage-aws"}
{%- set context = "persistent-storage-aws" %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{{ product_title }} clusters are prebuilt with two storage classes that use Amazon Elastic Block Store (Amazon EBS) volumes. These storage classes are ready to use and some familiarity with Kubernetes and AWS is assumed. {._abstract}

The following are the two prebuilt storage classes:
| Name | Provisioner |
| --- | --- |
| gp2-csi | ebs.csi.aws.com |
| gp3-csi (default) | ebs.csi.aws.com |

The gp3-csi storage class is set as default; however, you can select any of the storage classes as the default storage class.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{{ product_title }} supports Amazon Elastic Block Store (EBS) volumes.
You can provision your {{ product_title }} cluster with persistent storage by using Amazon EC2.
{% endif %}

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.
You can dynamically provision Amazon EBS volumes.
Persistent volumes are not bound to a single project or namespace; they can be shared across the {{ product_title }} cluster.
Persistent volume claims are specific to a project or namespace and can be requested by users.
You can define a KMS key to encrypt container-persistent volumes on AWS.
By default, newly created clusters by using {{ product_title }} version 4.10 and later use gp3 storage and the AWS EBS CSI driver.


:::important

High-availability of storage in the infrastructure is left to the underlying storage provider.

:::


{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

:::important

{{ product_title }} 4.12 and later provides automatic migration for the AWS Block in-tree volume plugin to its equivalent CSI driver.

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see CSI automatic migration.

:::

{% endif %}

{%- set StorageClass = "EBS" -%}
{%- set Provisioner = "kubernetes.io/aws-ebs" -%}
{%- set CsiDriver = "ebs.csi.aws.com" %}

{% leveloffset +1 %}{% include "./modules/storage-create-storage-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-creating-volume-claim.md" %}{% endleveloffset %}

{%- set provider = "AWS" %}
{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-volume-format.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-aws-maximum-volumes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-volume-encrypt-with-kms-key.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_persistent-storage-aws" ._additional-resources}

*   [Amazon EC2 documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
*   [AWS EBS CSI driver](https://github.com/openshift/aws-ebs-csi-driver)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
{%- endif %}
*   [AWS Elastic Block Store CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-ebs#persistent-storage-csi-ebs)