---
title: Configuring your firewall
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring your firewall {id="configuring-firewall"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-firewall" %}

If you use a firewall, you must configure your allowlist for the firewall to ensure {{ product_title }} has access to the URLs it requires to pull container images and access Red Hat services. Additional URLs are required for features such as Telemetry, {{ red_hat_lightspeed }}, cloud provider integrations, or certain build strategies.

{% leveloffset +1 %}{% include "./modules/configuring-firewall-module.md" %}{% endleveloffset %}

**Additional resources**

*   [OpenID Connect requirements for AWS STS](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-auth-flow-aws-oidc_cco-short-term-creds)

{% leveloffset +1 %}{% include "./modules/network-flow-matrix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-commatrix-plugin-intro.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-commatrix-plugin-install.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ cli_manager }} overview](/cli_reference/cli_manager/index#cli-manager-overview)

{% leveloffset +1 %}{% include "./modules/network-commatrix-plugin-generate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/commatrix-restricting-ingress-traffic.md" %}{% endleveloffset %}

**Additional resources**

*   [Minimizing node disruption with MachineConfig changes](/machine_configuration/machine-config-node-disruption#machine-config-node-disruption)

{% leveloffset +1 %}{% include "./modules/commatrix-generate-butane.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing Butane](/installing/install_config/installing-customizing#installation-special-config-butane-install_installing-customizing)

{% leveloffset +1 %}{% include "./modules/commatrix-revert-nftables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/commatrix-plugin-reference.md" %}{% endleveloffset %}