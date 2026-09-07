{%- set _mod_docs_content_type = "CONCEPT" %}
# About pod network connectivity {id="microshift-networking-pod-connectivity_{{ context }}"}

{{ microshift_short }} administrators have several options for exposing applications that run inside a node to external traffic and securing network connections:

*   A service such as NodePort
*   API resources, such as `Ingress` and `Route`

By default, Kubernetes allocates each pod an internal IP address for applications running within the pod. Pods and their containers can have traffic between them, but clients outside the node do not have direct network access to pods except when exposed with a service such as NodePort.