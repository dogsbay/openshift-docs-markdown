{%- set _mod_docs_content_type = "REFERENCE" %}
# Known issues {id="rosa-known-issues_{{ context }}"}

The following items are known issues with {{ product_title }} releases. {._abstract}


`ocm-role` and `user-role` can be enabled accidentally
:   The {{ cluster_manager }} roles (`ocm-role`) and user roles (`user-role`) that are key to the {{ product_title }} provisioning wizard might get enabled accidentally in your Red&#160;Hat organization by another user. However, this behavior does not affect the usability.


`htpasswd` does not function as expected
:   The `htpasswd` identity provider does not function as expected in all scenarios against the `rosa create admin` function.