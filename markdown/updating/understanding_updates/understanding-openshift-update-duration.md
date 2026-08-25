---
title: Understanding OpenShift Container Platform update duration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding {{ product_title }} update duration {id="understanding-openshift-update-duration"}
{%- set context = "openshift-update-duration" %}

{{ product_title }} update duration varies based on the deployment topology. You can understand the factors that affect update duration and use them to estimate how long the cluster update takes in your environment. {._abstract}

{% leveloffset +1 %}{% include "./modules/update-duration-factors.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-duration-phases.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-duration-cvo.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-duration-mco.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)
*   [Understanding how to use pod disruption budgets to specify the number of pods that must be up](/nodes/pods/nodes-pods-configuring#nodes-pods-pod-disruption-about_nodes-pods-configuring)

{% leveloffset +2 %}{% include "./modules/update-duration-example.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Introduction to OpenShift updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates)
*   [Understanding how manifests are applied during an update](/updating/understanding_updates/how-updates-work#update-manifest-application_how-updates-work)

{% leveloffset +1 %}{% include "./modules/update-duration-estimate-cluster-update-time.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_update-duration" ._additional-resources}

*   [OpenShift Container Platform architecture](/architecture/architecture#architecture)
*   [OpenShift Container Platform updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates)