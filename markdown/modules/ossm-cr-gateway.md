# Istio gateway configuration {id="ossm-cr-gateway_{{ context }}"}

Here is an example that illustrates the Istio gateway parameters for the `ServiceMeshControlPlane` and a description of the available parameters with appropriate values.

```yaml title="Example gateway parameters"
  gateways:
    egress:
      enabled: true
      runtime:
        deployment:
          autoScaling:
            enabled: true
            maxReplicas: 5
            minReplicas: 1
    enabled: true
    ingress:
      enabled: true
      runtime:
        deployment:
          autoScaling:
            enabled: true
            maxReplicas: 5
            minReplicas: 1
```

**Istio Gateway parameters**

| Parameter | Description | Values | Default value |
| --- | --- | --- | --- |
| `gateways.egress.runtime.deployment.autoScaling.enabled` | This parameter enables/disables autoscaling. | `true`/`false` | `true` |
| `gateways.egress.runtime.deployment.autoScaling.minReplicas` | The minimum number of pods to deploy for the egress gateway based on the `autoscaleEnabled` setting. | A valid number of allocatable pods based on your environment’s configuration. | `1` |
| `gateways.egress.runtime.deployment.autoScaling.maxReplicas` | The maximum number of pods to deploy for the egress gateway based on the `autoscaleEnabled` setting. | A valid number of allocatable pods based on your environment’s configuration. | `5` |
| `gateways.ingress.runtime.deployment.autoScaling.enabled` | This parameter enables/disables autoscaling. | `true`/`false` | `true` |
| `gateways.ingress.runtime.deployment.autoScaling.minReplicas` | The minimum number of pods to deploy for the ingress gateway based on the `autoscaleEnabled` setting. | A valid number of allocatable pods based on your environment’s configuration. | `1` |
| `gateways.ingress.runtime.deployment.autoScaling.maxReplicas` | The maximum number of pods to deploy for the ingress gateway based on the `autoscaleEnabled` setting. | A valid number of allocatable pods based on your environment’s configuration. | `5` |