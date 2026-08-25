---
title: Creating a cluster with multi-architecture compute machines on Google Cloud
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "creating-multi-arch-compute-nodes-google-cloud" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a cluster with multi-architecture compute machines on Google Cloud {id="creating-multi-arch-compute-nodes-google-cloud"}

To deploy a cluster on {{ gcp_full }} with multi-architecture compute machines, you must first create a single-architecture installer-provisioned cluster that uses the multi-architecture installer binary.  {._abstract}

You can also migrate your current cluster with single-architecture compute machines to a cluster with multi-architecture compute machines. After creating a multi-architecture cluster, you can add nodes with different architectures to the cluster. 

{% leveloffset +1 %}{% include "./modules/multi-architecture-modify-machine-set-google-cloud.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
*   [Tested instance types for {{ gcp_short }} on 64-bit ARM infrastructures](/installing/installing_gcp/installing-gcp-customizations#installation-gcp-tested-machine-types-arm_installing-gcp-customizations)
*   [Setting custom metadata](https://cloud.google.com/compute/docs/metadata/setting-custom-metadata)