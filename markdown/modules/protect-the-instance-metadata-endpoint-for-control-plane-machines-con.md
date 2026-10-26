{%- set _mod_docs_content_type = "CONCEPT" %}
# Protect the instance metadata endpoint for control plane machines on AWS {id="protect-the-instance-metadata-endpoint-for-control-plane-machines-con_{{ context }}"}

The instance metadata service supplies credentials and configuration data to a running machine. Requiring the session-oriented version on control plane machines reduces the risk that a request from inside the machine reaches the metadata endpoint without authorization.