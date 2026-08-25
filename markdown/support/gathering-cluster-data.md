---
title: Gathering data about your cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Gathering data about your cluster {id="gathering-cluster-data"}

{%- if openshift_rosa or openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "gathering-cluster-data" %}

{% if not openshift_origin %}
You can gather debugging information about your {{ product_title }} cluster to provide to Red&#160;Hat Support when opening a support case. {._abstract}
{% endif %}

{% if openshift_origin %}
You can use the following tools to get debugging information about your {{ product_title }} cluster.
{% endif %}

{% leveloffset +1 %}{% include "./modules/about-must-gather.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +2 %}{% include "./modules/support-gather-data.md" %}{% endleveloffset %}

{% endif %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/support-must-gather-targeted-collection.md" %}{% endleveloffset %}

{% endif %}

{% if not openshift_origin %}
{% leveloffset +2 %}{% include "./modules/support-must-gather-targeted-collection-gathering-data.md" %}{% endleveloffset %}

{% endif %}

{% if not openshift_origin %}
{% leveloffset +2 %}{% include "./modules/must-gather-flags.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +2 %}{% include "./modules/gathering-data-specific-features.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Gathering debugging data for the Custom Metrics Autoscaler](/nodes/cma/nodes-cma-autoscaling-custom#nodes-cma-autoscaling-custom-gather)
*   [Red Hat {{ product_title }} Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift)
{% endif %}

{% if openshift_rosa %}
*   [{{ product_title }} update life cycle](/rosa_architecture/rosa_policy_service_definition/rosa-life-cycle)
{% endif %}

{% if openshift_rosa_hcp %}
*   [{{ product_title }} update life cycle](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-life-cycle)
{% endif %}

{% if openshift_dedicated %}
*   [{{ product_title }} update life cycle](/osd_architecture/osd_policy/osd-life-cycle)
{% endif %}

{% leveloffset +2 %}{% include "./modules/gathering-data-network-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/must-gather-storage-limit.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin) %}
{% leveloffset +1 %}{% include "./modules/about-self-service-tsr.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/support-log-gather-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-log-gather-install-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-log-gather-install-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-log-gather-configure-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-log-gather-reduce-size.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding and creating service accounts](/authentication/understanding-and-creating-service-accounts#understanding-and-creating-service-accounts)

{% leveloffset +2 %}{% include "./modules/support-log-gather-config-params.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-log-gather-uninstall-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-log-gather-remove-resources-console.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/support-get-cluster-id.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_origin or openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/about-sosreport.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-generating-a-sosreport-archive.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/querying-bootstrap-node-journal-logs.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/querying-cluster-node-journal-logs.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/support-network-trace-methods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-collecting-host-network-trace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-collecting-network-trace.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_origin %}
{% leveloffset +1 %}{% include "./modules/support-collecting-host-network-trace.md" %}{% endleveloffset %}

{% endif %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/support-providing-diagnostic-data-to-red-hat.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/about-toolbox.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-installing-packages-to-a-toolbox-container.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-starting-an-alternative-image-with-toolbox.md" %}{% endleveloffset %}