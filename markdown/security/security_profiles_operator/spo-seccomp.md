---
title: Managing seccomp profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing seccomp profiles {id="spo-seccomp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "spo-seccomp" %}

Create and manage seccomp profiles and bind them to workloads.


:::important

The Security Profiles Operator supports only Red Hat Enterprise Linux CoreOS (RHCOS) worker nodes. Red Hat Enterprise Linux (RHEL) nodes are not supported.

:::


{% leveloffset +1 %}{% include "./modules/spo-create-seccomp-profile.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-applying-profiles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-binding-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-recording-profiles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/spo-container-profile-instances.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_spo-seccomp"}

*   [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)
*   [Managing SCCs in OpenShift](https://cloud.redhat.com/blog/managing-sccs-in-openshift)
*   [Using the log enricher](/security/security_profiles_operator/spo-advanced#spo-log-enricher_spo-advanced)
*   [About security profiles](/security/security_profiles_operator/spo-understanding#spo-about_spo-understanding)