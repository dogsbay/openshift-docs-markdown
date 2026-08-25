{%- set _mod_docs_content_type = "CONCEPT" %}
# Encryption {id="cloud-experts-key-features-rosa-encryption_{{ context }}"}

{{ product_title }} uses encryption keys stored in KMS to encrypt EBS volumes, with options for customer-provided keys, data encryption at rest, and etcd encryption. {._abstract}

## Encryption keys {id="_encryption_keys"}
{{ product_title }} uses a key stored in KMS to encrypt EBS volumes. Customers also have the option to provide their own KMS keys at cluster creation.

## KMS keys {id="_kms_keys"}
If you specify a KMS key, the control plane, infrastructure and worker node root volumes and the persistent volumes are encrypted with the key.

## Data encryption {id="_data_encryption"}
By default, there is encryption at rest. The AWS Storage platform automatically encrypts your data before persisting it and decrypts the data before retrieval. See [AWS EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) for more details.

You can also encrypt etcd in the cluster, combining it with AWS storage encryption. This results in double the encryption which adds up to a 20% performance hit.

## etcd encryption {id="_etcd_encryption"}
etcd encryption can only be enabled at cluster creation.


:::note

etcd encryption incurs additional overhead with negligible security risk mitigation.

:::


## etcd encryption configuration {id="_etcd_encryption_configuration"}
etcd encryption is configured the same as in OpenShift Container Platform. The aescbc cypher is used and the setting is patched during cluster deployment. For more details, see the [Kubernetes documentation](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/).

## Multi-region KMS keys for EBS encryption {id="_multi-region_kms_keys_for_ebs_encryption"}
Currently, the {{ rosa_cli }} does not accept multi-region KMS keys for EBS encryption. This feature is in our backlog for product updates. The {{ rosa_cli }} accepts single region KMS keys for EBS encryption if it is defined at cluster creation.