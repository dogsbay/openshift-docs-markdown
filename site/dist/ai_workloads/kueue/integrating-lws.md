---
title: Integrating the {{ lws_operator }}
---

# Integrating the {{ lws_operator }} {#integrating-lws}

You can integrate the {{ lws_operator }} with {{ kueue_name }} so you can leverage the scheduling and resource management functionality when running LeaderWorkerSets.

The {{ lws_operator }} allows you to manage multi-node AI/ML inference deployments efficiently. {{ kueue_name }} provides scheduling and resource management capabilities for these deployments. You can configure {{ lws_operator }} to leverage these capabilities when running the `LeaderWorkerSet` API for deploying a group of pods as a unit of replication.

 **Additional resources**

- [About the {{ lws_operator }}](/ai_workloads/leader_worker_set/index#lws-about_lws-about)
- [LeaderWorkerSet API (Kubernetes documentation)](https://lws.sigs.k8s.io/docs/reference/leaderworkerset.v1/)
- [Installing the {{ cert_manager_operator }} by using the web console](/security/cert_manager_operator/cert-manager-operator-install#installing-the-cert-manager-operator-for-red-hat-openshift)

 **Additional resources**

- [Configuring a cluster queue](/ai_workloads/kueue/configuring-quotas#configuring-clusterqueues_configuring-quotas)
- [Configuring a resource flavor](/ai_workloads/kueue/configuring-quotas#configuring-resourceflavors_configuring-quotas)
- [Configuring a local queue](/ai_workloads/kueue/configuring-quotas#configuring-localqueues_configuring-quotas)
