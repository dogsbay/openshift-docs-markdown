{%- set _mod_docs_content_type = "CONCEPT" %}
# About disk mirroring {id="installation-special-config-mirrored-disk_{{ context }}"}

During {{ product_title }} installation on control plane and compute nodes, you can enable mirroring of the boot and other disks to two or more redundant storage devices. A node continues to function after storage device failure if one device remains available. {._abstract}

Mirroring does not support replacement of a failed disk. To restore the mirror to a pristine and non-degraded state, you must reprovision the node.


:::note

For user-provisioned infrastructure deployments, mirroring is available only on {{ op_system }} systems. Mirroring is available on `x86_64` nodes booted with BIOS or UEFI and on `ppc64le` nodes.

:::