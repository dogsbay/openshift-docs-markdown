{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a VM from the CLI {id="virt-create-a-vm-from-the-cli_{{ context }}"}

Create and configure virtual machines (VMs) from the command line by using `virtctl` to generate `VirtualMachine` manifests that you review, customize, and apply with {{ oc_first }}. The CLI gives you full control over VM specifications and fits into scripting and automation pipelines. {._abstract}

You can use the CLI to:

*   Generate and apply manifests by using `virtctl create vm` to produce a `VirtualMachine` manifest, then apply it with `oc create`.
*   Upload disk images from your local machine to a data volume by using the `virtctl image-upload` command.
*   Create VMs from web images by referencing a disk image hosted on an HTTP or HTTPS URL.
*   Create VMs from container disks by referencing a container image that packages a VM disk.