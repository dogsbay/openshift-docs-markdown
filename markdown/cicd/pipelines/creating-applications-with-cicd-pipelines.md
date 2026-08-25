{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating CI/CD solutions for applications using {{ pipelines_shortname }} {id="creating-applications-with-cicd-pipelines"}
{%- set context = "creating-applications-with-cicd-pipelines" %}

With {{ pipelines_title }}, you can create a customized CI/CD solution to build, test, and deploy your application.

To create a full-fledged, self-serving CI/CD pipeline for an application, perform the following tasks:

*   Create custom tasks, or install existing reusable tasks.
*   Create and define the delivery pipeline for your application.
*   Provide a storage volume or filesystem that is attached to a workspace for the pipeline execution, using one of the following approaches:
    *   Specify a volume claim template that creates a persistent volume claim
    *   Specify a persistent volume claim
*   Create a `PipelineRun` object to instantiate and invoke the pipeline.
*   Add triggers to capture events in the source repository.

This section uses the `pipelines-tutorial` example to demonstrate the preceding tasks. The example uses a simple application which consists of:

*   A front-end interface, `pipelines-vote-ui`, with the source code in the [`pipelines-vote-ui`](https://github.com/openshift/pipelines-vote-ui/tree/{{ pipelines_ver }}) Git repository.
*   A back-end interface, `pipelines-vote-api`, with the source code in the [`pipelines-vote-api`](https://github.com/openshift/pipelines-vote-api/tree/{{ pipelines_ver }})  Git repository.
*   The `apply-manifests` and `update-deployment` tasks in the [`pipelines-tutorial`](https://github.com/openshift/pipelines-tutorial/tree/{{ pipelines_ver }}) Git repository.

## Prerequisites {id="_prerequisites"}

*   You have access to an {{ product_title }} cluster.
*   You have installed [{{ pipelines_shortname }}](/cicd/pipelines/installing-pipelines#installing-pipelines) using the {{ pipelines_title }} Operator listed in the software catalog. After it is installed, it is applicable to the entire cluster.
*   You have installed [{{ pipelines_shortname }} CLI](/cli_reference/tkn_cli/installing-tkn#installing-tkn).
*   You have forked the front-end [`pipelines-vote-ui`](https://github.com/openshift/pipelines-vote-ui/tree/{{ pipelines_ver }}) and back-end [`pipelines-vote-api`](https://github.com/openshift/pipelines-vote-api/tree/{{ pipelines_ver }}) Git repositories using your GitHub ID, and have administrator access to these repositories.
*   Optional: You have cloned the [`pipelines-tutorial`](https://github.com/openshift/pipelines-tutorial/tree/{{ pipelines_ver }}) Git repository.

{% leveloffset +1 %}{% include "./modules/op-creating-project-and-checking-pipeline-service-account.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-creating-pipeline-tasks.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Managing non-versioned and versioned cluster tasks](/cicd/pipelines/managing-nonversioned-and-versioned-cluster-tasks#managing-nonversioned-and-versioned-cluster-tasks)

{% leveloffset +1 %}{% include "./modules/op-assembling-a-pipeline.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-mirroring-images-to-run-pipelines-in-restricted-environment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Samples Operator for a restricted cluster](/openshift_images/configuring-samples-operator#samples-operator-restricted-network-install)
*   [Creating a cluster with a mirrored registry](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images)

{% leveloffset +1 %}{% include "./modules/op-running-a-pipeline.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-adding-triggers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-configuring-eventlisteners-to-serve-multiple-namespaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-creating-webhooks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-triggering-a-pipelinerun.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-enabling-monitoring-of-event-listeners-for-triggers-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/op-configuring-pull-request-capabilities-in-GitHub-interceptor.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-filtering-pull-requests-using-GitHub-interceptor.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-validating-pull-requests-using-GitHub-interceptors.md" %}{% endleveloffset %}

## Additional resources {id="pipeline-addtl-resources" ._additional-resources}

*   To include {{ pac }} along with the application source code in the same repository, see [Using {{ pac }}](/cicd/pipelines/using-pipelines-as-code#using-pipelines-as-code).
*   For more details on pipelines in the **Developer** perspective, see the [working with pipelines in the web console](/cicd/pipelines/working-with-pipelines-web-console#working-with-pipelines-web-console) section.
*   To learn more about Security Context Constraints (SCCs), see the [Managing Security Context Constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies) section.
*   For more examples of reusable tasks, see the [OpenShift Catalog](https://github.com/openshift/pipelines-catalog) repository. Additionally, you can also see the Tekton Catalog in the Tekton project.
*   To install and deploy a custom instance of Tekton Hub for reusable tasks and pipelines, see [Using {{ tekton_hub }} with {{ pipelines_title }}](/cicd/pipelines/using-tekton-hub-with-openshift-pipelines#using-tekton-hub-with-openshift-pipelines).
*   For more details on re-encrypt TLS termination, see [Re-encryption Termination](https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html#re-encryption-termination).
*   For more details on secured routes, see the [Securing routes](/networking/ingress_load_balancing/routes/securing-routes#securing-routes) section.