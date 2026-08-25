---
title: Installing the custom metrics autoscaler
---

# Installing the custom metrics autoscaler {#nodes-cma-autoscaling-custom-install}

You can use the OpenShift Container Platform web console to install the Custom Metrics Autoscaler Operator.

The installation creates the following five CRDs:

- `ClusterTriggerAuthentication`
- `KedaController`
- `ScaledJob`
- `ScaledObject`
- `TriggerAuthentication`

The installation process also creates the `KedaController` custom resource (CR). You can modify the default `KedaController` CR, if needed. For more information, see "Editing the Keda Controller CR".

> [!NOTE]
> If you are installing a Custom Metrics Autoscaler Operator version lower than 2.17.2, you must manually create the Keda Controller CR. You can use the procedure described in "Editing the Keda Controller CR" to create the CR.
