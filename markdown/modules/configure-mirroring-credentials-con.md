{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure mirroring credentials {id="configure-mirroring-credentials-con_{{ context }}"}

Before you mirror images, prepare the mirror host and give the oc-mirror plugin credentials for both the source registries and your mirror registry. The plugin reads these credentials from the container registry authentication file on the host that runs the mirroring.