{%- set _mod_docs_content_type = "CONCEPT" %}
# Retrieving PTP events with the PTP events REST API v2 {id="cnf-about-ptp-events-using-ptp-event-producer-with-o-ran-api_{{ context }}"}

Applications subscribe to PTP events by using an O-RAN v4 compatible REST API in the producer-side cloud event proxy sidecar.
The `cloud-event-proxy` sidecar container can access the same resources as the primary application container without using any of the resources of the primary application and with no significant latency.

**Figure 1. Overview of consuming PTP fast events from the PTP event producer REST API v2**

![Overview of consuming PTP fast events from the PTP event producer REST API](/images/319_OpenShift_PTP_bare-metal_OCP_nodes_0323_4.17.png)


<img src="/images/darkcircle-1.png" alt="20" width="20"> Event is generated on the cluster host
:   The `linuxptp-daemon` process in the PTP Operator-managed pod runs as a Kubernetes `DaemonSet` and manages the various `linuxptp` processes (`ptp4l`, `phc2sys`, and optionally for grandmaster clocks, `ts2phc`).
    The `linuxptp-daemon` passes the event to the UNIX domain socket.


<img src="/images/darkcircle-2.png" alt="20" width="20"> Event is passed to the cloud-event-proxy sidecar
:   The PTP plugin reads the event from the UNIX domain socket and passes it to the `cloud-event-proxy` sidecar in the PTP Operator-managed pod.
    `cloud-event-proxy` delivers the event from the Kubernetes infrastructure to Cloud-Native Network Functions (CNFs) with low latency.


<img src="/images/darkcircle-3.png" alt="20" width="20"> Event is published
:   The `cloud-event-proxy` sidecar in the PTP Operator-managed pod processes the event and publishes the event by using the PTP events REST API v2.


<img src="/images/darkcircle-4.png" alt="20" width="20"> Consumer application requests a subscription and receives the subscribed event
:   The consumer application sends an API request to the producer `cloud-event-proxy` sidecar to create a PTP events subscription.
    Once subscribed, the consumer application listens to the address specified in the resource qualifier and receives and processes the PTP events.