{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

The `.../.snapshot` directory is a snapshot copy directory, which is used by several NFS servers. This directory has read-only access by default, so Velero cannot restore to this directory.

Do not give Velero write access to the `.snapshot` directory, and disable client access to this directory.

:::