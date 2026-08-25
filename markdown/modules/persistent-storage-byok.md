{%- set _mod_docs_content_type = "CONCEPT" %}
# User-managed encryption {id="byok_{{ context }}"}

The user-managed encryption feature allows you to provide keys during installation that encrypt {{ product_title }} node root volumes, and enables all managed storage classes to use these keys to encrypt provisioned storage volumes.  {._abstract}

You must specify the custom key in the `platform.<cloud_type>.defaultMachinePlatform` field in the install-config YAML file.

This features supports the following storage types:

*   Amazon Web Services (AWS) Elastic Block storage (EBS)

    :::note

    If there is no encrypted key defined in the storage class, only set `encrypted: "true"` in the storage class. The AWS EBS CSI driver uses the AWS managed alias/aws/ebs, which is created by Amazon EBS automatically in each region by default to encrypt provisioned storage volumes. In addition, the managed storage classes all have the `encrypted: "true"` setting.
    
    :::


    For information about installing AWS EBS with user-managed encryption, see "Optional AWS configuration parameters".
*   Microsoft Azure Disk storage

    :::note

    If the OS (root) disk is encrypted, and there is no encrypted key defined in the storage class, Azure Disk CSI driver uses the OS disk encryption key by default to encrypt provisioned storage volumes.
    
    :::


    For information about installing Azure Disk with user-managed encryption, see "Preparing an Azure Disk Encryption Set".
*   Google Cloud Platform (GCP) persistent disk (PD) storage

    For information about installing GCP PD with user-managed encryption, see "Additional Google Cloud configuration parameters".
*   {{ ibm_cloud_name }} Virtual Private Cloud (VPC) Block storage

    For information about installing with {{ ibm_cloud_title }} with user-managed encryption, see "User-managed encryption for {{ ibm_cloud_title }}" and "Installing on {{ ibm_cloud_title }}".