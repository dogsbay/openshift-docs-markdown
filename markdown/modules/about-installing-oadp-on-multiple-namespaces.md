{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation of {{ oadp_short }} on multiple namespaces {id="about-installing-oadp-on-multiple-namespaces_{{ context }}"}

You can install {{ oadp_full }} into multiple namespaces on the same cluster so that multiple project owners can manage their own {{ oadp_short }} instance. This use case has been validated with File System Backup (FSB) and Container Storage Interface (CSI). {._abstract}

You install each instance of {{ oadp_short }} as specified by the per-platform procedures contained in this document with the following additional requirements:

*   All deployments of {{ oadp_short }} on the same cluster must be the same version, for example, 1.4.0. Installing different versions of {{ oadp_short }} on the same cluster is **not** supported.
*   Each individual deployment of {{ oadp_short }} must have a unique set of credentials and at least one `BackupStorageLocation` configuration. You can also use multiple `BackupStorageLocation` configurations within the same namespace.
*   By default, each {{ oadp_short }} deployment has cluster-level access across namespaces. {{ OCP }} administrators need to carefully review potential impacts, such as not backing up and restoring to and from the same namespace concurrently.