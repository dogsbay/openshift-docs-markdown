{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirror registries for installing clusters in disconnected environments {id="installing-mirroring-disconnected-con_{{ context }}"}

You must mirror required container images into a disconnected environment before you can install and provision a cluster there. To mirror those container images, you must have a mirror registry. {._abstract}

Consider the following options for creating and using a mirror registry:

*   If you already have a container image registry, such as {{ quay }}, you can use it as your mirror registry. If you do not already have a registry, you must create one.
*   After you establish your registry, you need mirroring tools. To mirror your {{ product_title }} image repository to the mirror registry in your disconnected environment, you can use the oc-mirror {{ oc_first }} plugin. The oc-mirror plugin is a single tool that mirrors all required {{ product_title }} content and other images to your mirror registry. The oc-mirror plugin is the preferred method for mirroring.
*   Alternately, you can use the `oc adm` command to mirror just release and catalog images for {{ product_title }}.