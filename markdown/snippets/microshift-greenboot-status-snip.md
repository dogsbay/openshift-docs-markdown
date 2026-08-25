{%- set _mod_docs_content_type = "SNIPPET" %}


:::note

If you want to make configuration changes or deploy applications through the {{ microshift_short }} API with tools other than `kustomize` manifests, you must wait until the greenboot health checks have finished. This ensures that your changes are not lost if greenboot rolls your `rpm-ostree` system back to an earlier state.

:::