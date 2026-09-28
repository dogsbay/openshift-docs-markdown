{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the management state of the image registry {id="change-management-state-of-the-image-registry-con_{{ context }}"}

Bare-metal installations do not provision registry storage automatically, so the image registry starts in the `Removed` state. Change the management state to `Managed` and configure persistent storage or {{ rh_storage_first }} before the registry can store container images.