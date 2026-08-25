{%- set _mod_docs_content_type = "REFERENCE" %}
# Installation reference CRs {id="installation-crs_{{ context }}"}

The following custom resources (CRs) configure the installation for the telco hub cluster. {._abstract}

**Installation CRs**

| Component | Reference CR | Description | Optional |
| --- | --- | --- | --- |
| Agent-based install | `agent-config.yaml` | Configures the Agent-based installer, specifying network and device settings for the hosts to be installed. | No |
| Agent-based install | `install-config.yaml` | Configures the hub cluster installation for networking, control plane, compute nodes, mirror registries, and so on. | No |