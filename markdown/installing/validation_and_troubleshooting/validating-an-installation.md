---
title: Validating an installation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Validating an installation {id="validating-an-installation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "validating-an-installation" %}

You can check the status of an {{ product_title }} cluster after an installation or validate boot artifacts before an installation.

After you complete the procedures, you can move onto postinstallation cluster tasks. If you experience installation issues, see "Troubleshooting installations" in the _Additional resources_" section.

{% leveloffset +1 %}{% include "./modules/rhcos-validate-live-media.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/reviewing-the-installation-log.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/viewing-the-image-pull-source.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/getting-cluster-version-status-and-update-details.md" %}{% endleveloffset %}

**Additional resources**

*   [Querying Operator status after installation](/support/troubleshooting/troubleshooting-installations#querying-operator-status-after-installation_troubleshooting-installations)
*   [Troubleshooting Operator issues](/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues)
*   [Updating a cluster using the web console](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/cco-ccoctl-install-verifying.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/querying-the-status-of-cluster-nodes-using-the-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [Verifying node health](/support/troubleshooting/verifying-node-health#verifying-node-health)

{% leveloffset +1 %}{% include "./modules/reviewing-cluster-status-from-the-openshift-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/reviewing-cluster-status-from-the-openshift-cluster-manager.md" %}{% endleveloffset %}

**Additional resources**

*   [Using {{ red_hat_lightspeed }} to identify issues with your cluster](/support/remote_health_monitoring/using-insights-to-identify-issues-with-your-cluster#using-insights-to-identify-issues-with-your-cluster)

{% leveloffset +1 %}{% include "./modules/checking-cluster-resource-availability-and-utilization.md" %}{% endleveloffset %}

**Additional resources**

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)

{% leveloffset +1 %}{% include "./modules/listing-alerts-that-are-firing.md" %}{% endleveloffset %}

**Additional resources**

*   [Managing alerts as an Administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/managing_alerts/managing-alerts-as-an-administrator)
*   [Troubleshooting installations](/support/troubleshooting/troubleshooting-installations#troubleshooting-installations)
*   [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#post-install-cluster-tasks)