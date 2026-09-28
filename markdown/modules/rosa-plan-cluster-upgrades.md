{%- set _mod_docs_content_type = "CONCEPT" %}
# Plan cluster upgrades {id="rosa-plan-cluster-upgrades_{{ context }}"}

Plan your {{ product_title }} cluster upgrades by reviewing the update life cycle policy, available upgrade channels, and how to switch channels to view upgrade options. {._abstract}

The "{{ product_title }} update life cycle" page, linked in the _Additional resources_, includes release definitions, support and update requirements, installation policy information and life cycle dates.

You can use update channels to decide which {{ product_title }} minor version to update your clusters to. {{ product_title }} supports updates through the `stable-4.y`, `eus-4.y`, and `fast-4.y` channels.

**Additional resources**
{._additional-resources}

{%- if openshift_rosa_hcp %}
*   [{{ product_title }} update life cycle](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/introduction_to_rosa/policies-and-service-definition#rosa-hcp-life-cycle)
*   [Node lifecycle](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-sdpolicy-node-lifecycle_rosa-hcp-service-definition)
*   [ROSA CLI reference: `rosa edit machinepool`](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-edit-machinepool)
{%- endif %}
{%- if openshift_rosa %}
*   [{{ product_title }} update life cycle](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/introduction_to_rosa/index#rosa-life-cycle)
*   [Understanding update channels and releases](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/updating_clusters/understanding-openshift-updates-1#understanding-update-channels-releases)
{%- endif %}