---
title: Understanding OpenShift Container Platform development
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding {{ product_title }} development {id="understanding-development"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "understanding-development" %}

To fully use the capability of containers when developing and running enterprise-quality applications, ensure your environment is supported by tools that provide key operational characteristics.

These container characteristics tools allow containers to have following characteristics:

*   Created as discrete microservices that can be connected to other
containerized, and non-containerized, services. For example, you might want to
join your application with a database or attach a monitoring application to your application.
*   Resilient, so if a server crashes or needs to go down for maintenance or to be
decommissioned, containers can start on another machine.
*   Automated to pick up code changes automatically and then start and deploy new
versions of themselves.
*   Scaled up, or replicated, to have more instances serving clients as demand
increases and then spun down to fewer instances as demand declines.
*   Run in different ways, depending on the type of application. For example, one
application might run once a month to produce a report and then exit. Another
application might need to run constantly and be highly available to clients.
*   Managed so you can watch the state of your application and react when
something goes wrong.

As containers became widely adopted, the need for enterprise-ready tools led to a variety of management options.

The section explains options for
assets you can create when you build and deploy containerized Kubernetes
applications in {{ product_title }}. The section also describes which approaches you might
use for different kinds of applications and development requirements.

{% leveloffset +1 %}{% include "./modules/developing-containerized-applications.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/building-simple-container.md" %}{% endleveloffset %}

**Additional resources**

*   [Dockerfile (dockerdocs documentation)](https://docs.docker.com/engine/reference/builder/)
{%- if openshift_enterprise %}
*   [Custom image builds with Buildah](/cicd/builds/custom-builds-buildah#custom-builds-buildah)
{% endif %}

{% leveloffset +2 %}{% include "./modules/container-build-tool-options.md" %}{% endleveloffset %}

**Additional resources**

*   [Kubernetes blog announcement (Kubernetes documentation)](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/)
*   [CRI-O (cri-o documentation)](https://cri-o.io/)

{% leveloffset +2 %}{% include "./modules/base-image-options.md" %}{% endleveloffset %}

**Additional resources**

*   [Red Hat Universal Base Images](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/getting_started_with_containers/index#using_red_hat_base_container_images_standard_and_minimal)
*   [Red Hat Software Collections](https://access.redhat.com/documentation/en-us/red_hat_software_collections/3/html-single/using_red_hat_software_collections_container_images/index)

{% leveloffset +2 %}{% include "./modules/understanding-development-registry-options.md" %}{% endleveloffset %}

**Additional resources**

*   [Container images section of the Red Hat Ecosystem Catalog](https://catalog.redhat.com/software/containers/explore)
*   [Docker Hub](https://hub.docker.com/)
*   [Quay.io](https://quay.io/)
*   [{{ quay }}](https://access.redhat.com/products/red-hat-quay)

{% leveloffset +2 %}{% include "./modules/creating-kubernetes-manifest-openshift.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/understanding-kubernetes-pods.md" %}{% endleveloffset %}

**Additional resources**

*   [Pods (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
*   [Service (Kubernetes documentation)](https://kubernetes.io/docs/concepts/services-networking/service/)
*   [Network Policies (Kubernetes documentation)](https://kubernetes.io/docs/concepts/services-networking/network-policies/)
*   [`Ingress` (Kubernetes documentation)](https://kubernetes.io/docs/concepts/services-networking/ingress/)
*   [Volumes (Kubernetes documentation)](https://kubernetes.io/docs/concepts/storage/volumes/)
*   [`Deployment` (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [`DeploymentConfig` (Kubernetes documentation)](/applications/deployments/what-deployments-are#what-deployments-are)
{% endif %}

{% leveloffset +2 %}{% include "./modules/application-types.md" %}{% endleveloffset %}

**Additional resources**

*   [`Job` (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/)
*   [`CronJob` (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Deployment (Kubernetes documentation)](/applications/deployments/what-deployments-are#deployments-kube-deployments)
{%- endif %}
*   [ReplicaSet (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)
*   [DaemonSet (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)
*   [Operator (Kubernetes documentation)](https://www.redhat.com/en/technologies/cloud-computing/openshift/what-are-openshift-operators)
*   [StatefulSet (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

{% leveloffset +2 %}{% include "./modules/supporting-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/applying-manifest.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/develop-for-operators.md" %}{% endleveloffset %}