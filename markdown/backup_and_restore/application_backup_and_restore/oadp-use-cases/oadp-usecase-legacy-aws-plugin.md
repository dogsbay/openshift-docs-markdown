---
title: Using the legacy-aws Velero plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the legacy-aws Velero plugin {id="oadp-using-legacy-aws-plugin"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-using-legacy-aws-plugin" %}

If you are using an {{ aws_short }} S3-compatible backup storage location, you might get a `SignatureDoesNotMatch` error while backing up your application. This error occurs because some backup storage locations still use the older versions of the S3 APIs, which are incompatible with the newer AWS SDK for Go V2. To resolve this issue, you can use the `legacy-aws` Velero plugin in the `DataProtectionApplication` custom resource (CR). The `legacy-aws` Velero plugin uses the older AWS SDK for Go V1, which is compatible with the legacy S3 APIs, ensuring successful backups.

{% leveloffset +1 %}{% include "./modules/oadp-using-legacy-aws-plugin.md" %}{% endleveloffset %}