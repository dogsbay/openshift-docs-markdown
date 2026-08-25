{%- set _mod_docs_content_type = "CONCEPT" %}
# Host configuration {id="agent-host-config_{{ context }}"}

You can make additional configurations for each host on the cluster in the `agent-config.yaml` file, such as network configurations and root device hints. {._abstract}


:::important

For each host you configure, you must specify which host you are configuring by providing the MAC address of an interface on the host.

:::