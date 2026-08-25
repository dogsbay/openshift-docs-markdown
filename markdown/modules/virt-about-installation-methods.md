{%- set _mod_docs_content_type = "CONCEPT" %}
# About installation methods for {{ VirtProductName }} {id="virt-about-installation-methods_{{ context }}"}

You can install {{ VirtProductName }} on your {{ product_title }} cluster by using {{ olm_first }}, agent-based installation, or the Assisted Installer. {._abstract}


Standard installation by using {{ olm_first }}
:   Install the {{ VirtProductName }} Operator from the {{ product_title }} web console or CLI. This method is suitable for most deployment scenarios and provides the most flexibility for cluster configuration.

    For disconnected environments, you must configure {{ olm }} for restricted networks before installing {{ VirtProductName }}.


Agent-based installation
:   Use the Agent-based Installer to deploy a cluster with {{ VirtProductName }} and related operators pre-configured. This installation method is designed for users who want a streamlined, UI-driven installation experience, particularly in disconnected environments.
{%- set FeatureName = "Agent-based installation" %}
{% include "./snippets/technology-preview.md" %}


Assisted Installer with virtualization bundle
:   Use the Assisted Installer to deploy {{ VirtProductName }} or {{ ove_first }} by using the virtualization operator bundle, which includes {{ VirtProductName }} and essential supporting operators. This installation method simplifies the deployment process by pre-configuring operators and minimizing external dependencies. This is the preferred installation method for {{ ove }}.

## Choosing an installation method {id="_choosing_an_installation_method"}

Consider the following factors when choosing an installation method:

*   Network connectivity: For disconnected or air-gapped environments, the Agent-based Installer or Assisted Installer with the virtualization bundle can simplify deployment by reducing registry dependencies.
*   Installation experience: If you prefer a UI-driven installation workflow over writing YAML files, consider using the Agent-based Installer or Assisted Installer.
*   Operator requirements: If you need additional operators such as the Node Health Check Operator, Fence Agents Remediation Operator, or NMState Operator, the Assisted Installer virtualization bundle includes these operators by default.
*   Customization needs: For maximum flexibility in cluster configuration, use the standard {{ olm }} installation method.