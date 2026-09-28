{%- set _mod_docs_content_type = "CONCEPT" %}
# Authenticate to Red Hat and third-party registries {id="authenticate-to-red-hat-and-third-party-registries-con_{{ context }}"}

`registry.redhat.io` requires authentication, so the cluster needs valid credentials before it can pull Red Hat container images. The same applies to third-party registries such as {{ quay }}, which you configure with their own credentials so that image streams and node pulls keep working.