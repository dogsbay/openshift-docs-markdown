{%- set _mod_docs_content_type = "CONCEPT" %}
# About `toolbox` {id="about-toolbox_{{ context }}"}

{%- if not openshift_origin %}
`toolbox` is a tool that starts a container on a {{ op_system_first }} system. The tool is primarily used to start a container that includes the required binaries and plugins that are needed to run commands such as `sosreport`. {._abstract}

The primary purpose for a `toolbox` container is to gather diagnostic information and to provide it to Red Hat Support. However, if additional diagnostic tools are required, you can add RPM packages or run an image that is an alternative to the standard support tools image.
{% endif %}

{% if openshift_origin %}
`toolbox` is a tool that starts a container on a {{ op_system_first }} system. The tool is primarily used to start a container that includes the required binaries and plugins that are needed to run your favorite debugging or admin tools.
{% endif %}