{%- set _mod_docs_content_type = "CONCEPT" %}
# Multiple vCenter support for vSphere CSI {id="persistent-storage-csi-vsphere-multi-vcenter-support-overview_{{ context }}"}

To achieve high availability across vSphere infrastructure without shared storage, configure up to three vCenter clusters during {{ product_title }} installation. {._abstract}

{{ product_title }} v4.17, and later, supports this capability.


:::note

Multiple vCenters can only be configured **during** installation. Multiple vCenters **cannot** be configured after installation.

:::


The maximum number of supported vCenter clusters is three.