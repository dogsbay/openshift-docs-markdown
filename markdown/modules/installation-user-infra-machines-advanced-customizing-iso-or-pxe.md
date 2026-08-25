{%- set _mod_docs_content_type = "CONCEPT" %}
# Customizing a live {{ op_system }} ISO or PXE install {id="installation-user-infra-machines-advanced-customizing-iso-or-pxe_{{ context }}"}

You can use the live ISO image or PXE environment to install {{ op_system }} by injecting an Ignition config file directly into the image. This creates a customized image that you can use to provision your system. {._abstract}

For an ISO image, the mechanism to do this is the `coreos-installer iso customize` subcommand, which modifies the `.iso` file with your configuration. Similarly, the mechanism for a PXE environment is the `coreos-installer pxe customize` subcommand, which creates a new `initramfs` file that includes your customizations.

The `customize` subcommand is a general-purpose tool that can embed other types of customizations as well. The following tasks are examples of some of the more common customizations:

*   Inject custom CA certificates for when corporate security policy requires their use.
*   Configure network settings without the need for kernel arguments.
*   Embed arbitrary pre-install and post-install scripts or binaries.