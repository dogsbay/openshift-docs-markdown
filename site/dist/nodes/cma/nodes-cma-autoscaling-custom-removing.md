---
title: Removing the Custom Metrics Autoscaler Operator
---

# Removing the Custom Metrics Autoscaler Operator {#nodes-cma-autoscaling-custom-removing}

You can remove the custom metrics autoscaler from your OpenShift Container Platform cluster. After removing the Custom Metrics Autoscaler Operator, remove other components associated with the Operator to avoid potential issues.

> [!NOTE]
> Delete the `KedaController` custom resource (CR) first. If you do not delete the `KedaController` CR, OpenShift Container Platform can hang when you delete the `openshift-keda` project. If you delete the Custom Metrics Autoscaler Operator before deleting the CR, you are not able to delete the CR.
