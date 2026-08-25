---
title: Security policies
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Security policies {id="virt-security-policies"}
{%- set context = "virt-security-policies" %}

{{ VirtProductName }} provides built-in security features and authorization policies to protect virtual machine workloads and ensure secure cluster operations across your environment. {._abstract}

**Key points**

*   {{ VirtProductName }} adheres to the `restricted` Kubernetes pod security standards profile, which aims to enforce the current best practices for pod security.
*   Virtual machine (VM) workloads run as unprivileged pods.
*   Security context constraints (SCCs) are defined for the `kubevirt-controller` service account. For more information about SSCs, see "Additional resources".
*   TLS certificates for {{ VirtProductName }} components are renewed and rotated automatically.

{% leveloffset +1 %}{% include "./modules/virt-about-workload-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-automatic-certificates-renewal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-security-policies-auth.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-default-cluster-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-storage-rbac-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-additional-scc-for-kubevirt-controller.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted)
*   [About Security context constraints](/authentication/managing-security-context-constraints#security-context-constraints-about_configuring-internal-oauth)
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Managing security context constraints](/authentication/managing-security-context-constraints#security-context-constraints-about_configuring-internal-oauth)
*   [Creating a cluster role](/authentication/using-rbac#creating-cluster-role_using-rbac)
*   [Cluster role binding commands](/authentication/using-rbac#cluster-role-binding-commands_using-rbac)
*   [Enabling user permissions to clone data volumes across namespaces](/virt/storage/virt-enabling-user-permissions-to-clone-datavolumes#virt-enabling-user-permissions-to-clone-datavolumes)