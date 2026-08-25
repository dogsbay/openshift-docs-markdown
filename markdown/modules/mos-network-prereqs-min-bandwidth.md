{%- set _mod_docs_content_type = "CONCEPT" %}

# Networking prerequisites {id="network-prereqs_{{ context }}"}

During cluster deployment, {{ product_title }} requires a minimum bandwidth of 120&#160;Mbps between cluster infrastructure and the public internet or private network locations that give deployment resources. When network connectivity is slower than 120&#160;Mbps, the cluster installation process times out, and deployment fails. After cluster deployment, your workloads determine network requirements. A minimum bandwidth of 120&#160;Mbps helps to ensure timely cluster and Operator upgrades.