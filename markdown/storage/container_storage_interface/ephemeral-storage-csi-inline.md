---
title: CSI inline ephemeral volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# CSI inline ephemeral volumes {id="ephemeral-storage-csi-inline"}
{%- set context = "ephemeral-storage-csi-inline" %}

You can provision temporary, pod-specific storage by using Container Storage Interface (CSI) inline ephemeral volumes that are automatically created at pod deployment and removed at pod termination. {._abstract}

{% leveloffset +1 %}{% include "./modules/ephemeral-storage-csi-inline-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ builds_v2title }} 1.1](https://docs.redhat.com/en/documentation/builds_for_red_hat_openshift/1.1)

{% leveloffset +1 %}{% include "./modules/ephemeral-storage-csi-inline-overview-admin-plugin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ephemeral-storage-csi-inline-pod.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ephemeral-storage-csi-inline" ._additional-resources}
*   [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/)