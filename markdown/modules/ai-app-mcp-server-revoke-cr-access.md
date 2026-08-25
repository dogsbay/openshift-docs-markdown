{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoke access to Custom Resources {id="ai-app-mcp-server-revoke-cr-access_{{ context }}"}

To prevent AI agents from reading or exposing confidential cluster data, you can revoke Model Context Protocol (MCP) server access to sensitive Custom Resources (CRs), such as Secrets and ConfigMaps, . {._abstract}

**Prerequisites**

*   Access to OpenShift console with admin rights.
*   The MCP server Helm chart is installed.
*   MCP-compatible client connected.
*   MCP gateway is installed and verified.
*   The MCP gateway is configured.
*   RBAC is configured.

**Procedure**

1.  Configure denied resources to limit access to sensitive CRs.

    Use the following example file to revoke access to Secrets, ConfigMaps, and RBAC resources:
    ```toml title="Example"
    # Deny access to Secrets
    [[denied_resources]]
    group = ""
    version = "v1"
    kind = "Secret"

    # Deny access to ConfigMaps
    [[denied_resources]]
    group = ""
    version = "v1"
    kind = "ConfigMap"

    # Deny access to RBAC resources for additional security
    [[denied_resources]]
    group = "rbac.authorization.k8s.io"
    version = "v1"
    kind = "Role"

    [[denied_resources]]
    group = "rbac.authorization.k8s.io"
    version = "v1"
    kind = "RoleBinding"

    [[denied_resources]]
    group = "rbac.authorization.k8s.io"
    version = "v1"
    kind = "ClusterRole"

    [[denied_resources]]
    group = "rbac.authorization.k8s.io"
    version = "v1"
    kind = "ClusterRoleBinding"
    ```
1.  Apply this configuration by doing one of the following:
    *   Save the configuration to a file (for example, `deny-resources.toml`) and pass it using a Helm values file:
        ```terminal
        $ helm upgrade openshift-mcp-server openshift-helm-charts/redhat-openshift-mcp-server \
            -n openshift-mcp-server \
            --set-file config.deniedResources=deny-resources.toml
        ```
    *   Or use `--set-json` to pass the configuration inline:
        ```terminal
        $ helm upgrade openshift-mcp-server openshift-helm-charts/redhat-openshift-mcp-server \
            -n openshift-mcp-server \
            --set-json 'config.deniedResources=[{"group":"","version":"v1","kind":"Secret"},{"group":"","version":"v1","kind":"ConfigMap"}]'
        ```