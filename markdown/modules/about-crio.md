{%- set _mod_docs_content_type = "CONCEPT" %}
# About CRI-O container runtime engine {id="about-crio_{{ context }}"}

{% include "./snippets/about-crio-snippet.md" %}

When container runtime issues occur, verify the status of the `crio` systemd service on each node. Gather CRI-O journald unit logs from nodes that have container runtime issues.