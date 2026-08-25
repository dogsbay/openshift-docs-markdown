{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Setting up an Argo CD instance {id="setting-up-argocd-instance"}
{%- set context = "setting-up-argocd-instance" %}

By default, the {{ gitops_title }} installs an instance of Argo CD in the `openshift-gitops` namespace with additional permissions for managing certain cluster-scoped resources. To manage cluster configurations or deploy applications, you can install and deploy a new Argo CD instance. By default, any new instance has permissions to manage resources only in the namespace where it is deployed.

{% leveloffset +1 %}{% include "./modules/gitops-argo-cd-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-enable-replicas-for-argo-cd-server.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-deploy-resources-different-namespaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-customize-argo-cd-consolelink.md" %}{% endleveloffset %}