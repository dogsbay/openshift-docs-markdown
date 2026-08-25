{%- set _mod_docs_content_type = "SNIPPET" %}

The following table lists the platforms on which boot image management is available:

| Platform | Worker machine sets | Control plane machine sets |
| --- | --- | --- |
| {{ gcp_first }} | Enabled by default | Disabled by default |
| {{ aws_first }} | Enabled by default | Disabled by default |
| {{ azure_first }} | Enabled by default  | Disabled by default |
| {{ vmw_first }} | Enabled by default | Not supported |

For all other platforms, the MCO does not automatically update the boot image with each cluster update. Images from the Google Cloud Marketplace or AWS Marketplace are not automatically updated.

For clusters where automatic updates are disabled or not supported, you can manually update the boot image on your cluster. See "Manually updating the boot image" for information. The method to update or specify the image varies by platform.