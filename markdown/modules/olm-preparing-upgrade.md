{%- set _mod_docs_content_type = "CONCEPT" %}
# About preparing for an Operator update {id="olm-preparing-upgrade_{{ context }}"}

You can change the update channel to start tracking and receiving updates from a newer channel to access new features and bug fixes. The subscription of an installed Operator specifies an update channel that tracks and receives updates for the Operator. {._abstract}

The names of update channels in a subscription can differ between Operators, but the naming scheme typically follows a common convention within a given Operator. For example, channel names might follow a minor release update stream for the application provided by the Operator (`1.2`, `1.3`) or a release frequency (`stable`, `fast`).


:::note

You cannot change installed Operators to a channel that is older than the current channel.

:::


Red Hat Customer Portal Labs include an application that helps administrators prepare to update their Operators.

You can use these tools to search for Operators and verify the available Operator versions per update channel across different releases of {{ product_title }}. Operators managed by Cluster Version Operator (CVO) are not included.