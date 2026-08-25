{%- set _mod_docs_content_type = "CONCEPT" %}
# How to access the {{ microshift_short }} node {id="accessing-microshift-node_{{ context }}"}

Access the {{ microshift_short }} service by using the {{ oc_first }}. {._abstract}

*   You can access the node from either the same machine running the {{ microshift_short }} service or from a remote location.
*   You can use this access to observe and administer workloads.
*   When using the following steps, choose the `kubeconfig` file that has the hostname or IP address you want to connect to and place it in the relevant directory.