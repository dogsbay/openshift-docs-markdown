{%- set _mod_docs_content_type = "ASSEMBLY" %}
# The CI/CD methodology and practice {id="cicd_gitops"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cicd_gitops" %}

Using a _continuous integration/continuous delivery_ (CI/CD) methodology enables you to regularly deliver applications to customers by introducing automation into the stages of application development, from integration and testing phases to delivery and deployment. The CI/CD process is often referred to as a "CI/CD pipeline." The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment.

## CI/CD for cluster administration and application configuration management {id="cicd_admin"}

_Continuous integration_ is an automation process for developers. Code changes to an application are regularly built, tested, and merged to a shared repository.

_Continuous delivery_ and _continuous deployment_ are closely related concepts that are sometimes used interchangeably and refer to automation of the pipeline.
Continuous delivery uses automation to ensure that a developer’s changes to an application are tested and sent to a repository, where an operations team can deploy them to a production environment. Continuous deployment enables the release of changes, starting from the repository and ending in production. Continuous deployment speeds up application delivery and prevents the operations team from getting overloaded.

## The GitOps methodology and practice {id="cicd_gitops_methodology"}

_GitOps_ is a set of practices that use Git pull requests to manage infrastructure and application configurations. The Git repository in GitOps is the only source of truth for system and application configuration. The repository contains the entire state of the system so that the trail of changes to the system state are visible and auditable. GitOps enables you to implement a DevOps methodology.

You can use GitOps tooling to create repeatable and predictable processes for managing and recreating {{ product_title }} clusters and applications. By using GitOps, you can address the issues of infrastructure and application configuration sprawl. It simplifies the propagation of infrastructure and application configuration changes across multiple clusters by defining your infrastructure and applications definitions as “code.” Implementing GitOps for your cluster configuration files can make automated installation easier and allow you to configure automated cluster customizations. You can apply the core principles of developing and maintaining software in a Git repository to the creation and management of your cluster and application configuration files.

By using {{ product_title }} to automate both your cluster configuration and container development process, you can pick and choose where and when to adopt GitOps practices. Using a CI pipeline that pairs with your GitOps strategy and execution plan is ideal. {{ product_title }} provides the flexibility to choose when and how you integrate this methodology into your business practices and pipelines.

With GitOps integration, you can declaratively configure and store your {{ product_title }} cluster configuration

GitOps works well with {{ product_title }} because you can both declaratively configure clusters and store the state of the cluster configuration in Git. For more information, see [Available cluster customizations](/post_installation_configuration/cluster-tasks#available_cluster_customizations).

### GitOps for single-cluster and multi-cluster administration {id="cicd_gitops_cluster_administration"}

Whether you need one or more independent or cooperative {{ product_title }} clusters, you can use a GitOps strategy to manage the following tasks:

*   Ensure that the clusters have similar states for configuration, monitoring, or storage.
*   Recover or recreate clusters from a known state.
*   Create clusters with a known state.
*   Apply or revert configuration changes to multiple {{ product_title }} clusters.
*   Associate templated configuration with different environments.

### GitOps for application configuration management {id="cicd_gitops_application_configuration"}

You can also use GitOps practices to manage application configuration. This practice ensures consistency in applications when you deploy them to different clusters in different environments, like development, stage, and production. Managing application configuration with GitOps is also beneficial when you must deploy applications across multiple clusters, whether on-cloud or on-premise, for availability and scalability purposes.

You can use a GitOps strategy to:

*   Promote applications across clusters, from stage to production.
*   Apply or revert application changes to multiple {{ product_title }} clusters.

### GitOps technology providers and integrators {id="cicd_gitops_integrators"}

There are several community offerings and third-party vendors that provide a high level of integration with {{ product_title }}.

You can integrate GitOps into {{ product_title }} with the following community partners and third-party integrators:

*   [ArgoCD](/architecture/argocd#argocd)