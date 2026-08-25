{%- set _mod_docs_content_type = "CONCEPT" %}
# Limitations of using the {{ gitops }} agent with {{ microshift_short }} {id="microshift-gitops-limitations_{{ context }}"}

Using {{ gitops_title }} with Argo CD for {{ microshift_short }} is different from using the entire {{ gitops }} Operator in the following ways: {._abstract}

*   The `gitops-operator` component is not used with {{ microshift_short }}.
*   To maintain the small resource use of {{ microshift_short }} use the Argo CD CLI. The Argo CD web console is not available.
*   Because {{ microshift_short }} is single-node, there is no multi-node support. Each instance of {{ microshift_short }} is paired with a local {{ gitops }} agent.
*   The `oc adm must-gather` command is not available in {{ microshift_short }}.