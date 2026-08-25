{%- set _mod_docs_content_type = "CONCEPT" %}
# About pod topology spread constraints for monitoring {id="using-pod-topology-spread-constraints-for-monitoring_{{ context }}"}

You can use pod topology spread constraints to control how the monitoring pods are spread across a network topology when {{ product_title }} pods are deployed in multiple availability zones.

Pod topology spread constraints are suitable for controlling pod scheduling within hierarchical topologies in which nodes are spread across different infrastructure levels, such as regions and zones within those regions.
Additionally, by being able to schedule pods in different zones, you can improve network latency in certain scenarios.

You can configure pod topology spread constraints for all the pods deployed by the {{ cmo_full }} to control how pod replicas are scheduled to nodes across zones. This ensures that the pods are highly available and run more efficiently, because workloads are spread across nodes in different data centers or hierarchical infrastructure zones.