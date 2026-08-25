{%- set _mod_docs_content_type = "SNIPPET" %}


:::note

By default, if your cluster uses an `ImageDigestMirrorSet`, `ImageTagMirrorSet`, or `ImageContentSourcePolicy` object to configure repository mirroring, you must use a global pull secret for mirrored registries. You cannot add an image pull secret to a project.

However, you can configure a cluster-wide `CRIOCredentialProviderConfig` object to enable project-scoped image pull secrets that you can use with mirrored repositories. For more information, see "Configuring project-scoped image pull secrets for mirrored registries".

:::