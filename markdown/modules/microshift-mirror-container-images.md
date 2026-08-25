{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirror container images into an existing registry {id="microshift-mirror-container-images_{{ context }}"}

Using a custom air-gapped container registry, or mirror, is necessary with certain user environments and workload requirements. Mirroring allows for the transfer of container images and updates to air-gapped environments where they can be installed on a {{ microshift_short }} instance. {._abstract}

To create an air-gapped mirror registry for {{ microshift_short }} containers, you must complete the following steps:

*   Get the container image list to be mirrored.
*   Configure the mirroring prerequisites, including secure signatures management.
*   Download images on a host with internet access.
*   Copy the downloaded image directory to an air-gapped site.
*   Upload images to a mirror registry in an air-gapped site.
*   Configure your {{ microshift_short }} hosts to use the mirror registry.