{%- set _mod_docs_content_type = "CONCEPT" %}
# Virtual machine automation with pipelines {id="virt-about-managing-vms-with-pipelines_{{ context }}"}

Red&#160;Hat OpenShift Pipelines is a Kubernetes-native CI/CD framework in which each step of a pipeline runs in its own container. Use it to run virtual machine (VM) provisioning and disk preparation as repeatable tasks, instead of performing them by hand for each VM. {._abstract}

By using OpenShift Pipelines tasks and the example pipeline, you can do the following:

*   Create and manage VMs, persistent volume claims (PVCs), data volumes, and data sources.
*   Run commands in VMs.
*   Manipulate disk images with `libguestfs` tools.

You can find the tasks in the task catalog (ArtifactHub) and the example Windows pipeline in the pipeline catalog (ArtifactHub).

Managing VMs with OpenShift Pipelines has the following prerequisites:

*   You have access to an {{ product_title }} cluster with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have installed OpenShift Pipelines.

## Additional resources {id="additional-resources-pipelines_{{ context }}" ._additional-resources}

*   [Task catalog (ArtifactHub)](https://artifacthub.io/packages/search?repo=redhat-tekton-tasks&sort=relevance&page=1)
*   [Windows EFI installer pipeline (ArtifactHub)](https://artifacthub.io/packages/tekton-pipeline/redhat-pipelines/windows-efi-installer)
*   [Installing OpenShift Pipelines](/cicd/pipelines/installing-pipelines#installing-pipelines)