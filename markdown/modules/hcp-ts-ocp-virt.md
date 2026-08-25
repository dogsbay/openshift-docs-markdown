{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshooting hosted clusters on {{ VirtProductName }} {id="hcp-ts-ocp-virt_{{ context }}"}

When you troubleshoot a hosted cluster on {{ VirtProductName }}, start with the top-level `HostedCluster` and `NodePool` resources and then work down the stack until you find the root cause. The following steps can help you discover the root cause of common issues.