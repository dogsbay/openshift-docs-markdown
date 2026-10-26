---
title: Optimizing flowlogs-pipeline resource consumption in large clusters
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Optimizing flowlogs-pipeline resource consumption in large clusters {id="network-observability-optimizing-flowlogs-pipeline"}
{%- set context = "optimizing-flowlogs-pipeline" %}

Use the shared cache architecture to reduce Kubernetes API server load and resource consumption in large-scale `flowlogs-pipeline` deployments while maintaining network flow visibility. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-flowlogs-pipeline-scaling-large-scale-deployment-challenges.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-flowlogs-pipeline-scaling-shared-cache-cluster-stability.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-flowlogs-pipeline-reducing-api-server-load-in-large-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-flowlogs-pipeline-shared-cache-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-flowlogs-pipeline-resolving-shared-cache-performance-issues.md" %}{% endleveloffset %}