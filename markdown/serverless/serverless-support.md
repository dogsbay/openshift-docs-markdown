{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ ServerlessProductName }} support {id="serverless-support"}
{%- set context = "serverless-support" %}

If you experience difficulty with a procedure described in this documentation, visit the Red Hat Customer Portal at http://access.redhat.com. You can use the Red Hat Customer Portal to search or browse through the Red Hat Knowledgebase of technical support articles about Red Hat products. You can also submit a support case to Red Hat Global Support Services (GSS), or access other product documentation.

If you have a suggestion for improving this guide or have found an error, you can submit a [Jira issue](https://issues.redhat.com/secure/CreateIssueDetails!init.jspa?pid=12332330&summary=Documentation_issue&issuetype=1&components=12367614&priority=10200&versions=12391126) for the most relevant documentation component. Provide specific details, such as the section number, guide name, and {{ ServerlessProductName }} version so we can easily locate the content.

{%- if openshift_enterprise or openshift_dedicated %}

{% leveloffset +1 %}{% include "./modules/support-knowledgebase-about.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/support-knowledgebase-search.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/support-submitting-a-case.md" %}{% endleveloffset %}

{% endif %}

## Gathering diagnostic information for support {id="serverless-support-gather-info"}

When you open a support case, it is helpful to provide debugging information about your cluster to Red Hat Support. The `must-gather` tool enables you to collect diagnostic information about your {{ product_title }} cluster, including data related to {{ ServerlessProductName }}. For prompt support, supply diagnostic information for both {{ product_title }} and {{ ServerlessProductName }}.

{% leveloffset +2 %}{% include "./modules/about-must-gather.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-about-collecting-data.md" %}{% endleveloffset %}