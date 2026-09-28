{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a 64-bit ARM boot image by using the {{ azure_short }} Compute Gallery {id="create-arm64-boot-image-using-azure-image-gallery-con_{{ context }}"}

To add 64-bit ARM compute nodes to an {{ azure_short }} cluster, upload the {{ op_system }} VHD to a storage account and publish it as a versioned image in an {{ azure_short }} Compute Gallery. Compute machine sets can then reference that image when they provision virtual machines.