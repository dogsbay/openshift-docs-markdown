{% if context == "updating-restricted-network-cluster" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing the OpenShift CLI by downloading the binary from the web console {id="cli-installing-cli-web-console_{{ context }}"}

You can download the {{ oc_first }} from the web {{ product_title }} console and install it to interact with {{ product_title }} clusters from a terminal on Linux, Windows, or macOS. {._abstract}


:::important

If you installed an earlier version of `oc`, you cannot use it to complete all
of the commands in
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_title }} {{ product_version }}.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }}.
{%- endif %}
Download and
install the new version of `oc`.
{%- if restricted %}
If you are upgrading a cluster in a restricted network, install the `oc` version that you plan to upgrade to.
{%- endif %}

:::


{% if context == "updating-restricted-network-cluster" %}
{%- set restricted = false -%}
{% endif %}