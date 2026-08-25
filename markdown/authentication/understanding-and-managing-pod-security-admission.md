---
title: Understanding and managing pod security admission
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding and managing pod security admission {id="understanding-and-managing-pod-security-admission"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "understanding-and-managing-pod-security-admission" %}

You can configure pod security admission to enforce the Kubernetes pod security standards. You can apply this enforcement at both the global and namespace levels.

{% leveloffset +1 %}{% include "./modules/security-context-constraints-psa-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/security-context-constraints-psa-coexistence.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-psa-synchronization.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/security-context-constraints-psa-sync-exclusions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-psa-opting.md" %}{% endleveloffset %}

**Additional resources**

*   [Pod security admission synchronization namespace exclusions](/authentication/understanding-and-managing-pod-security-admission#security-context-constraints-psa-sync-exclusions_understanding-and-managing-pod-security-admission)

{% leveloffset +1 %}{% include "./modules/security-context-constraints-psa-label.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-context-constraints-psa-rectifying.md" %}{% endleveloffset %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/security-context-constraints-psa-alert-eval.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="additional-resources_managing-pod-security-admission"}

*   [Pod Security Admission (Kubernetes documentation)](https://kubernetes.io/docs/concepts/security/pod-security-admission)
*   [Pod Security Standards (Kubernetes documentation)](https://kubernetes.io/docs/concepts/security/pod-security-standards/)
*   [Audit Annotations (Kubernetes documentation)](https://kubernetes.io/docs/reference/labels-annotations-taints/audit-annotations/#pod-security-kubernetes-io-audit-violations)

{%- if not openshift_rosa_hcp %}
*   [Viewing audit logs](/security/audit-log-view#nodes-nodes-audit-log-basic-viewing_audit-log-view)
{%- endif %}
*   [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)