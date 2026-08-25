{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the {{ StorageClass }} storage class using the console {id="storage-create-storage-class-console_{{ context }}"}

To enable dynamic provisioning of AWS Elastic File System (EFS) volumes using the console, create a `StorageClass` object that defines file system parameters, permissions, and access point configuration. {._abstract}

**Procedure**

1.  In the {{ product_title }} web console, click **Storage** -> **StorageClasses**.
1.  On the **StorageClasses** page, click **Create StorageClass**.
1.  On the **StorageClass** page, perform the following steps:
    1.  Enter a name to reference the storage class.
    1.  Optional: Enter the description.
    1.  Select the reclaim policy.
    1.  Select **`{{ Provisioner }}`** from the **Provisioner** drop-down list.
{%- if Provisioner == "kubernetes.io/aws-ebs" %}

        :::note

        To create the storage class with the equivalent CSI driver, select `{{ CsiDriver }}` from the drop-down list. For more information, see "AWS Elastic Block Store CSI Driver Operator".
        
        :::

{% endif %}
    1.  Optional: Set the configuration parameters for the selected provisioner.
1.  Click **Create**.