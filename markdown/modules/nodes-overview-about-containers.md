{%- set _mod_docs_content_type = "CONCEPT" %}
# About containers {id="nodes-overview-about-containers_{{ context }}"}

A container is the basic unit of an {{ product_title }} application, which comprises the application code packaged along with its dependencies, libraries, and binaries. {._abstract}

Containers provide consistency across environments and multiple deployment targets: physical servers, virtual machines (VMs), and private or public cloud.

Linux container technologies are lightweight mechanisms for isolating running processes and limiting access to only designated resources.

{{ product_title }} provides specialized containers called Init containers. Init containers run before application containers and can contain utilities or setup scripts not present in an application image. You can use an Init container to perform tasks before the rest of a pod is deployed.

Apart from performing specific tasks on nodes, pods, and containers, you can work with the overall {{ product_title }} cluster to keep the cluster efficient and the application pods highly available.