{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Deploying a Spring Boot application with Argo CD {id="deploying-a-spring-boot-application-with-argo-cd"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "deploying-a-spring-boot-application-with-argo-cd" %}

With Argo CD, you can deploy your applications to the OpenShift cluster either by using the Argo CD dashboard or by using the `oc` tool.

**Prerequisites**

*   Red Hat OpenShift GitOps is installed in your cluster.
*   Logged into Argo CD instance.

{% leveloffset +1 %}{% include "./modules/gitops-creating-an-application-by-using-the-argo-cd-dashboard.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-creating-an-application-by-using-the-oc-tool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-verifying-argo-cd-self-healing-behavior.md" %}{% endleveloffset %}