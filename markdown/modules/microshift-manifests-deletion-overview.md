{%- set _mod_docs_content_type = "CONCEPT" %}
# How manifest deletion works {id="microshift-manifests-deletion-overview_{{ context }}"}

By default, {{ microshift_short }} searches for deletion manifests in the `delete` subdirectories within the manifests path. When a user places a manifest in these subdirectories, {{ microshift_short }} removes the manifests when the system is started. {._abstract}

Read through the following to understand how manifests deletion works in {{ microshift_short }}.

1.  Each time the system starts, before applying the manifests, {{ microshift_short }} scans the following `delete` subdirectories within the configured manifests directory to identify the manifests that need to be deleted:
    *   `/usr/lib/microshift/manifests/delete`
    *   `/usr/lib/microshift/manifests.d/delete/*`
    *   `/etc/microshift/manifests/delete`
    *   `/etc/microshift/manifests.d/delete/*`
1.  {{ microshift_short }} deletes the resources defined in the manifests found in the `delete` directories by running the equivalent of the `kubectl delete --ignore-not-found -k` command.

## Use cases for manifest resource deletion {id="microshift-examples-of-usecase_{{ context }}"}

The following sections explain the use case in which the manifest resource deletion is used.