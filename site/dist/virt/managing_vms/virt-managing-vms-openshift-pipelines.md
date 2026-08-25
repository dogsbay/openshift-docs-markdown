---
title: Manage virtual machines with {{ pipelines_shortname }}
---

# Manage virtual machines with {{ pipelines_shortname }} {#virt-managing-vms-openshift-pipelines}

{{ pipelines_title }} is a Kubernetes-native CI/CD framework that allows developers to design and run each step of the CI/CD pipeline in its own container.

By using {{ pipelines_shortname }} tasks and the example pipeline, you can do the following:

- Create and manage virtual machines (VMs), persistent volume claims (PVCs), data volumes, and data sources.
- Run commands in VMs.
- Manipulate disk images with `libguestfs` tools.

The tasks are located in the task catalog (ArtifactHub).

The example Windows pipeline is located in the pipeline catalog (ArtifactHub).

## Prerequisites {#prerequisites_virt-managing-vms-openshift-pipelines}

- You have access to an OpenShift Container Platform cluster with `cluster-admin` permissions.
- You have installed the {{ oc_first }}.
- You have installed {{ pipelines_shortname }}.

## Additional resources {#additional-resources_virt-managing-vms-openshift-pipelines}

- [Understanding {{ pipelines_shortname }}](https://docs.openshift.com/pipelines/latest/about/understanding-openshift-pipelines.html)
- [Task catalog (ArtifactHub)](https://artifacthub.io/packages/search?repo=redhat-tekton-tasks&sort=relevance&page=1)
- [Windows EFI installer pipeline (ArtifactHub)](https://artifacthub.io/packages/tekton-pipeline/redhat-pipelines/windows-efi-installer)
- [Installing {{ pipelines_shortname }}](https://docs.openshift.com/pipelines/latest/install_config/installing-pipelines.html)
- [Creating CI/CD solutions for applications using {{ pipelines_title }}](https://docs.openshift.com/pipelines/latest/create/creating-applications-with-cicd-pipelines.html)
- [Creating a Windows VM](/openshift-docs-markdown/virt/creating_vm/virt-creating-vms-uploading-images#virt-creating-windows-vm_virt-creating-vms-uploading-images)
