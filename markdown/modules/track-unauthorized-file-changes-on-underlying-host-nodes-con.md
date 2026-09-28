{%- set _mod_docs_content_type = "CONCEPT" %}
# Track unauthorized file changes on underlying host nodes {id="track-unauthorized-file-changes-on-underlying-host-nodes-con_{{ context }}"}

The File Integrity Operator continually runs file integrity checks on cluster nodes by deploying privileged advanced intrusion detection environment (AIDE) containers through a daemon set. It reports modified files in a status object so that you are alerted to unexpected configuration changes or possible node-level compromise.