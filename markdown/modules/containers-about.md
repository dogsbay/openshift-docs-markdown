{%- set _mod_docs_content_type = "CONCEPT" %}
# Containers {id="containers-about_{{ context }}"}

Containers are isolated running instances of container images that serve as the basic units of {{ product_title }} applications. By understanding containers, you can work with containerized applications and manage how they run in your cluster. {._abstract}

Many application instances can be running in containers on a single host without visibility into each others' processes, files, network, and so on. Typically, each container provides a single service, often called a micro-service, such as a web server or a database, though containers can be used for arbitrary workloads.

The Linux kernel has been incorporating capabilities for container technologies for years. The Docker project developed a convenient management interface for Linux containers on a host. More recently, the Open Container Initiative has developed open standards for container formats and container runtimes. {{ product_title }} and Kubernetes add the ability to orchestrate OCI- and Docker-formatted containers across multi-host installations.

Though you do not directly interact with container runtimes when using {{ product_title }}, understanding their capabilities and terminology is important for understanding their role in {{ product_title }} and how your applications function inside of containers.

Tools such as Podman can be used to replace Docker command-line tools for running and managing containers directly. By using the `podman` CLI, you can experiment with containers separately from {{ product_title }}.