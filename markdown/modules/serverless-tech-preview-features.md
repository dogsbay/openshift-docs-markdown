{%- set _mod_docs_content_type = "REFERENCE" %}
# Generally Available and Technology Preview features {id="serverless-tech-preview-features_{{ context }}"}

Features which are Generally Available (GA) are fully supported and are suitable for production use. Technology Preview (TP) features are experimental features and are not intended for production use. See the [Technology Preview scope of support on the Red Hat Customer Portal](https://access.redhat.com/support/offerings/techpreview) for more information about TP features.

The following table provides information about which {{ ServerlessProductName }} features are GA and which are TP:

{%- if openshift_enterprise or openshift_dedicated %}
**Generally Available and Technology Preview features tracker**

| Feature | 1.26 | 1.27 | 1.28 |
| --- | --- | --- | --- |
| `kn func` | GA | GA | GA |
| Quarkus functions | GA | GA | GA |
| Node.js functions | TP | TP | GA |
| TypeScript functions | TP | TP | GA |
| Python functions | - | - | TP |
| Service Mesh mTLS | GA | GA | GA |
| `emptyDir` volumes | GA | GA | GA |
| HTTPS redirection | GA | GA | GA |
| Kafka broker | GA | GA | GA |
| Kafka sink | GA | GA | GA |
| Init containers support for Knative services | GA | GA | GA |
| PVC support for Knative services | GA | GA | GA |
| TLS for internal traffic | TP | TP | TP |
| Namespace-scoped brokers | - | TP | TP |
| `multi-container support` | - | - | TP |
{% endif %}

{%- if openshift_rosa %}
**Generally Available and Technology Preview features tracker**

| Feature | 1.26 | 1.27 | 1.28 |
| --- | --- | --- | --- |
| `kn func` | GA | GA | GA |
| Service Mesh mTLS | GA | GA | GA |
| `emptyDir` volumes | GA | GA | GA |
| HTTPS redirection | GA | GA | GA |
| Kafka broker | GA | GA | GA |
| Kafka sink | TP | TP | TP |
| Init containers support for Knative services | GA | GA | GA |
| PVC support for Knative services | GA | GA | GA |
| TLS for internal traffic | TP | TP | TP |
| Namespace-scoped brokers | - | TP | TP |
| `multi-container support` | - | - | TP |
{% endif %}