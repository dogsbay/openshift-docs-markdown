{%- set _mod_docs_content_type = "CONCEPT" %}
# How to deploy {{ op_system }} {id="rhcos-deployed_{{ context }}"}

Differences between {{ op_system }} installations for {{ product_title }} are based on if you are deploying on an installer-provisioned or user-provisioned infrastructure. {._abstract}

The following list describes the differences between these infrastructure types:

*   **Installer-provisioned infrastructure**: Some cloud environments offer preconfigured infrastructures so that you can start an {{ product_title }} cluster with minimal configuration. For these types of installations, you can supply Ignition configs that place content on each node so it is there when the cluster first boots.
*   **User-provisioned infrastructure**: If you are provisioning your own infrastructure, you have more flexibility in how you add content to a {{ op_system }} node. For example, you could add kernel arguments when you boot the {{ op_system }} ISO installer to install each system. However, in most cases where configuration is required on the operating system itself, it is best to provide that configuration through an Ignition config.

The Ignition facility runs only when the {{ op_system }} system is first set up. After that, Ignition configs can be supplied later using the machine config.