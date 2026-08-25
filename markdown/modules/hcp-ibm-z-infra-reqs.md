{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ ibm_z_title }} infrastructure requirements {id="hcp-ibm-z-infra-reqs_{{ context }}"}

The Agent platform does not create any infrastructure, but requires several resources for infrastructure. {._abstract}

*   Agents: An _Agent_ represents a host that is booted with a discovery image, or PXE image and is ready to be provisioned as an {{ product_title }} node.
*   DNS: The API and Ingress endpoints must be routable.

The {{ hcp }} feature is enabled by default. If you disabled the feature and want to manually enable it, or if you need to disable the feature, see "Enabling or disabling the {{ hcp }} feature".