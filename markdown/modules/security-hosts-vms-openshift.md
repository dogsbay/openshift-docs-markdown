{%- set _mod_docs_content_type = "CONCEPT" %}
# Securing {{ product_title }} {id="security-hosts-vms-openshift_{{ context }}"}

To make your {{ product_title }} cluster more secure, you should understand the security enhancements you can make to your cluster. {._abstract}

When you deploy {{ product_title }}, you have the choice of an installer-provisioned infrastructure (there are several available platforms) or your own user-provisioned infrastructure.
{%- if not openshift_origin %}
Some low-level security-related configuration, such as enabling FIPS mode or adding kernel modules required at first boot, might benefit from a user-provisioned infrastructure.
{% endif %}
{% if openshift_origin %}
Some low-level security-related configuration, such as adding kernel modules required at first boot, might benefit from a user-provisioned infrastructure.
{%- endif %}
Likewise, user-provisioned infrastructure is appropriate for disconnected {{ product_title }} deployments.

Remember when it comes to making security enhancements and other configuration changes to {{ product_title }}, the goals should include:

*   Keeping the underlying nodes as generic as possible. You want to be able to easily throw away and spin up similar nodes quickly and in prescriptive ways.
*   Managing modifications to nodes through {{ product_title }} as much as possible, rather than making direct, one-off changes to the nodes.

In pursuit of those goals, most node changes should be done during installation through Ignition or later using MachineConfigs that are applied to sets of nodes by the Machine Config Operator. Examples of security-related configuration changes you can do in this way include:

*   Adding kernel arguments
*   Adding kernel modules
*   Enabling support for FIPS cryptography
*   Configuring disk encryption
*   Configuring the chrony time service

Besides the Machine Config Operator, there are several other Operators available to configure {{ product_title }} infrastructure that are managed by the Cluster Version Operator (CVO). The CVO is able to automate many aspects of {{ product_title }} cluster updates.