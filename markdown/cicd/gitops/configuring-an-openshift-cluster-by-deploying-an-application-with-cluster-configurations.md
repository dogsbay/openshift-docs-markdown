{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring an OpenShift cluster by deploying an application with cluster configurations {id="configuring-an-openshift-cluster-by-deploying-an-application-with-cluster-configurations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-an-openshift-cluster-by-deploying-an-application-with-cluster-configurations" %}

With {{ gitops_title }}, you can configure Argo CD to recursively sync the content of a Git directory with an application that contains custom configurations for your cluster.

**Prerequisites**

*   You have logged in to the {{ product_title }} cluster as an administrator.
*   You have installed the {{ gitops_title }} Operator in your cluster.
*   You have logged into Argo CD instance.

{% leveloffset +1 %}{% include "./modules/gitops-using-argo-cd-instance-to-manage-cluster-scoped-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-default-permissions-of-an-argocd-instance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/go-run-argo-cd-instance-on-infrastructure-nodes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not (openshift_dedicated or openshift_rosa) %}
*   To learn more about taints and tolerations, see [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations).
{%- endif %}
*   For more information on infrastructure machine sets, see [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets).

{% leveloffset +1 %}{% include "./modules/gitops-creating-an-application-by-using-the-argo-cd-dashboard.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-creating-an-application-by-using-the-oc-tool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-synchronizing-your-application-application-with-your-git-repository.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-inbuilt-permissions-for-cluster-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-additional-permissions-for-cluster-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-installing-olm-operators-using-gitops.md" %}{% endleveloffset %}