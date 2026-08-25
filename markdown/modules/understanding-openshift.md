{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding {{ product_title }} {id="understanding-openshift_{{ context }}"}

You can use {{ product_title }} to deploy, configure, and manage the lifecycle of container-based applications.  {._abstract}

{{ product_title }} is a Kubernetes environment for managing containers and their dependencies on various computing platforms, such as bare metal, virtualized, on-premise, and in cloud. {{ product_title }} offers usability, stability, and customization of its components.

{{ product_title }} utilises a number of computing resources, known as nodes. A node has a lightweight, secure operating system based on {{ op_system_base_full }}, known as {{ op_system_first }}.

After a node is booted and configured, it obtains a container runtime, such as CRI-O or Docker, for managing and running the images of container workloads scheduled to it. The Kubernetes agent, or kubelet schedules container workloads on the node. The kubelet is responsible for registering the node with the cluster and receiving the details of container workloads.

{{ product_title }} configures and manages the networking, load balancing and routing of the cluster. {{ product_title }} adds cluster services for monitoring the cluster health and performance, logging, and for managing upgrades.

The container image registry and software catalog provide Red Hat certified products and community built softwares for providing various application services within the cluster. These applications and services manage the applications deployed in the cluster, databases, frontends and user interfaces, application runtimes and business automation, and developer services for development and testing of container applications.

You can manage applications within the cluster either manually by configuring deployments of containers running from pre-built images or through resources known as Operators. You can build custom images from pre-build images and source code, and store these custom images locally in an internal, private or public registry.

The Multicluster Management layer can manage multiple clusters including their deployment, configuration, compliance and distribution of workloads in a single console.

![Red Hat {{ oke }}](/_assets/images/oke-about-ocp-stack-image.png)