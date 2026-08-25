{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a disconnected registry {id="ipi-install-creating-a-disconnected-registry_{{ context }}"}

In some cases, you might want to install an {{ product_title }} cluster using a local copy of the installation registry. This could be for enhancing network efficiency because the cluster nodes are on a network that does not have access to the internet. {._abstract}

A local, or mirrored, copy of the registry requires the following:

*   A certificate for the registry node. This can be a self-signed certificate.
*   A web server that a container on a system will serve.
*   An updated pull secret that contains the certificate and local repository information.


:::note

*   Creating a disconnected registry on a registry node is optional. If you need to create a disconnected registry on a registry node, you must complete all of the following sub-sections.
*   If you have already prepared a mirror registry for a disconnected installation by mirroring images, you can skip directly to "Modify the install-config.yaml file to use the disconnected registry" section. For more information about preparing a mirror registry for a disconnected installation by mirroring images see, "Mirroring images for a disconnected installation".

:::