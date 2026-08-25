---
title: Inspect clusters with MCP server for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Inspect clusters with MCP server for Red Hat OpenShift {id="mcp-server-overview"}
{%- set context = "mcp-server-overview" %}

When problems occur on your {{ product_title }} cluster, you want to determine exactly what is happening, so that you can fix the issue as soon as possible. The MCP server for Red Hat OpenShift feature provides an AI tool to quickly and easily diagnose your {{ product_title }} cluster. {._abstract}

{%- set FeatureName = "MCP server for Red Hat OpenShift" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-ai-safety.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Revoke access to Custom Resources](/ai_applications/mcp_server/mcp-server-overview#ai-app-mcp-server-revoke-cr-access_mcp-server-overview)
*   [Install the MCP server](/ai_applications/mcp_server/mcp-server-overview#ai-app-mcp-server-install-helm_mcp-server-overview)

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-model-context-protocol-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-mcp-server-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-mcp-gateway-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-prompting-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-install-helm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-connect-client.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-install-gateway.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Install the MCP gateway (Red Hat Connectivity Link)](https://docs.redhat.com/en/documentation/red_hat_connectivity_link/1.4/html/install_the_mcp_gateway/index)

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-verify-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-configure-gateway.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-configure-rbac.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-revoke-cr-access.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-setup-authentication.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id)

{% leveloffset +2 %}{% include "./modules/ai-app-mcp-server-setup-authorization.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-app-mcp-server-prompting-instructions.md" %}{% endleveloffset %}