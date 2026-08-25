---
title: Installing a cluster on AWS into an existing VPC
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on AWS into an existing VPC {id="installing-aws-vpc"}
{%- set context = "installing-aws-vpc" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into an existing {{ aws_short }} Virtual Private Cloud (VPC) on Amazon Web Services (AWS). The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/installing-aws-vpc-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-custom-aws-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-security-groups.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-permissions-iam-shared-vpc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-aws-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-aws-managing-dns-solution.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-config-yaml-customizations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for AWS](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-applying-aws-security-groups.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/allocating-load-balancers.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-allocating-load-balancers-to-subnets.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-allocate-load-balancers-to-subnets-procedure.md" %}{% endleveloffset %}

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

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)
*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Removing cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)
*   [Extending an AWS VPC cluster into an AWS Outpost](/installing/installing_aws/ipi/installing-aws-outposts#installing-aws-outposts)