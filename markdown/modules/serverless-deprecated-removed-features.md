{%- set _mod_docs_content_type = "REFERENCE" %}
# Deprecated and removed features {id="serverless-deprecated-removed-features_{{ context }}"}

Some features that were Generally Available (GA) or a Technology Preview (TP) in previous releases have been deprecated or removed. Deprecated functionality is still included in {{ ServerlessProductName }} and continues to be supported; however, it will be removed in a future release of this product and is not recommended for new deployments.

For the most recent list of major functionality deprecated and removed within {{ ServerlessProductName }}, refer to the following table:

{%- if openshift_enterprise or openshift_dedicated %}

**Deprecated and removed features tracker**

| Feature | 1.20 | 1.21 | 1.22 to 1.26 | 1.27 | 1.28 |
| --- | --- | --- | --- | --- | --- |
| `KafkaBinding` API | Deprecated | Deprecated | Removed | Removed | Removed |
| `kn func emit` (`kn func invoke` in 1.21+) | Deprecated | Removed | Removed | Removed | Removed |
| Serving and Eventing `v1alpha1` API | - | - | - | Deprecated | Deprecated |
| `enable-secret-informer-filtering` annotation | - | - | - | - | Deprecated |

{% endif %}

{%- if openshift_rosa %}

**Deprecated and removed features tracker**

| Feature | 1.23 to 1.26 | 1.27 | 1.28 |
| --- | --- | --- | --- |
| `KafkaBinding` API | Removed | Removed | Removed |
| `kn func emit` (`kn func invoke` in 1.21+) | Removed | Removed | Removed |
| Serving and Eventing `v1alpha1` API | - | Deprecated | Deprecated |

{% endif %}