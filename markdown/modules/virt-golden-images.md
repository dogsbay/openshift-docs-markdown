{%- set _mod_docs_content_type = "CONCEPT" %}
# About golden images {id="virt-about-golden-images_{{ context }}"}

A golden image is a preconfigured snapshot of a virtual machine (VM) that you can use as a resource to deploy new VMs. For example, you can use golden images to provision the same system environment consistently and deploy systems more quickly and efficiently. {._abstract}

## How do golden images work? {id="virt-how-golden-images-work_{{ context }}"}

Golden images are created by installing and configuring an operating system and software applications on a reference machine or virtual machine. This includes setting up the system, installing required drivers, applying patches and updates, and configuring specific options and preferences.

After the golden image is created, it is saved as a template or image file that can be replicated and deployed across multiple clusters. The golden image can be updated by its maintainer periodically to incorporate necessary software updates and patches, ensuring that the image remains up to date and secure, and newly created VMs are based on this updated image.

## Red Hat implementation of golden images {id="virt-golden-images-implementation_{{ context }}"}

Red Hat publishes golden images as container disks in the registry for versions of {{ op_system_base_full }}. Container disks are virtual machine images that are stored as a container image in a container image registry. Any published image will automatically be made available in connected clusters after the installation of OpenShift Virtualization. After the images are available in a cluster, they are ready to use to create VMs.