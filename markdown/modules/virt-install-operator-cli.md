{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation of the {{ VirtProductName }} Operator by using the CLI {id="virt-install-operator-cli_{{ context }}"}

You can install the {{ VirtProductName }} Operator by using the `oc` CLI. Installing the Operator from the CLI is a two-stage task: first you subscribe the `{{ CNVNamespace }}`{minja} namespace to the {{ VirtProductName }} catalog, and then you deploy the Operator into that namespace.