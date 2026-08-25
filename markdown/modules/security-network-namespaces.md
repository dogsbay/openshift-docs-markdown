{%- set _mod_docs_content_type = "CONCEPT" %}
# Using network namespaces {id="security-network-namespaces_{{ context }}"}

You can use software-defined networking (SDN) in {{ product_title }} to give a unified cluster network that enables communication between containers across the cluster. {._abstract}

Network policy mode, by default, makes all pods in a project accessible from other pods and network endpoints. To isolate one or more pods in a project, you can create `NetworkPolicy` objects in that project to indicate the allowed incoming connections. Using multitenant mode, you can provide project-level isolation for pods and services.