{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing {{ pipelines_shortname }} {id="installing-pipelines"}
{%- set context = "installing-pipelines" %}

This guide walks cluster administrators through the process of installing the {{ pipelines_title }} Operator to an {{ product_title }} cluster. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed `oc` CLI.
*   You have installed [{{ pipelines_shortname }} (`tkn`) CLI](/cli_reference/tkn_cli/installing-tkn#installing-tkn) on your local system.
*   Your cluster has the [Marketplace capability](/installing/overview/cluster-capabilities#marketplace-operator_cluster-capabilities) enabled or the Red Hat Operator catalog source configured manually.

{% if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in the [Obtaining the installation program](/installing/installing_gcp/installing-gcp-customizations#installation-obtaining-installer_installing-gcp-customizations) to install this Operator.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in [Configuring {{ product_title }} to use Red Hat Operators](/post_installation_configuration/preparing-for-users#olm-installing-operators-from-software-catalog-configure_post-install-preparing-for-users).
{% endif %}

{% leveloffset +1 %}{% include "./modules/op-installing-pipelines-operator-in-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-installing-pipelines-operator-using-the-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-pipelines-operator-in-restricted-environment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-performance-tuning-using-tektonconfig-cr.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   You can learn more about installing Operators on {{ product_title }} in the [adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster) section.
*   To install {{ tekton_chains }} using the {{ pipelines_title }} Operator, see [Using {{ tekton_chains }} for {{ pipelines_title }} supply chain security](/cicd/pipelines/using-tekton-chains-for-openshift-pipelines-supply-chain-security#using-tekton-chains-for-openshift-pipelines-supply-chain-security).
*   To install and deploy in-cluster {{ tekton_hub }}, see [Using {{ tekton_hub }} with {{ pipelines_title }}](/cicd/pipelines/using-tekton-hub-with-openshift-pipelines#using-tekton-hub-with-openshift-pipelines).
*   For more information on using pipelines in a restricted environment, see:
    *   [Mirroring images to run pipelines in a restricted environment](/cicd/pipelines/creating-applications-with-cicd-pipelines#op-mirroring-images-to-run-pipelines-in-restricted-environment_creating-applications-with-cicd-pipelines)
    *   [Configuring Samples Operator for a restricted cluster](/openshift_images/configuring-samples-operator#samples-operator-restricted-network-install)
    *   [Creating a cluster with a mirrored registry](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images)