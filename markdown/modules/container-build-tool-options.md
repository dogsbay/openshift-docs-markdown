{%- set _mod_docs_content_type = "CONCEPT" %}
# Container build tool options {id="container-build-tool-options_{{ context }}"}

Building and managing containers with `buildah`, `podman`, and `skopeo` results in industry-standard container images that include features specifically tuned for deploying containers in {{ product_title }} or other Kubernetes environments. These daemonless, rootless tools reduce overhead while tuning your containers for Kubernetes. {._abstract}


:::important

Support for Docker Container Engine as a container runtime is deprecated in Kubernetes 1.20 and will be removed in a future release. However, Docker-produced images continue to work in your cluster with all runtimes, including CRI-O. For more information, see the "Kubernetes blog announcement".

:::


When you ultimately run your containers in {{ product_title }}, you use the CRI-O container engine. 
CRI-O runs on every compute and control plane machine in an {{ product_title }} cluster, 
but CRI-O is not yet supported as a standalone runtime outside of {{ product_title }}.