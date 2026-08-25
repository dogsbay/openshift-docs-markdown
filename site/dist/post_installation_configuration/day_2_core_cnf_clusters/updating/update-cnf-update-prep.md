---
title: Configuring application pods before updating your OpenShift Container Platform cluster
---

# Configuring application pods before updating your OpenShift Container Platform cluster {#update-cnf-update-prep}

Configure application pods to ensure workload availability during OpenShift Container Platform updates. For example, use deployment strategies, pod disruption budgets, anti-affinity rules, and health probes to maintain high availability and prevent service disruption. In the telecommunications industry, most containerized network function (CNF) vendors follow the guidance in Red Hat best practices for Kubernetes to ensure that the cluster can schedule pods properly during an upgrade.

> [!IMPORTANT]
> Always deploy pods in groups by using `Deployment` resources. `Deployment` resources spread the workload across all of the available pods ensuring there is no single point of failure. When a pod that is managed by a `Deployment` resource is deleted, a new pod takes its place automatically.

**Additional resources**

- [Red Hat best practices for Kubernetes](https://redhat-best-practices-for-k8s.github.io/guide/)

**Additional resources**

- [Specifying the number of pods that must be up with pod disruption budgets](/post_installation_configuration/cluster-tasks#nodes-pods-pod-disruption-configuring_post-install-cluster-tasks)
- [Configuring an OpenShift Container Platform cluster for pods](/nodes/pods/nodes-pods-configuring#nodes-pods-pod-disruption-configuring_nodes-pods-configuring)
- [Pod preemption and other scheduler settings](/nodes/pods/nodes-pods-priority#priority-preemption-other_nodes-pods-priority)

**Additional resources**

- [Configuring a pod affinity rule](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity-configuring_nodes-scheduler-pod-affinity)

**Additional resources**

- [Understanding health checks](/applications/application-health#application-health-about_application-health)
