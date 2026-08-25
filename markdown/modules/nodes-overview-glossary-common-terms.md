{%- set _mod_docs_content_type = "REFERENCE" %}
# Glossary of common terms for {{ product_title }} nodes {id="nodes-overview-glossary-common-terms_{{ context }}"}

This glossary defines common terms that are used in the _node_ content. {._abstract}


Container
:   It is a lightweight and executable image that comprises software and all its dependencies. Containers virtualize the operating system, as a result, you can run containers anywhere from a data center to a public or private cloud to even a developer’s laptop.


Daemon set
:   Ensures that a replica of the pod runs on eligible nodes in an {{ product_title }} cluster.


egress
:   The process of data sharing externally through a network’s outbound traffic from a pod.


garbage collection
:   The process of cleaning up cluster resources, such as terminated containers and images that are not referenced by any running pods.

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}


Horizontal Pod Autoscaler(HPA)
:   Implemented as a Kubernetes API resource and a controller. You can use the HPA to specify the minimum and maximum number of pods that you want to run. You can also specify the CPU or memory utilization that your pods should target. The HPA scales out and scales in pods when a given CPU or memory threshold is crossed.
{%- endif %}


Ingress
:   Incoming traffic to a pod.


Job
:   A process that runs to completion. A job creates one or more pod objects and ensures that the specified pods are successfully completed.


Labels
:   You can use labels, which are key-value pairs, to organize and select subsets of objects, such as a pod.


Node
:   A worker machine in the {{ product_title }} cluster. A node can be either be a virtual machine (VM) or a physical machine.


Node Tuning Operator
:   You can use the Node Tuning Operator to manage node-level tuning by using the TuneD daemon. It ensures custom tuning specifications are passed to all containerized TuneD daemons running in the cluster in the format that the daemons understand. The daemons run on all nodes in the cluster, one per node.


Self Node Remediation Operator
:   The Operator runs on the cluster nodes and identifies and reboots nodes that are unhealthy.


Pod
:   One or more containers with shared resources, such as volume and IP addresses, running in your {{ product_title }} cluster.
    A pod is the smallest compute unit defined, deployed, and managed.


Toleration
:   Indicates that the pod is allowed (but not required) to be scheduled on nodes or node groups with matching taints. You can use tolerations to enable the scheduler to schedule pods with matching taints.


Taint
:   A core object that comprises a key, value, and effect. Taints and tolerations work together to ensure that pods are not scheduled on irrelevant nodes.