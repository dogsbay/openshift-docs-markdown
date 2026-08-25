{%- set _mod_docs_content_type = "CONCEPT" %}
# About this release {id="microshift-4-22-about-this-release_{{ context }}"}

Built on {{ OCP }} and Kubernetes, {{ microshift_short }} provides an efficient way to operate a single node in low-resource edge environments. {._abstract}

{{ microshift_short }} is designed to make control plane restarts economical and be lifecycle-managed as a single unit by the operating system. Updates, roll-backs, and configuration changes consist of simply staging another version in parallel and then - without relying on a network - flipping to and from that version and restarting.

Version {{ product_version }} of {{ microshift_short }} includes new features and enhancements. Update to the latest version of {{ microshift_short }} to receive all of the latest features, bug fixes, and security updates. {{ microshift_short }} is derived from {{ OCP }} {{ ocp_version }} and uses the CRI-O container runtime. New features, changes, and known issues that pertain to {{ microshift_short }} are included in this topic.

You can deploy a {{ microshift_short }} node to on-premise, cloud, disconnected, and offline environments.

{{ microshift_short }} {{ product_version }} is supported on {{ op_system_base_full }} {{ op_system_version }}.

For lifecycle information, see the [{{ product_title }} Life Cycle Policy](https://access.redhat.com/product-life-cycles?product=Red%20Hat%20build%20of%20Microshift,Red%20Hat%20Device%20Edge).