---
title: "Installing a cluster on {{ aws_short }} with customizations"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ aws_short }} with customizations {id="installing-aws-customizations"}
{%- set context = "installing-aws-customizations" -%}
{%- set platform = "AWS" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ aws_first }} by using installer-provisioned infrastructure with customizations, including network configuration options. {._abstract}

In each, you modify parameters in the `install-config.yaml` file before you install the cluster. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

You must set most of the network configuration parameters during installation, and you can modify only `kubeProxy` configuration parameters in a running cluster.


:::note

The scope of the {{ product_title }} installation configurations is intentionally narrow. It is designed for simplicity and ensured success. You can complete many more {{ product_title }} configuration tasks after an installation completes.

:::


{% leveloffset +1 %}{% include "./modules/installing-aws-custom-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ aws_short }}](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

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

*   [Installation configuration parameters for {{ aws_short }}](/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-aws-alternatives-storing-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/config-aws-short-term-creds.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-individually.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-modifying-operator-install-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Ingress cluster traffic on {{ aws_short }} using a Network Load Balancer](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-aws#nw-configuring-ingress-cluster-traffic-aws-network-load-balancer_configuring-ingress-cluster-traffic-aws)

{% leveloffset +1 %}{% include "./modules/nw-aws-nlb-new-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-hybrid-ovnkubernetes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding Windows container workloads](/windows_containers/understanding-windows-container-workloads#understanding-windows-container-workloads)

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