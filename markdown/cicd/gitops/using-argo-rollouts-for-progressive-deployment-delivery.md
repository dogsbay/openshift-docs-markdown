{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using Argo Rollouts for progressive deployment delivery {id="using-argo-rollouts-for-progressive-deployment-delivery"}
{%- set context = "using-argo-rollouts-for-progressive-deployment-delivery" %}

{%- set FeatureName = "Argo Rollouts" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

Progressive delivery is the process of releasing product updates in a controlled and gradual manner.
Progressive delivery reduces the risk of a release by exposing the new version of a product update only to a subset of users initially. The process involves continuously observing and analyzing this new version to verify whether its behavior matches the requirements and expectations set. The verifications continue as the process gradually exposes the product update to a broader and wider audience.

{{ product_title }} provides some progressive delivery capability by using routes to split traffic between different services, but this typically requires manual intervention and management.

With Argo Rollouts, you can use automation and metric analysis to support progressive deployment delivery and drive the automated rollout or rollback of a new version of an application.
Argo Rollouts provide advanced deployment capabilities and enable integration with ingress controllers and service meshes.
You can use Argo Rollouts to manage multiple replica sets that represent different versions of the deployed application. Depending on your deployment strategy, you can handle traffic to these versions during an update by optimizing their existing traffic shaping abilities and gradually shifting traffic to the new version. You can combine Argo Rollouts with a metric provider like Prometheus to do metric-based and policy-driven rollouts and rollbacks based on the parameters set.

## Prerequisites {id="prerequisites_using-argo-rollouts-for-progressive-deployment-delivery"}
*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   {{ gitops_title }} 1.9.0 or a newer version is installed in your cluster.

{% leveloffset +1 %}{% include "./modules/gitops-benefits-of-argo-rollouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-about-argo-rollout-manager-custom-resources-and-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-creating-rolloutmanager-custom-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-deleting-rolloutmanager-custom-resource.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_argo-rollouts-in-gitops" ._additional-resources}
*   [Installing {{ gitops_title }}](/cicd/gitops/installing-openshift-gitops#installing-gitops-operator-in-web-console_installing-openshift-gitops)
*   [Uninstalling {{ gitops_title }}](/cicd/gitops/uninstalling-openshift-gitops#go-uninstalling-gitops-operator_uninstalling-openshift-gitops)
*   [Canary deployments](/applications/deployments/deployment-strategies#deployments-canary-deployments_deployment-strategies)
*   [Blue-green deployments](/applications/deployments/route-based-deployment-strategies#deployments-blue-green_route-based-deployment-strategies)
*   [`RolloutManager` Custom Resource specification](https://argo-rollouts-manager.readthedocs.io/en/latest/crd_reference/)
*   [Blue-green and canary deployments with Argo Rollouts](https://www.redhat.com/architect/blue-green-canary-argo-rollouts)
*   [Argo Rollouts tech preview limitations](https://cloud.redhat.com/blog/trying-out-argo-rollouts-in-openshift-gitops-1.9/)