---
title: Accessing faster builds with /dev/fuse
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-dev-fuse" %}
# Accessing faster builds with /dev/fuse {id="nodes-containers-dev-fuse"}
{% include "./_attributes/common-attributes.md" %}

You can configure your pods with the `/dev/fuse` device to enable faster and more efficient container image builds, particularly for unprivileged users. This device allows unprivileged pods to mount overlay filesystems, which can be leveraged by tools such as Podman.

{% leveloffset +1 %}{% include "./modules/nodes-containers-dev-fuse-configuring.md" %}{% endleveloffset %}