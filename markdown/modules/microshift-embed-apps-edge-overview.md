{%- set _mod_docs_content_type = "CONCEPT" %}
# Embed applications in a {{ op_system_ostree }} image {id="microshift-embed-apps-edge-overview_{{ context }}"}

You can embed microservices-based workloads and applications in a {{ op_system_ostree_first }} image to run in a {{ microshift_short }} node. Embedded applications can be installed directly on edge devices to run in disconnected or offline environments. {._abstract}

You can embed applications in a {{ op_system_ostree }} image using one of the following methods:

*   Build your own RPM that includes your application manifests, add the RPM to your {{ op_system_ostree }} blueprint, and create a bootable ISO.
*   Embed workload container images directly into the {{ op_system_ostree }} image for fully offline, air-gapped deployments.