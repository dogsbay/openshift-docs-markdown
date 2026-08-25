{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ op_system_base }} installation types {id="microshift-install-rhel-types_{{ context }}"}

{{ microshift_short }} supports multiple installation methods depending on your target edge environment and workload requirements. You can deploy {{ microshift_short }} by using the standard RPM packages on an existing machine or build an immutable, image-based operating system tailored for disconnected or networked edge deployments. {._abstract}

Choose the best {{ op_system_base_full }} installation type based on where you want to run your node and what your applications need to do. For the best results, apply the following principles:

*   For every installation target, you must configure both the operating system and {{ microshift_short }}.
*   Consider your application storage needs, networking for node or application access, and your authentication and security requirements.
*   Understand the differences between the {{ op_system_base }} installation types, including the support scope of each, and the tools used.

## Using RPMs, or package-based installation {id="microshift-get-ready-install-rpm_{{ context }}"}

This simple installation type uses a basic command to install {{ microshift_short }} on an existing {{ op_system_base }} machine. Basic CLI tools are required for this installation type.

## {{ op_system_base }} image-based installations {id="microshift-get-ready-install-rhel-image-based_{{ context }}"}

Image-based installation types involve creating an `rpm-ostree`-based, immutable version of {{ op_system_base }} that is optimized for edge deployment.

*   {{ op_system_ostree }} can be deployed to the edge in production environments. You can use this installation type where network connections are present, restricted, or completely offline, depending on the local environment.
*   Image mode for {{ op_system_base }} is based on OCI container images and bootable containers. See the following link for an introduction to bootc technology:
    *   [bootc: Getting started with bootable containers](https://developers.redhat.com/articles/2024/09/24/bootc-getting-started-bootable-containers)

When choosing an image-based installation, consider whether the installation target is intended to be in an offline or networked state, where you plan to build system images, and how you plan to load your {{ op_system_bundle }}. Use the following scenarios as general guidance:

*   If you build either a fully self-contained {{ op_system_ostree }} or an image mode for {{ op_system_base }} ISO outside a disconnected environment, and then install the ISO locally on your edge devices, you likely do not need an RPM repository or a mirror registry.
*   If you build an ISO outside a disconnected environment that does not include the container images, but consists of only the RPMs, you need a mirror registry inside your disconnected environment. You use your mirror registry to pull container images.
*   If you build images inside a disconnected environment, or use package-based installations, you need both a mirror registry and a local RPM mirror repository. You can use either the {{ op_system_base }} reposync utility or Red&#160;Hat Satellite for advanced use cases. See the following links for more information:
    *   [Creating a local mirror of the latest update for {{ op_system_base }} without using Satellite Server](https://access.redhat.com/solutions/7019225)
    *   [Red&#160;Hat Satellite](https://www.redhat.com/en/technologies/management/satellite)