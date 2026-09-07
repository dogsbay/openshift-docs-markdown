{%- set _mod_docs_content_type = "CONCEPT" %}
# Guidelines for editing network policies {id="microshift-nw-networkpolicy-edit-guidelines_{{ context }}"}

You can edit an existing network policy for a namespace.

Typical edits might include changes to the pods to which the policy applies, allowed ingress traffic, and the destination ports on which to accept traffic. The `apiVersion`, `kind`, and `name` fields must not be changed when editing `NetworkPolicy` objects, as these define the resource itself.