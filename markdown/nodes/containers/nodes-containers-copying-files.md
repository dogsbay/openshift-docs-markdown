---
title: Copying files to or from OpenShift Container Platform containers
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-copying-files" %}
# Copying files to or from {{ product_title }} containers {id="nodes-containers-copying-files"}
{% include "./_attributes/common-attributes.md" %}

You can use the `oc rsync` command, or remote sync, to copy local files to or from a remote directory in a {{ product_title }} container.

The `oc rsync` command leverages the local Rsync tool on the client machine and the remote container for tasks such as copying database archives to and from your pods for backup and restore purposes,
or copying source code changes into a running pod for development debugging.


:::note

If the Rsync tool is not found locally or in the remote container, a **tar** archive
is created locally and sent to the container where the **tar** utility is used to
extract the files. If **tar** is not available in the remote container, the
copy fails.

:::


{% leveloffset +1 %}{% include "./modules/nodes-containers-copying-files-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-copying-files-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-copying-files-rsync.md" %}{% endleveloffset %}