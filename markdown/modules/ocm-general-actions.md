{%- set _mod_docs_content_type = "REFERENCE" %}
# General actions {id="ocm-general-actions_{{ context }}"}

On the top right of the cluster page, there are some actions that a user can perform on the entire cluster: {._abstract}

*   ***Open console*** launches a web console so that the cluster owner can issue commands to the cluster.
*   ***Actions*** drop-down menu allows the cluster owner to rename the display name of the cluster, edit the machine pools, and delete the cluster.
{%- if openshift_rosa %}
You may also transfer the cluster’s ownership to another user.
{%- endif %}
*   ***Refresh*** icon forces a refresh of the cluster.