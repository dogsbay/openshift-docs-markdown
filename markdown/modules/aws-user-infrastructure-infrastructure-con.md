{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure image registry storage on {{ aws_short }} user-provisioned infrastructure {id="aws-user-infrastructure-infrastructure-con_{{ context }}"}

Save your container images to a durable storage location by configuring the built-in image registry to use dedicated {{ aws_short }} storage. This setup provides persistent, scalable storage for your registry that is separate from ephemeral cluster storage.