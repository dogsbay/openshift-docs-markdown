{%- set _mod_docs_content_type = "CONCEPT" %}
# Use Red Hat-provided Operator catalogs and mirror registries {id="microshift-olm-rh-ops-mirror_{{ context }}"}

You can filter catalogs and delete images to get specific Operators and mirror them by using the oc-mirror {{ oc_first }} plugin. You can also use Operators in disconnected settings or embedded in a {{ op_system_base_full }} image. {._abstract}

*   To understand more about how to configure your systems for mirroring, follow the links in the following "Additional resources" section.
*   If you are ready to deploy Operators from Red Hat-provided Operator catalogs, mirror them, or to embed them in a {{ op_system_base }} image, start with the following section, "Inspecting catalog contents by using the oc-mirror plugin."