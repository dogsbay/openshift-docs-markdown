{%- set _mod_docs_content_type = "SNIPPET" %}


:::warning

When you define the `allowedRegistries` parameter, all registries, including `registry.redhat.io`, `quay.io`, and the default {{ product_registry }}, are blocked unless explicitly listed. You must add all of the registries that your payload images require to the `allowedRegistries` list. For example, list `registry.redhat.io`, `quay.io`, and the `internalRegistryHostname` registries. For disconnected clusters, you must also add your mirror registries. Otherwise, you risk pod failure.

:::