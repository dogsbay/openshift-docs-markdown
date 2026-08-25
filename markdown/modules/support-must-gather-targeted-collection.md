{%- set _mod_docs_content_type = "CONCEPT" %}
# Reducing the size of must-gather output {id="support-must-gather-targeted-collection_{{ context }}"}

The `oc adm must-gather` command collects comprehensive cluster information. However, a full data collection can result in a large file that is difficult to upload and analyze and could result in timeouts.  {._abstract}

To manage the output size and target your data collection for more effective troubleshooting, you can pass specific flags to the underlying `gather` script or scope the collection to particular resources.