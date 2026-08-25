{%- set _mod_docs_content_type = "REFERENCE" %}
# Agent-based installer {id="telco-ran-agent-based-installer-abi_{{ context }}"}

The optional Agent-based Installer component provides installation capabilities without centralized infrastructure. {._abstract}


New in this release
:   *   No reference design updates in this release

Description
:   The optional Agent-based Installer component provides installation capabilities without centralized infrastructure.
    The installation program creates an ISO image that you mount to the server.
    When the server boots it installs {{ product_title }} and supplied extra manifests.
    The Agent-based Installer allows you to install {{ product_title }} without a hub cluster.
    A container image registry is required for cluster installation.


Limits and requirements
:   *   You can supply a limited set of additional manifests at installation time.
    *   You must include `MachineConfiguration` CRs that are required by the RAN DU use case.

Engineering considerations
:   *   The Agent-based Installer provides a baseline {{ product_title }} installation.
    *   You install Day 2 Operators and the remainder of the RAN DU use case configurations after installation.