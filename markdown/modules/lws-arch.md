{%- set _mod_docs_content_type = "CONCEPT" %}
# LeaderWorkerSet architecture {id="lws-arch_{{ context }}"}

Review the LeaderWorkerSet architecture to learn how the `LeaderWorkerSet` API organizes groups of pods into a single unit, with one pod as the leader and the rest as the workers, to coordinate distributed workloads. {._abstract}

The following diagram describes the LeaderWorkerSet architecture:

**Figure 1. Leader worker set architecture**

![Leader worker set architecture](/images/587_OpenShift_lws_0925.png)

The `LeaderWorkerSet` API uses a leader stateful set to manage the deployment and lifecycle of the groups of pods. For each replica defined, a leader-worker group is created.

Each leader-worker group contains a leader pod and a worker stateful set. The worker stateful set is owned by the leader pod and manages the set of worker pods associated with that leader pod. The specified size defines the total number of pods in each leader-worker group, with the leader pod included in that number.