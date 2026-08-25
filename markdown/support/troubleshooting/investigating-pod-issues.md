---
title: Investigating pod issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Investigating pod issues {id="investigating-pod-issues"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "investigating-pod-issues" %}

{{ product_title }} leverages the Kubernetes concept of a pod, which is one or more containers deployed together on one host. A pod is the smallest compute unit that can be defined, deployed, and managed on {{ product_title }} {{ product_version }}.

After a pod is defined, it is assigned to run on a node until its containers exit, or until it is removed. Depending on policy and exit code, pods are either removed after exiting or retained so that their logs can be accessed.

The first thing to check when pod issues arise is the pod’s status. If an explicit pod failure has occurred, observe the pod’s error state to identify specific image, container, or pod network issues. Focus diagnostic data collection according to the error state. Review pod event messages, as well as pod and container log information. Diagnose issues dynamically by accessing running Pods on the command line, or start a debug pod with root access based on a problematic pod’s deployment configuration.

{% leveloffset +1 %}{% include "./modules/understanding-pod-error-states.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/reviewing-pod-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/inspecting-pod-and-container-logs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/accessing-running-pods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/starting-debug-pods-with-root-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/copying-files-pods-and-containers.md" %}{% endleveloffset %}