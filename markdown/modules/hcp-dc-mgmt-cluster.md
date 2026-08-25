{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up a management cluster for {{ hcp }} in a disconnected environment {id="hcp-dc-mgmt-cluster_{{ context }}"}

An important part of a {{ hcp }} deployment is the {{ product_title }} management cluster. To set up an management cluster for a disconnected environment, you must install {{ mce }} on it. The {{ mce_short }} plays a crucial role in deploying clusters across providers. {._abstract}

**Prerequisites**

*   There must be bidirectional connectivity between the management cluster and the Baseboard Management Controller (BMC) of the target Bare Metal Host (BMH). As an alternative, you follow a Boot It Yourself approach through the Agent provider.
*   The hosted cluster must be able to resolve and reach the API hostname of the management cluster hostname and `&#42;.apps` hostname. Here is an example of the API hostname of the management cluster and `&#42;.apps` hostname:
    *   `api.management-cluster.internal.domain.com`
    *   `console-openshift-console.apps.management-cluster.internal.domain.com`
*   The management cluster must be able to resolve and reach the API and `&#42;.apps` hostname of the hosted cluster. Here is an example of the API hostname of the hosted cluster and `&#42;.apps` hostname:
    *   `api.sno-hosted-cluster-1.internal.domain.com`
    *   `console-openshift-console.apps.sno-hosted-cluster-1.internal.domain.com`

**Procedure**

1.  Install {{ mce_short }} 2.7 or later on an {{ product_title }} cluster. You can install {{ mce_short }} as an Operator from the {{ product_title }} software catalog. The HyperShift Operator is included with {{ mce_short }}. For more information about installing {{ mce_short }}, see "Installing and upgrading multicluster engine operator" in the Red&#160;Hat Advanced Cluster Management documentation.
1.  Ensure that the HyperShift Operator is installed. The HyperShift Operator is automatically included with {{ mce_short }}, but if you need to manually install it, follow the steps in "Manually enabling the hypershift-addon managed cluster add-on for local-cluster".

**Next steps**

Next, configure the web server.