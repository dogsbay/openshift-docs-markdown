{%- set _mod_docs_content_type = "CONCEPT" %}
# Session affinity {id="nw-ovn-kubernetes-session-affinity_{{ context }}"}

You can use _session affinity_ if you want to ensure that each time you connect to a &lt;service_VIP>:&lt;Port>, the traffic is always load balanced to the same back end. For more information, including how to set session affinity based on a client’s IP address, see "Session affinity in Kubernetes". {._abstract}

## Stickiness timeout for session affinity {id="nw-ovn-kubernetes-session-affinity-stickyness-timeout_{{ context }}"}

The OVN-Kubernetes network plugin for {{ product_title }} calculates the stickiness timeout for a session from a client based on the last packet.

For example, if you run a `curl` command 10 times, the sticky session timer starts from the tenth packet not the first.

As a result, if the client is continuously contacting the service, then the session never times out. The timeout starts when the service has not received a packet for the amount of time set by the `timeoutSeconds` parameter. For more information about `timeoutSeconds`, see "Session stickiness timeout in Kubernetes".

**Additional resources**
{._additional-resources}

*   [Session affinity in Kubernetes](https://kubernetes.io/docs/reference/networking/virtual-ips/#session-affinity)
*   [Session stickiness timeout in Kubernetes](https://kubernetes.io/docs/reference/networking/virtual-ips/#session-stickiness-timeout)