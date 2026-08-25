---
title: Configuring the registry for Red Hat OpenShift Data Foundation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the registry for Red Hat OpenShift Data Foundation {id="configuring-registry-storage-rhodf"}
{%- set context = "configuring-registry-storage-rhodf" %}

To configure the {{ product_registry }} on bare metal and vSphere to use {{ rh_storage_first }} storage, you must install {{ rh_storage }} and then configure image registry using Ceph or Noobaa. {._abstract}

{% leveloffset +1 %}{% include "./modules/registry-configuring-registry-storage-rhodf-cephrgw.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-registry-storage-rhodf-nooba.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-registry-storage-rhodf-cephfs.md" %}{% endleveloffset %}

## Additional resources {id="configuring-registry-storage-ocs" ._additional-resources}

*   [Configuring Image Registry to use {{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/managing_and_allocating_storage_resources/index#configuring-image-registry-to-use-openshift-data-foundation_rhodf)
*   [Performance tuning guide for Multicloud Object Gateway (NooBaa)](https://access.redhat.com/solutions/6719951)