{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparing Deployment and DeploymentConfig objects {id="deployments-comparing-deploymentconfigs_{{ context }}"}

You can use both Kubernetes `Deployment` objects and {{ product_title }} `DeploymentConfig` objects to manage application rollouts. Before deciding which to use, understand the differences between the two objects in design and supported features. {._abstract}

Use `Deployment` objects unless you need a capability that only `DeploymentConfig` objects provide.

The following sections go into more detail on the differences between the two object types to further help you decide which type to use.

{% include "./snippets/deployment-config-deprecated.md" %}

## Design {id="deployments-design_{{ context }}"}

One important difference between `Deployment` and `DeploymentConfig` objects is the properties of the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem) that each design has chosen for the rollout process. `DeploymentConfig` objects  prefer consistency, whereas `Deployments` objects take availability over consistency.

For `DeploymentConfig` objects, if a node running a deployer pod goes down, it will not get replaced. The process waits until the node comes back online or is manually deleted. Manually deleting the node also deletes the corresponding pod. This means that you can not delete the pod to unstick the rollout, as the kubelet is responsible for deleting the associated pod.

However, deployment rollouts are driven from a controller manager. The controller manager runs in high availability mode on masters and uses leader election algorithms to value availability over consistency. During a failure it is possible for other masters to act on the same deployment at the same time, but this issue will be reconciled shortly after the failure occurs.