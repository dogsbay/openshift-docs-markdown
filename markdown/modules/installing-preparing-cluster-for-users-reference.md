{%- set _mod_docs_content_type = "REFERENCE" %}
# Preparing your cluster for users after installation {id="installing-preparing-cluster-for-users_{{ context }}"}

Configure a production cluster for users before they access it. {._abstract}

Some configuration is not required to install the cluster but recommended before your users access the cluster. You can customize the cluster itself by [customizing](/post_installation_configuration/cluster-tasks#available_cluster_customizations) the Operators that make up your cluster and integrate you cluster with other required systems, such as an identity provider.

For a production cluster, you must configure the following integrations:

*   [Persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [An identity provider](/authentication/understanding-identity-provider#understanding-identity-provider)
*   [Monitoring core {{ product_title }} components](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/getting_started/core-platform-monitoring-first-steps)