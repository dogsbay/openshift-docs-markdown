{%- set _mod_docs_content_type = "CONCEPT" %}
# Bare metal infrastructure requirements {id="hcp-bm-infra-reqs_{{ context }}"}

Although the Agent platform does not create any infrastructure, the Agent platform does have requirements for infrastructure. {._abstract}

*   Agents: An _Agent_ represents a host that is booted with a discovery image and is ready to be provisioned as an {{ product_title }} node.
*   DNS: The API and ingress endpoints must be routable.