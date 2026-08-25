{%- set _mod_docs_content_type = "REFERENCE" %}
# Hub cluster storage requirements {id="telco-hub-storage-requirements_{{ context }}"}

The total amount of storage required by the management hub cluster is dependant on the storage requirements for each of the applications deployed on the cluster.
The main components that require storage through highly available `PersistentVolume` resources are described in the following sections. {._abstract}


:::note

The storage required for the underlying {{ product_title }} installation is separate to these requirements.

:::