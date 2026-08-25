{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure requirements for non-bare-metal agent machines {id="hcp-non-bm-infra-reqs_{{ context }}"}

The Agent platform does not create any infrastructure, but it has several requirements. {._abstract}

*   Agents: An _Agent_ represents a host that is booted with a discovery image and is ready to be provisioned as an {{ product_title }} node.
*   DNS: The API and ingress endpoints must be routable.