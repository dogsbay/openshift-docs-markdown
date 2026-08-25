{%- set _mod_docs_content_type = "CONCEPT" %}
# Securing containers on {{ op_system_first }} {id="security-hosts-vms-rhcos_{{ context }}"}

You should understand the security enhancements you can make to the containers in your {{ product_title }} clusters. {._abstract}

Containers simplify the act of deploying many applications to run on the same host, using the same kernel and container runtime to spin up each container. The applications can be owned by many users and, because they are kept separate, can run different, and even incompatible, versions of those applications at the same time without issue.

In Linux, containers are just a special type of process, so securing containers is similar in many ways to securing any other running process. An environment for running containers starts with an operating system that can secure the host kernel from containers and other processes running on the host, and secure containers from each other.

Because {{ product_title }} {{ product_version }} runs on {{ op_system }} hosts, with the option of using {{ op_system_base_full }} as worker nodes, the following concepts apply by default to any deployed {{ product_title }} cluster. These {{ op_system_base }} security features are at the core of what makes running containers in {{ product_title }} more secure:

*   _Linux namespaces_ enable creating an abstraction of a particular global system resource to make it appear as a separate instance to processes within a namespace. Consequently, several containers can use the same computing resource simultaneously without creating a conflict. Container namespaces that are separate from the host by default include mount table, process table, network interface, user, control group, UTS, and IPC namespaces. Those containers that need direct access to host namespaces need to have elevated permissions to request that access.
{%- if openshift_enterprise or openshift_webscale or openshift_aro %}
See Building, running, and managing containers from the {{ op_system_base }} 9 container documentation for details on the types of namespaces.
{%- endif %}
*   _SELinux_ provides an additional layer of security to keep containers isolated from each other and from the host. SELinux allows administrators to enforce mandatory access controls (MAC) for every user, application, process, and file.


:::warning

Disabling SELinux on {{ op_system }} is not supported.

:::

*   _CGroups_ (control groups) limit, account for, and isolate the resource usage (CPU, memory, disk I/O, network, and so on.) of a collection of processes. CGroups are used to ensure that containers on the same host are not impacted by each other.
*   _Secure computing mode (seccomp)_ profiles can be associated with a container to restrict available system calls.
*   Deploying containers using _{{ op_system }}_ reduces the attack surface by minimizing the host environment and tuning it for containers. The CRI-O container engine further reduces that attack surface by implementing only those features required by Kubernetes and {{ product_title }} to run and manage containers, as opposed to other container engines that implement desktop-oriented standalone features.

{{ op_system }} is a version of {{ op_system_base_full }} that is specially configured to work as control plane (master) and worker nodes on {{ product_title }} clusters. So {{ op_system }} is tuned to efficiently run container workloads, along with Kubernetes and {{ product_title }} services.


:::note

To further protect {{ op_system }} systems in {{ product_title }} clusters, most containers, except those managing or monitoring the host system itself, should run as a non-root user. Dropping the privilege level or creating containers with the least amount of privileges possible is recommended best practice for protecting your own {{ product_title }} clusters.

:::