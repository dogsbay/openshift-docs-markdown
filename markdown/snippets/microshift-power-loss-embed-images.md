{%- set _mod_docs_content_type = "SNIPPET" %}


:::warning

For offline or disconnected configurations, embed all container image dependencies as part of the system image. When container images are downloaded without being embedded into the system image, CRI-O wipes them off during unclean shutdowns, such as when a power loss occurs. In this case, you can only restore those container images when the system is online.

:::