---
title: Installing a cluster on AWS in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on AWS in a disconnected environment {id="installing-restricted-networks-aws-installer-provisioned"}
{%- set context = "installing-restricted-networks-aws-installer-provisioned" %}

You can install a cluster on {{ aws_first }} in a restricted network by creating an internal mirror of the installation release content on an existing {{ aws_short }} Virtual Private Cloud (VPC). By using this configuration, you can deploy a cluster in an environment with limited internet connectivity to help ensure compliance with security policies. {._abstract}

{% leveloffset +1 %}{% include "./modules/installing-aws-restricted-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-custom-aws-vpc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installing-aws-managing-dns-solution.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-config-yaml-customizations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-aws-alternatives-storing-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/config-aws-short-term-creds.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-individually.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-provisioning-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Configure image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)