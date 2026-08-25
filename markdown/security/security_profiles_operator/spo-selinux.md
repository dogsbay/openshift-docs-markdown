---
title: Managing SELinux profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing SELinux profiles {id="spo-selinux"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "spo-selinux" %}

To control what namespaced workloads can access on {{ op_system }} nodes, use the Security Profiles Operator to create SELinux profiles, bind them to pods, and record policies from running applications.


:::important

The Security Profiles Operator supports only Red Hat Enterprise Linux CoreOS (RHCOS) worker nodes. Red Hat Enterprise Linux (RHEL) nodes are not supported.

:::


{% leveloffset +1 %}{% include "./modules/spo-create-selinux-profile.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-applying-profiles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-selinux-permissive.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-binding-workloads.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-replicating-controllers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-recording-profiles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-container-profile-instances.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-selinux-runasany.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_spo-selinux"}

*   [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)
*   [Managing SCCs in OpenShift](https://cloud.redhat.com/blog/managing-sccs-in-openshift)
*   [About security profiles](/security/security_profiles_operator/spo-understanding#spo-about_spo-understanding)
*   [Use the log enricher](/security/security_profiles_operator/spo-advanced#spo-log-enricher_spo-advanced)
*   [Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/)
*   [Pod Security Standard](https://kubernetes.io/docs/concepts/security/pod-security-standards/#privileged)