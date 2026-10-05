---
title: Installing a cluster on Google Cloud Dedicated
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on Google Cloud Dedicated {id="installing-gcp-dedicated"}
{%- set context = "installing-gcp-dedicated" %}

You can install {{ product_title }} on Google Cloud Dedicated (GCD), a sovereign cloud platform that provides {{ gcp_short }} technology in a fully isolated environment with strict data and operational sovereignty guarantees. {._abstract}

{% leveloffset +1 %}{% include "./modules/prereqs-installing-gcp-dedicated.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-dedicated-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-dedicated-limitations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Changing the default storage class](/storage/dynamic-provisioning#change-default-storage-class_dynamic-provisioning)
*   [GCE PersistentDisk (gcePD) object definition](/storage/dynamic-provisioning#gce-persistentdisk-storage-class_dynamic-provisioning)

{% leveloffset +1 %}{% include "./modules/installation-gcp-dedicated-preparing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional Google Cloud configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-dedicated-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-dedicated-manual-modes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-dedicated-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Opt out of remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)