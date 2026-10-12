{%- set _mod_docs_content_type = "CONCEPT" %}
# Protect the instance metadata endpoint for compute machines {id="protect-the-instance-metadata-endpoint-for-compute-machines-con_{{ context }}"}

The instance metadata service supplies credentials and configuration data to a running machine. You can require machines to use the session-oriented version of the service, which reduces the risk that a request from inside the machine reaches the metadata endpoint without authorization.