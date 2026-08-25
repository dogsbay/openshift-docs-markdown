{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the new {{ ztp }} applications {id="ztp-installing-the-new-gitops-ztp-applications_{{ context }}"}

Using the extracted `argocd/deployment` directory, and after ensuring that the applications point to your site Git repository, apply the full contents of the deployment directory. Applying the full contents of the directory ensures that all necessary resources for the applications are correctly configured. {._abstract}

**Procedure**

{% include "./snippets/ztp-patch-argocd-hub-cluster.md" %}