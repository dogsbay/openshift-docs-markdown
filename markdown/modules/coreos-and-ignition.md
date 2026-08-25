{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ op_system_first }} and Ignition {id="coreos-and-ignition_{{ context }}"}

{{ op_system_first }} is a single-purpose container operating system that uses Ignition for initial configuration during cluster deployment. {._abstract}

As a cluster administrator, you can perform the following {{ op_system_first }} tasks:

*   Learn about the next generation of single-purpose container operating system technology.
*   Choose how to configure {{ op_system_first }}
*   Choose how to deploy {{ op_system_first }}:
    *   Installer-provisioned deployment
    *   User-provisioned deployment

The {{ product_title }} installation program creates the Ignition configuration files that you need to deploy your cluster.
{{ op_system_first }} uses Ignition during the initial configuration to perform common disk tasks, such as partitioning, formatting, writing files, and configuring users.
During the first boot, Ignition reads its configuration from the installation media or the location that you specify and applies the configuration to the machines.

You can learn how Ignition works, the process for a {{ op_system_first }} machine in an {{ product_title }} cluster, view Ignition configuration files, and change Ignition configuration after an installation.