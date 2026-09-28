{%- set _mod_docs_content_type = "CONCEPT" %}
# Restrict the API server to private for {{ aws_short }} {id="restrict-the-api-server-to-private-for-aws-con_{{ context }}"}

You can make the API server private on {{ aws_short }} by deleting the external load balancers from the control plane machines and removing the public DNS entries. The API is then reachable only from inside the cluster network.