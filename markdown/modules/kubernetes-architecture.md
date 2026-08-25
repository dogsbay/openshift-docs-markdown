{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubernetes architecture {id="kubernetes-architecture_{{ context }}"}

You can run Kubernetes containers across various machines and environments.  {._abstract}

A cluster is a single computational unit consisting of multiple nodes in a cloud environment. A Kubernetes cluster includes a control plane and compute nodes. 

The control plane node controls and maintains the state of a cluster. You can run the Kubernetes application by using compute nodes. You can use the Kubernetes namespace to differentiate cluster resources in a cluster. Namespace scoping is applicable for resource objects, such as deployments, services, and pods. You cannot use namespace for cluster-wide resource objects such as storage classes, nodes, and persistent volumes.

**Figure 1. Architecture of Kubernetes**

![247_OpenShift_Kubernetes_Overview-2](/_assets/images/247_OpenShift_Kubernetes_Overview-2.png)