{%- set _mod_docs_content_type = "REFERENCE" %}
# Build capability {id="build-config-capability_{{ context }}"}

The `Build` capability enables the `Build` API. The `Build` API manages the lifecycle of `Build` and `BuildConfig` objects. {._abstract}


:::important

If you disable the `Build` capability, the following resources will not be available in the cluster:

*   `Build` and `BuildConfig` resources
*   The `builder` service account

Disable the `Build` capability only if you do not require `Build` and `BuildConfig` resources or the `builder` service account in the cluster.

:::