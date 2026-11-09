{%- set _mod_docs_content_type = "CONCEPT" %}
# About editing AWS tags after cluster creation {id="rosa-hcp-about-editing-aws-tags_{{ context }}"}

With {{ rosa_cli }} 1.2.68 and later, you can add, update, and remove custom AWS tags on existing {{ product_title }} clusters that run version 4.20.0 and later. You can edit tags at the cluster level and at the machine pool level. {._abstract}

Tags are key-value pairs that {{ product_title }} applies to the AWS resources that it creates. You can use tags to manage, identify, organize, search for, and filter your AWS resources. Editing tags affects only the custom tags that you define. Tags that Red&#160;Hat adds do not change.

The following behavior applies when you edit AWS tags:

*   The `--tags` option specifies the complete set of custom tags that you want. {{ product_title }} removes any existing custom tag that you omit, and updates any existing tag key that you specify with a different value.
*   {{ product_title }} applies the tags that you define on the cluster to the AWS resources that it creates for each machine pool, unless the machine pool defines a tag with the same key. In that case, the machine pool tag value takes precedence.
*   Removing all cluster tags does not remove tags that you define on a machine pool. Removing all machine pool tags does not remove tags that the machine pool inherits from the cluster.
*   Tag changes apply to existing compute nodes without replacing them.


:::important

Tag keys cannot be `aws`, `red-hat-managed`, `red-hat-clustertype`, or `Name`, which are existing reserved tags. Tag keys cannot begin with `kubernetes.io/cluster/` or `api.openshift.com/`. Red&#160;Hat reserves the right to add additional reserved tags in the future.

Tag keys cannot be longer than 128 characters, and tag values cannot be longer than 256 characters. Tag keys and values can contain only ASCII letters (A–Z, a–z), digits (0–9), spaces, and the following symbols: _ . : / = + - @. Tag values cannot be empty.

:::


You cannot edit AWS tags on {{ product_title }} clusters that run a version earlier than 4.20.0.