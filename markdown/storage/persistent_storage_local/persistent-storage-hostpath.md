---
title: Persistent storage using hostPath
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using hostPath {id="persistent-storage-using-hostpath"}
{%- set context = "persistent-storage-hostpath" %}

A hostPath volume mounts a file or directory from the host node’s filesystem into your pod. Use hostPath volumes primarily for testing or development, as they require privileged pods and grant access to the host node’s filesystem. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-hostpath-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-hostpath-static-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-hostpath-pod.md" %}{% endleveloffset %}