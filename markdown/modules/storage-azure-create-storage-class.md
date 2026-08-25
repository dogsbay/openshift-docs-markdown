{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the Azure storage class {id="storage-create-azure-storage-class_{{ context }}"}

You can use storage classes to differentiate and delineate storage levels and usages. By defining a storage class, you can obtain dynamically provisioned persistent volumes. {._abstract}

**Procedure**

1.  In the {{ product_title }} web console, click **Storage** -> **Storage Classes**.
1.  In the storage class overview, click **Create Storage Class**.
1.  Define the desired options on the page that appears.
    1.  Enter a name to reference the storage class.
    1.  Enter an optional description.
    1.  Select the reclaim policy.
    1.  Select `kubernetes.io/azure-disk` from the drop down list.
        1.  Enter the storage account type. This corresponds to your Azure
        storage account SKU tier. Valid options are `Premium_LRS`, `PremiumV2_LRS`, `Standard_LRS`,
        `StandardSSD_LRS`, and `UltraSSD_LRS`.

            :::important

            The skuname `PremiumV2_LRS` is not supported in all regions, and in some supported regions, not all of the availability zones are supported. For more information, see [Azure doc](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-deploy-premium-v2).
            
            :::

        1.  Enter the kind of account. Valid options are `shared`, `dedicated,`
        and `managed`.

            :::important

            Red Hat only supports the use of `kind: Managed` in the storage class.

            With `Shared` and `Dedicated`, Azure creates unmanaged disks, while {{ product_title }} creates a managed disk for machine OS (root) disks. But because Azure Disk does not allow the use of both managed and unmanaged disks on a node, unmanaged disks created with `Shared` or `Dedicated` cannot be attached to {{ product_title }} nodes.
            
            :::

    1.  Enter additional parameters for the storage class as desired.
1.  Click **Create** to create the storage class.