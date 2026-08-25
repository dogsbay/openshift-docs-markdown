{%- set _mod_docs_content_type = "CONCEPT" %}
# Authorization {id="virt-security-policies-auth_{{ context }}"}

{{ VirtProductName }} uses role-based access control (RBAC) to define permissions for human users and service accounts. The permissions defined for service accounts control the actions that {{ VirtProductName }} components can perform. {._abstract}

You can also use RBAC roles to manage user access to virtualization features. For example, an administrator can create an RBAC role that provides the permissions required to launch a virtual machine. The administrator can then restrict access by binding the role to specific users.