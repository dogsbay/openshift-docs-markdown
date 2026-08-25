---
title: General troubleshooting
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# General troubleshooting {id="troubleshooting-general-troubleshooting"}
{%- set context = "troubleshooting-general-troubleshooting" %}

When you encounter a problem, the first step is to find the specific area where the issue is happening.
To narrow down the potential problematic areas, complete one or more of the following tasks:

*   Query your cluster
*   Check your pod logs
*   Debug a pod
*   Review events

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-query-cluster.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [oc get](/cli_reference/openshift_cli/developer-cli-commands#oc-get)
*   [Reviewing pod status](/support/troubleshooting/investigating-pod-issues#reviewing-pod-status_investigating-pod-issues)

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-check-logs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [oc logs](/cli_reference/openshift_cli/developer-cli-commands#oc-logs)
*   [Logging](/security/container_security/security-monitoring#security-monitoring-cluster-logging_security-monitoring)
*   [Inspecting pod and container logs](/support/troubleshooting/investigating-pod-issues#inspecting-pod-and-container-logs_investigating-pod-issues)

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-describe-pod.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [oc describe](/cli_reference/openshift_cli/developer-cli-commands#oc-describe)

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-review-events.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Watching cluster events](/security/container_security/security-monitoring#security-monitoring-events_security-monitoring)

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-connect-to-pod.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [oc rsh](/cli_reference/openshift_cli/developer-cli-commands#oc-rsh)
*   [Accessing running pods](/support/troubleshooting/investigating-pod-issues#accessing-running-pods_investigating-pod-issues)

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-debug-pod.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [oc debug](/cli_reference/openshift_cli/developer-cli-commands#oc-debug)
*   [Starting debug pods with root access](/support/troubleshooting/investigating-pod-issues#starting-debug-pods-with-root-access_investigating-pod-issues)

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-run-command-on-pod.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [oc exec](/cli_reference/openshift_cli/developer-cli-commands#oc-exec)
*   [Executing remote commands in containers](/nodes/containers/nodes-containers-remote-commands#nodes-containers-remote-commands-about_nodes-containers-remote-commands)