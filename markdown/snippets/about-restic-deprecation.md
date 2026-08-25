{%- set _mod_docs_content_type = "SNIPPET" %}


:::note

With {{ oadp_short }} 1.5.0, the `configuration.restic.podConfig.resourceAllocations` specification field is removed from Data Protection Application (DPA). Use the `nodeAgent` section with the `uploaderType` field set to `Kopia` instead of `Restic` .

:::