{%- set _mod_docs_content_type = "CONCEPT" %}
# Secure the virtualization environment {id="virt-secure-the-virtualization-environment_{{ context }}"}

Protect virtual machine workloads and control access to virtualization features to maintain compliance and reduce security risks. {._abstract}

OpenShift Virtualization adheres to the `restricted` Kubernetes pod security standards profile, which aims to enforce the current best practices for pod security. Virtual machine (VM) workloads run as unprivileged pods. Security context constraints (SCCs) are defined for the `kubevirt-controller` service account. TLS certificates for OpenShift Virtualization components are renewed and rotated automatically.

You can also use role-based access control (RBAC) to manage user access to virtualization features. For example, an administrator can create an RBAC role that provides the permissions required to launch a virtual machine. The administrator can then restrict access by binding the role to specific users.

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted)
*   [About Security context constraints](/authentication/managing-security-context-constraints#security-context-constraints-about_configuring-internal-oauth)
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Managing security context constraints](/authentication/managing-security-context-constraints#security-context-constraints-about_configuring-internal-oauth)
*   [Creating a cluster role](/authentication/using-rbac#creating-cluster-role_using-rbac)
*   [Cluster role binding commands](/authentication/using-rbac#cluster-role-binding-commands_using-rbac)
*   [Enabling user permissions to clone data volumes across namespaces](/virt/storage/virt-enabling-user-permissions-to-clone-datavolumes#virt-enabling-user-permissions-to-clone-datavolumes)