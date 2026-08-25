---
title: Applying autoscaling to an OpenShift Container Platform cluster
---

# Applying autoscaling to an OpenShift Container Platform cluster {#applying-autoscaling}

Apply autoscaling to an OpenShift Container Platform cluster to automatically adjust the size of the cluster to meet deployment needs. You can deploy a cluster autoscaler and then deploy machine autoscalers for each machine type in your cluster. After you configure the cluster autoscaler, you must configure at least one machine autoscaler.

> [!IMPORTANT]
> You can configure the cluster autoscaler only in clusters where the Machine API Operator is operational.

## Additional resources {#_additional_resources}

- [Including pod priority in pod scheduling decisions in OpenShift Container Platform](/openshift-docs-markdown/nodes/pods/nodes-pods-priority#nodes-pods-priority)
