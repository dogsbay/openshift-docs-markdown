{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubernetes conceptual guidelines {id="kubernetes-conceptual-guidelines_{{ context }}"}

To more effectively deploy and scale applications, you should understand how Kubernetes aligns with {{ product_title }}. {._abstract}

Before getting started with the {{ product_title }}, consider these conceptual guidelines of Kubernetes:

*   Start with one or more worker nodes to run the container workloads.
*   Manage the deployment of those workloads from one or more control plane nodes.
*   Wrap containers in a deployment unit called a pod. By using pods provides extra metadata with the container and offers the ability to group several containers in a single deployment entity.
*   Create special kinds of assets. For example, services are represented by a set of pods and a policy that defines how they are accessed. This policy allows containers to connect to the services that they need even if they do not have the specific IP addresses for the services. Replication controllers are another special asset that indicates how many pod replicas are required to run at a time. You can use this capability to automatically scale your application to adapt to its current demand.

The API to {{ product_title }} cluster is 100% Kubernetes. Nothing changes between a container running on any other Kubernetes and running on {{ product_title }}. No changes to the application.
{{ product_title }} brings added-value features to provide enterprise-ready enhancements to Kubernetes. {{ product_title }} CLI tool  (`oc`) is compatible with `kubectl`. While the Kubernetes API is 100% accessible within {{ product_title }}, the `kubectl` command-line lacks many features that could make it more user-friendly. {{ product_title }} offers a set of features and command-line tool like `oc`.
Although Kubernetes excels at managing your applications, it does not specify or manage platform-level requirements or deployment processes. Powerful and flexible platform management tools and processes are important benefits that {{ product_title }} offers. You must add authentication, networking, security, monitoring, and logs management to your containerization platform.