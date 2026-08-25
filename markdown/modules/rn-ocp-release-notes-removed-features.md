{%- set _mod_docs_content_type = "REFERENCE" %}
# Removed features {id="rn-ocp-release-notes-removed-features_{{ context }}"}

This section includes removed features for {{ product_title }} {{ product_version }}. {._abstract}


Deprecation and Removal of Dynamic Accelerator Slicer (DAS)
:   The Dynamic Accelerator Slicer (DAS) Operator was introduced to allow dynamic GPU partitioning in {{ product_title }} until the Dynamic Resource Allocation (DRA) partitionable device feature is available. With the DRA feature available as a technology preview feature in {{ product_title }} {{ product_version }}, the DAS Operator has been deprecated and removed.

    For more information on DRA, see [Allocating GPUs to pods by using DRA](/nodes/pods/nodes-pods-allocate-dra#nodes-pods-allocate-dra).