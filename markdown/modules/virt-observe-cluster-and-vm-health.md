{%- set _mod_docs_content_type = "CONCEPT" %}
# Observe cluster and VM health {id="virt-observe-cluster-and-vm-health_{{ context }}"}

Monitor cluster and VM health, find performance problems, and check configuration baselines, so you can detect degradation before it affects your workloads. {._abstract}

{{ VirtProductName }} uses the same monitoring stack as the rest of {{ product_title }}. VM metrics and alerts reach the web console alongside everything else in your cluster. The **Status** card on the **Home** → **Overview** page shows current alerts and conditions.

What you see there depends on what you set up beforehand. Configure monitoring while the cluster is healthy, so that when performance drops you can see what changed.