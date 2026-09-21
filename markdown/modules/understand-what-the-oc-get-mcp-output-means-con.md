{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand what the `oc get mcp` output means {id="understand-what-the-oc-get-mcp-output-means-con_{{ context }}"}

The `oc get mcp` command reports the state of each machine config pool, including how many nodes are updated, updating, or degraded. Understanding what each field means helps you determine the nature of any issue affecting the nodes in a pool.