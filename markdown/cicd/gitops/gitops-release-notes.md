{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ gitops_title }} release notes {id="gitops-release-notes"}
{%- set context = "gitops-release-notes" %}

{{ gitops_title }} is a declarative way to implement continuous deployment for cloud native applications. {{ gitops_title }} ensures consistency in applications when you deploy them to different clusters in different environments, such as: development, staging, and production. {{ gitops_title }} helps you automate the following tasks: {._abstract}

*   Ensure that the clusters have similar states for configuration, monitoring, and storage
*   Recover or recreate clusters from a known state
*   Apply or revert configuration changes to multiple {{ product_title }} clusters
*   Associate templated configuration with different environments
*   Promote applications across clusters, from staging to production

For an overview of {{ gitops_title }}, see [Understanding OpenShift GitOps](/cicd/gitops/understanding-openshift-gitops#understanding-openshift-gitops).

{% leveloffset +1 %}{% include "./modules/go-compatibility-and-support-matrix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-9-0.md" %}{% endleveloffset %}
{%- if openshift_enterprise %}

**Additional resources**
{._additional-resources}

*   [Injecting a custom CA certificate](/operators/admin/olm-configuring-proxy-support#olm-inject-custom-ca_olm-configuring-proxy-support) {._additional-resources}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-8-4.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-8-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-8-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-8-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-8-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-7-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-7-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-7-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-6-4.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-6-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-6-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-6-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-9.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-7.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-5.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-4.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-5-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-13.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-12.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-11.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-5.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-4-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-3-7.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-3-6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-3-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-3-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-3-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-2-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-2-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-release-notes-1-1.md" %}{% endleveloffset %}