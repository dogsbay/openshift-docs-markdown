{%- set _mod_docs_content_type = "CONCEPT" %}
# Precache images for disconnected ZTP {id="precache-images-for-disconnected-ztp-intro_{{ context }}"}

In environments with limited bandwidth where you use the {{ ztp }} solution to deploy a large number of clusters, you want to avoid downloading all the images that are required for bootstrapping and installing {{ product_title }}. The limited bandwidth at remote {{ sno }} sites can cause long deployment times. The `factory-precaching-cli` tool allows you to pre-stage servers before shipping them to the remote site for ZTP provisioning. {._abstract}

{%- set FeatureName = "The `factory-precaching-cli` tool" %}
{% include "./snippets/technology-preview.md" %}

The `factory-precaching-cli` tool does the following:

*   Downloads the {{ op_system }} rootfs image that is required by the minimal ISO to boot.
*   Creates a partition from the installation disk labeled as `data`.
*   Formats the disk in `xfs`.
*   Creates a GUID Partition Table (GPT) data partition at the end of the disk, where the size of the partition is configurable by the tool.
*   Copies the container images required to install {{ product_title }}.
*   Copies the container images required by {{ ztp }} to install {{ product_title }}.
*   Optional: Copies Day-2 Operators to the partition.