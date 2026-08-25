{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing the OpenShift CLI {id="cli-installing-cli_{{ context }}"}

{% if not openshift_origin %}
To interact with a {{ product_title }} cluster from the terminal, install the {{ oc_first }}. Depending on your operating system, you can install `oc` by downloading the binary from the Customer Portal or {{ product_title }} web console, by using an RPM, or by using Homebrew. {._abstract}
{% endif %}

{% if openshift_origin %}
To interact with a {{ product_title }} cluster from the terminal, install the {{ oc_first }}. Depending on your operating system, you can install `oc` by downloading the binary from the Customer Portal or {{ product_title }} web console, or by using Homebrew.
{% endif %}