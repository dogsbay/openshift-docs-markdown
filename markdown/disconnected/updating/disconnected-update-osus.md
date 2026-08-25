---
title: Updating a cluster in a disconnected environment using the OpenShift Update Service
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Updating a cluster in a disconnected environment using the OpenShift Update Service {id="updating-disconnected-cluster-osus"}
{%- set context = "updating-disconnected-cluster-osus" %}

You can install and configure the OpenShift Update Service (OSUS) in a disconnected environment to get an update experience similar to the connected clusters. {._abstract}

The following steps outline the high-level workflow about updating a cluster in a disconnected environment by using OSUS:

1.  Configure access to a secured registry.
1.  Update the global cluster pull secret to access your mirror registry.
1.  Install the OSUS Operator.
1.  Create a graph data container image for the OpenShift Update Service.
1.  Install the OSUS application and configure your clusters to use the OpenShift Update Service in your environment.
1.  Perform a supported update procedure from the documentation as you would with a connected cluster.

{% leveloffset +1 %}{% include "./modules/disconnected-osus-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the OpenShift Update Service](/updating/understanding_updates/intro-to-updates#update-service-about_understanding-openshift-updates)
*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/config-access-for-sec-reg-osus.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring additional trust stores for image registry access](/registry/configuring-registry-operator#images-configuration-cas_configuring-registry-operator)

{% leveloffset +1 %}{% include "./modules/images-update-global-pull-secret.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Transferring cluster ownership](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#transferring-cluster-ownership_downloading-and-updating-pull-secrets)

{% leveloffset +1 %}{% include "./modules/installing-osus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-install-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-install-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Installing Operators in your namespace](/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)

{% leveloffset +1 %}{% include "./modules/update-service-graph-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-osus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-create-service-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-create-service-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-service-configure-cvo.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)

{% leveloffset +1 %}{% include "./modules/verifying-local-osus-installation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Mirroring {{ product_title }} images](/disconnected/updating/mirroring-image-repository#mirroring-ocp-image-repository)
*   [Updating a cluster using the web console](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
*   [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli)
*   [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
*   [Performing a canary rollout update](/updating/updating_a_cluster/update-using-custom-machine-config-pools#update-using-custom-machine-config-pools)