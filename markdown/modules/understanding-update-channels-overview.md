{%- set _mod_docs_content_type = "REFERENCE" %}
# Overview of update channels {id="understanding-update-channels-overview_{{ context }}"}

Update channels correspond to a minor version of {{ product_title }}. The version number in the channel represents the target minor version that the cluster will eventually be updated to, even if it is higher than the cluster’s current minor version. {._abstract}

For instance, {{ product_title }} 4.10 update channels provide the following recommendations:

*   Updates within 4.10.
*   Updates within 4.9.
*   Updates from 4.9 to 4.10, allowing all 4.9 clusters to eventually update to 4.10, even if they do not immediately meet the minimum z-stream version requirements.
*   `eus-4.10` only: updates within 4.8.
*   `eus-4.10` only: updates from 4.8 to 4.9 to 4.10, allowing all 4.8 clusters to eventually update to 4.10.

4.10 update channels do not recommend updates to 4.11 or later releases. This strategy ensures that administrators must explicitly decide to update to the next minor version of {{ product_title }}.

Update channels control only release selection and do not impact the version of the cluster that you install. The `openshift-install` binary file for a specific version of {{ product_title }} always installs that version.

{% if not openshift_origin %}
{{ product_title }} {{ product_version }} offers the following update channels:

*   `stable-{{ product_version }}`
*   `eus-4.y` (only offered for EUS versions and meant to facilitate updates between EUS versions)
*   `fast-{{ product_version }}`
*   `candidate-{{ product_version }}`

If you do not want the Cluster Version Operator to fetch available updates from the update recommendation service, you can use the `oc adm upgrade channel` command in the OpenShift CLI to configure an empty channel. This configuration can be helpful if, for example, a cluster has restricted network access and there is no local, reachable update recommendation service.


:::warning

Red&#160;Hat recommends updating only to versions suggested by OpenShift Update Service. For a minor version update, versions must be contiguous. Red&#160;Hat does not test updates to noncontiguous versions and cannot guarantee compatibility with earlier versions.

:::


{% endif %}
{% if openshift_origin %}
{{ product_title }} {{ product_version }} offers the following update channel:

*   `stable-4`

{% endif %}