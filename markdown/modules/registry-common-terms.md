{%- set _mod_docs_content_type = "REFERENCE" %}
# Glossary of common terms for {{ product_registry }} {id="openshift-registry-common-terms_{{ context }}"}

This glossary defines the common terms that are used in the registry content. {._abstract}


container
:   Lightweight and executable images that consist of software and all its dependencies. Because containers virtualize the operating system, you can run containers in a data center, a public or private cloud, or your local host.

{% if openshift_rosa or openshift_rosa_hcp %}

Image Registry Operator
{%- if openshift_rosa_hcp %}
:   The Image Registry Operator runs in the `CONTROL_PLANE_NAMESPACE` of the management cluster, and manages the registry instance in the `openshift-image-registry` of the cluster.
{%- endif %}
{%- if openshift_rosa %}
:   The Image Registry Operator runs in the `openshift-image-registry` namespace, and manages the registry instance in that location.
{%- endif %}
{% endif %}


image repository
:   An image repository is a collection of related container images and tags identifying images.


mirror registry
:   The mirror registry is a registry that holds the mirror of {{ product_title }} images.


namespace
:   A namespace isolates groups of resources within a single cluster.


pod
:   The pod is the smallest logical unit in Kubernetes. A pod consists of one or more containers to run in a compute node.


private registry
:   A registry is a server that implements the container image registry API. A private registry is a registry that requires authentication so that users can access the content of the registry.


public registry
:   A registry is a server that implements the container image registry API. A public registry is a registry that serves its content publicly.


Quay.io
:   A public {{ quay }} Container Registry instance provided and maintained by Red Hat, which serves most of the container images and Operators to {{ product_title }} clusters.


{{ product_registry }}
:   {{ product_registry }} is the registry provided by {{ product_title }} to manage images.


registry authentication
:   To push and pull images to and from private image repositories, the registry needs to authenticate its users with credentials.


route
:   Exposes a service to allow for network access to pods from users and applications outside the {{ product_title }} instance.


scale down
:   To decrease the number of replicas.


scale up
:   To increase the number of replicas.


service
:   A service exposes a running application on a set of pods.