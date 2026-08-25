# Troubleshooting sidecar injection {id="ossm-troubleshooting-injection_{{ context }}"}

{{ SMProductName }} does not automatically inject proxy sidecars to pods. You must opt in to sidecar injection.

## Troubleshooting Istio sidecar injection {id="_troubleshooting_istio_sidecar_injection"}

Check to see if automatic injection is enabled in the Deployment for your application. If automatic injection for the Envoy proxy is enabled, there should be a `sidecar.istio.io/inject:"true"` annotation in the `Deployment` resource under `spec.template.metadata.annotations`.

## Troubleshooting Jaeger agent sidecar injection {id="_troubleshooting_jaeger_agent_sidecar_injection"}

Check to see if automatic injection is enabled in the Deployment for your application. If automatic injection for the Jaeger agent is enabled, there should be a `sidecar.jaegertracing.io/inject:"true"` annotation in the `Deployment` resource.