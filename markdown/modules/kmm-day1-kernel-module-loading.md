{%- set _mod_docs_content_type = "CONCEPT" %}
# Day 1 kernel module loading {id="kmm-day1-kernel-module-loading_{{ context }}"}

Day 1 kernel module loading lets you insert kernel modules during Linux `systemd` initialization on {{ product_title }}, before the standard KMM Day 2 loading and a complete initialization of a Linux (RHCOS) server. You can use the Machine Config Operator (MCO) when a module must load earlier than full node initialization.