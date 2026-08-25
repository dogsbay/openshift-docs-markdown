{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ secondary_scheduler_operator }} {id="nodes-secondary-scheduler-about_{{ context }}"}

The {{ secondary_scheduler_operator_full }} provides a way to deploy a custom secondary scheduler in {{ product_title }}. The secondary scheduler runs alongside the default scheduler to schedule pods. Pod configurations can specify which scheduler to use. {._abstract}

The custom scheduler must have the `/bin/kube-scheduler` binary and be based on the upstream Kubernetes scheduling framework.


:::important

You can use the {{ secondary_scheduler_operator }} to deploy a custom secondary scheduler in {{ product_title }}, but Red Hat does not directly support the functionality of the custom secondary scheduler.

:::


The {{ secondary_scheduler_operator }} creates the default roles and role bindings required by the secondary scheduler. You can specify which scheduling plugins to enable or disable by configuring the `KubeSchedulerConfiguration` resource for the secondary scheduler.

You can optionally configure high availability for the secondary scheduler to ensure continuous pod scheduling during scheduler pod failures or maintenance. When high availability is enabled, the Operator deploys multiple secondary scheduler replicas distributed across nodes, eliminating the scheduler as a single point of failure in production environments.

The {{ secondary_scheduler_operator }} publishes secondary scheduler metrics to Prometheus by default, enabling monitoring and observability of scheduler performance.

**Additional resources**
{._additional-resources}

*   [Kubernetes scheduling framework](https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/)