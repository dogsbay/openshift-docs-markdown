{%- set _mod_docs_content_type = "CONCEPT" %}
# About the OpenShift CLI {id="microshift-cli-oc-about_{{ context }}"}

With the OpenShift command-line interface (CLI), the `oc` command, you can deploy and manage {{ microshift_short }} projects from a terminal. The CLI `oc` tool is ideal in the following situations: {._abstract}

*   Working directly with project source code
*   Scripting {{ product_title }} operations
*   Managing projects while restricted by bandwidth resources


:::note

A `kubeconfig` file must exist for the node to be accessible. The values are applied from built-in default values or a `config.yaml`, if you created one.

:::