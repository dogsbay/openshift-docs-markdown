---
title: Red Hat OpenShift Data Foundation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Red Hat OpenShift Data Foundation {id="red-hat-openshift-data-foundation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-ocs" %}

You can deploy {{ rh_storage_first }} in your {{ product_title }} cluster as software-defined storage for containers.

{{ rh_storage_first }} is a provider of agnostic persistent storage for {{ product_title }} supporting file, block, and object storage, either in-house or in hybrid clouds. As a Red Hat storage solution, {{ rh_storage_first }} is completely integrated with {{ product_title }} for deployment, management, and monitoring. For more information, see {{ rh_storage_first }} documentation.


:::important

{{ rh_storage }} on top of Red Hat Hyperconverged Infrastructure (RHHI) for Virtualization, which uses hyperconverged nodes that host virtual machines installed with {{ product_title }}, is not a supported configuration. For more information about supported platforms, see the Red Hat OpenShift Data Foundation Supportability and Interoperability Guide.

:::


**Additional resources**

*   [{{ rh_storage_first }} documentation](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation)
*   [Red Hat OpenShift Data Foundation Supportability and Interoperability Guide](https://access.redhat.com/articles/4731161)