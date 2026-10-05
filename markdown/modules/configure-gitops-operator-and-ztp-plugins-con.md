{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure the GitOps Operator and {{ ztp }} plugins {id="configure-gitops-operator-and-ztp-plugins-con_{{ context }}"}

Before the {{ ztp_first }} pipeline can provision managed clusters, the hub cluster must run {{ rh_rhacm_first }}, the assisted service, and the {{ gitops_title }} Operator with the {{ ztp }} plugins applied to ArgoCD.  {._abstract}

Configuring the hub cluster means installing those components, pointing them at a Git repository of site configuration and policy resources, and, in a disconnected environment, mirroring the release images and Operator catalogs that the pipeline pulls from.

Once the hub is configured, ArgoCD watches the site configuration repository and the {{ ztp }} plugins convert the resources it finds there into the installation and policy custom resources that provision and configure each managed cluster. Deployment then becomes a matter of committing site definitions to Git rather than running an installer against each site.