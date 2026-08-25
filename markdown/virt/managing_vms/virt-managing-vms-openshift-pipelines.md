---
title: "Manage virtual machines with {{ pipelines_shortname }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Manage virtual machines with {{ pipelines_shortname }} {id="virt-managing-vms-openshift-pipelines"}
{%- set context = "virt-managing-vms-openshift-pipelines" %}

{{ pipelines_title }} is a Kubernetes-native CI/CD framework that allows developers to design and run each step of the CI/CD pipeline in its own container. {._abstract}

By using {{ pipelines_shortname }} tasks and the example pipeline, you can do the following:

*   Create and manage virtual machines (VMs), persistent volume claims (PVCs), data volumes, and data sources.
*   Run commands in VMs.
*   Manipulate disk images with `libguestfs` tools.

The tasks are located in the task catalog (ArtifactHub).

The example Windows pipeline is located in the pipeline catalog (ArtifactHub).

## Prerequisites {id="prerequisites_virt-managing-vms-openshift-pipelines"}

*   You have access to an {{ product_title }} cluster with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have installed {{ pipelines_shortname }}.

{% leveloffset +1 %}{% include "./modules/virt-supported-ssp-tasks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-windows-efi-installer-pipeline.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-running-ssp-pipeline-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-running-ssp-pipeline-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-deprecated-tasks-web.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Understanding {{ pipelines_shortname }}](https://docs.openshift.com/pipelines/latest/about/understanding-openshift-pipelines.html)
*   [Task catalog (ArtifactHub)](https://artifacthub.io/packages/search?repo=redhat-tekton-tasks&sort=relevance&page=1)
*   [Windows EFI installer pipeline (ArtifactHub)](https://artifacthub.io/packages/tekton-pipeline/redhat-pipelines/windows-efi-installer)
*   [Installing {{ pipelines_shortname }}](https://docs.openshift.com/pipelines/latest/install_config/installing-pipelines.html)
*   [Creating CI/CD solutions for applications using {{ pipelines_title }}](https://docs.openshift.com/pipelines/latest/create/creating-applications-with-cicd-pipelines.html)
*   [Creating a Windows VM](/virt/creating_vm/virt-creating-vms-uploading-images#virt-creating-windows-vm_virt-creating-vms-uploading-images)