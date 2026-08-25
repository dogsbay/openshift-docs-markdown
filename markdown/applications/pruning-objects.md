---
title: Pruning objects to reclaim resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Pruning objects to reclaim resources {id="pruning-objects"}
{%- set context = "pruning-objects" %}

Reclaim cluster storage and optimize API server performance by pruning stale resources. You can run manual CLI commands or configure automated cron jobs to clean up obsolete deployment, build, image, and group records. {._abstract}

Over time, API objects created in {{ product_title }} can accumulate in the
cluster’s etcd data store through normal user operations, such as when building
and deploying applications.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
Cluster administrators can periodically prune older versions of objects from the
cluster that are no longer required. For example, by pruning images you can delete
older images and layers that are no longer in use, but are still taking up disk
space.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
A user with the `dedicated-admin` role can periodically prune older versions of objects from the
cluster that are no longer required. For example, by pruning images you can delete
older images and layers that are no longer in use, but are still taking up disk
space.
{% endif %}

{% leveloffset +1 %}{% include "./modules/pruning-basic-operations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pruning-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pruning-deployments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pruning-builds.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**
{._additional-resources}

*   [Performing advanced builds → Pruning builds](/cicd/builds/advanced-build-operations#builds-build-pruning_advanced-build-operations)
{% endif %}

{% leveloffset +1 %}{% include "./modules/pruning-images.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/pruning-images-manual.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-considerations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-limitations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-conditions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-running-operation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-secure-insecure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-options.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pruning-images-troubleshooting.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the registry](/registry/accessing-the-registry#accessing-the-registry)
*   [Exposing the registry](/registry/securing-exposing-registry#securing-exposing-registry)
*   [Image Registry Operator in {{ product_title }}](/registry/configuring-registry-operator#configuring-registry-operator)
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/pruning-hard-pruning-registry.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/pruning-cronjobs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Running tasks in pods using jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
{%- endif %}
*   [Resource quotas across multiple projects](/applications/quotas/quotas-setting-across-multiple-projects#setting-quotas-across-multiple-projects)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
{%- endif %}