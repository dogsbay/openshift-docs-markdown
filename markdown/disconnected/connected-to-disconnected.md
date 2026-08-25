---
title: Converting a connected cluster to a disconnected cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Converting a connected cluster to a disconnected cluster {id="connected-to-disconnected"}
{%- set context = "connected-to-disconnected" %}

You can convert your {{ product_title }} cluster from a connected cluster to a disconnected cluster. {._abstract}

A disconnected cluster, also known as a restricted cluster, does not have an active connection to the internet. As such, you must mirror the contents of your registries and installation media. You can create this mirror registry on a host that can access both the internet and your closed network, or copy images to a device that you can move across network boundaries.

{% leveloffset +1 %}{% include "./modules/installation-about-mirror-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/prereqs-converting-to-disconnected.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Red&#160;Hat Quay](https://www.redhat.com/en/technologies/cloud-computing/quay)
*   [JFrog Artifactory](https://jfrog.com/artifactory/)
*   [Sonatype Nexus Repository](https://www.sonatype.com/products/repository-oss?topnav=true)
*   [Harbor](https://goharbor.io/)
*   [Deploying Red&#160;Hat Quay for proof-of-concept purposes](https://docs.redhat.com/en/documentation/red_hat_quay/3/html/proof_of_concept_-_deploying_red_hat_quay)
*   [Deploying Red&#160;Hat Quay by using the Quay Operator](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/deploying_the_red_hat_quay_operator_on_openshift_container_platform/index)
*   [Red&#160;Hat Quay documentation on organizations](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html-single/use_red_hat_quay/index#user-org-intro_use-quay)

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-prepare-mirror.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-mirror-images.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Mirroring an Operator catalog](/disconnected/using-olm#olm-mirror-catalog_olm-restricted-networks)
*   [OpenShift CLI administrator command reference](/cli_reference/openshift_cli/administrator-cli-commands#oc-adm-catalog-mirror)

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-config-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-verify.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-disconnect.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Disabling the {{ insights_operator }}](/support/remote_health_monitoring/remote-health-reporting#insights-operator-new-pull-secret-disabled_remote-health-reporting)

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-restore-insights.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ red_hat_lightspeed }}](https://console.redhat.com)

{% leveloffset +1 %}{% include "./modules/connected-to-disconnected-restore.md" %}{% endleveloffset %}