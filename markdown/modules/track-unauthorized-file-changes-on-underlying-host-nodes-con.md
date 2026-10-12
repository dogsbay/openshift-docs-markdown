{%- set _mod_docs_content_type = "CONCEPT" %}
# Track unauthorized file changes on underlying host nodes {id="track-unauthorized-file-changes-on-underlying-host-nodes-con_{{ context }}"}

The File Integrity Operator runs continual file integrity checks on cluster nodes by deploying privileged advanced intrusion detection environment (AIDE) containers through a daemon set. It reports modified files to alert you to unexpected changes or possible compromise.