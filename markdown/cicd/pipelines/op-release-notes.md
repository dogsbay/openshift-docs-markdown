{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ pipelines_title }} release notes {id="op-release-notes"}
{%- set context = "op-release-notes" %}

{{ pipelines_title }} is a cloud-native CI/CD experience based on the Tekton project which provides:

*   Standard Kubernetes-native pipeline definitions (CRDs).
*   Serverless pipelines with no CI server management overhead.
*   Extensibility to build images using any Kubernetes tool, such as S2I, Buildah, JIB, and Kaniko.
*   Portability across any Kubernetes distribution.
*   Powerful CLI for interacting with pipelines.
*   Integrated user experience with the **Developer** perspective of the {{ product_title }} web console.

For an overview of {{ pipelines_title }}, see [Understanding {{ pipelines_shortname }}](/cicd/pipelines/understanding-openshift-pipelines#understanding-openshift-pipelines).

{% leveloffset +1 %}{% include "./modules/op-tkn-pipelines-compatibility-support-matrix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-11.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-10.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-9.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-8.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-7.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-5.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-4.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-release-notes-1-0.md" %}{% endleveloffset %}