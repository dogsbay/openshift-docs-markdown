{%- set _mod_docs_content_type = "SNIPPET" %}

You can use a _node selector_ to specify a map of key/value pairs that you define by using custom labels on nodes and selectors specified in pods. For the pod to be eligible to run on a node, the pod must have the same key/value node selector as the label on the node.