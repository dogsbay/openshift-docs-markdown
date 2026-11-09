{%- set _mod_docs_content_type = "REFERENCE" %}
# Removed features {id="rn-ocp-release-notes-removed-features_{{ context }}"}

This section includes removed features for {{ product_title }} {{ product_version }}. {._abstract}


Deprecation and Removal of Dynamic Accelerator Slicer (DAS)
:   The Dynamic Accelerator Slicer (DAS) Operator was introduced to allow dynamic GPU partitioning in {{ product_title }} until the Dynamic Resource Allocation (DRA) partitionable device feature is available. With the DRA feature available as a technology preview feature in {{ product_title }} {{ product_version }}, the DAS Operator has been deprecated and removed.

    For more information on DRA, see [Allocating GPUs to pods by using DRA](/nodes/pods/nodes-pods-allocate-dra#nodes-pods-allocate-dra).


Removal of unsupported DHE and CBC-mode ciphers for OpenShift Virtualization
:   Before this update, `Old` and `Intermediate` Transport Layer Security (TLS) security profiles contained unsupported Diffie-Hellman-Ephemeral (DHE) and Cipher Block Chaining (CBC) mode ciphers. As a consequence, upgrading {{ VirtProductName }} failed if existing `NetworkAddonsConfig` custom resources still listed these unsupported ciphers. With this release, TLS security profiles are aligned with Mozilla Server Side TLS v5.7 guidelines and unsupported DHE ciphers are removed from default TLS profile configuration. `Custom` TLS profiles require manual removal of the removed ciphers. As a result, {{ VirtProductName }} is successfully upgraded.