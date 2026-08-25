---
title: Managing deployment processes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing deployment processes {id="deployment-operations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "deployment-operations" %}

## Managing DeploymentConfig objects {id="deploymentconfig-operations"}

{% include "./snippets/deployment-config-deprecated.md" %}

`DeploymentConfig` objects can be managed from the {{ product_title }} web console’s **Workloads** page or using the `oc` CLI. The following procedures show CLI usage unless otherwise stated.

{% leveloffset +2 %}{% include "./modules/deployments-starting-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-viewing-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-retrying-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-rolling-back.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-exec-cmd-in-container.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-viewing-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-triggers.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/deployments-setting-triggers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-setting-resources.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**

*   For more information about resource limits and requests, see [Understanding managing application memory](/nodes/clusters/nodes-cluster-resource-configure#nodes-cluster-resource-configure-about_nodes-cluster-resource-configure).
{% endif %}

{% leveloffset +2 %}{% include "./modules/deployments-scaling-manually.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-accessing-private-repos.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +2 %}{% include "./modules/deployments-assigning-pods-to-nodes.md" %}{% endleveloffset %}

{% endif %}

{% if not openshift_online %}
{% leveloffset +2 %}{% include "./modules/deployments-running-pod-svc-acct.md" %}{% endleveloffset %}

{% endif %}