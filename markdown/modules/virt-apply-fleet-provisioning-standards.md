{%- set _mod_docs_content_type = "CONCEPT" %}
# Apply fleet provisioning standards {id="virt-apply-fleet-provisioning-standards_{{ context }}"}

Ensure that all VMs in your environment have the agents and drivers needed for full platform integration. Without these components, features such as quiesced snapshots, live migration reporting, and optimized I/O do not work correctly. {._abstract}

{{ VirtProductName }} relies on the following components:


QEMU guest agent
:   Enables communication between the host and the VM operating system. Required for quiesced snapshots and accurate VM status reporting.


VirtIO drivers
:   Provide optimized disk and network I/O performance. Required for Windows VMs.

To apply fleet provisioning standards, you must:

*   Install the QEMU guest agent on Linux and Windows VMs.
*   Install VirtIO drivers on Windows VMs.
*   Keep both components up to date to maintain compatibility with your {{ VirtProductName }} version.