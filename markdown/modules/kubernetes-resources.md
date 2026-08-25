{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubernetes resources {id="kubernetes-resources_{{ context }}"}

To extend and automate your Kubernetes cluster capabilities, you can use custom resources and Operators. {._abstract}

A custom resource is an extension of the Kubernetes API. Operators are software extensions which manage applications and their components with the help of custom resources. Kubernetes uses a declarative model when you want a fixed desired result while dealing with cluster resources. By using Operators, Kubernetes defines its states in a declarative way. You can modify the Kubernetes cluster resources by using imperative commands.
An Operator acts as a control loop which continuously compares the desired state of resources with the actual state of resources and puts actions in place to bring reality in line with the desired state.

**Figure 1. Kubernetes cluster overview**

![247_OpenShift_Kubernetes_Overview-1](/_assets/images/247_OpenShift_Kubernetes_Overview-1.png)

**Kubernetes Resources**

| Resource | Purpose |
| --- | --- |
| Service | Kubernetes uses services to expose a running application on a set of pods. |
| `ReplicaSets` | Kubernetes uses the `ReplicaSets` to maintain the constant pod number. |
| Deployment | A resource object that maintains the life cycle of an application. |

Kubernetes is a core component of an {{ product_title }}. You can use {{ product_title }} for developing and running containerized applications. With its foundation in Kubernetes, the {{ product_title }} incorporates the same technology that serves as the engine for massive telecommunications, streaming video, gaming, banking, and other applications. You can extend your containerized applications beyond a single cloud to on-premise and multi-cloud environments by using the {{ product_title }}.