---
title: Enabling sidecar injection
---

# Enabling sidecar injection {#deploying-applications-ossm}

After adding the namespaces that contain your services to your mesh, the next step is to enable automatic sidecar injection in the Deployment resource for your application. You must enable automatic sidecar injection for each deployment.

If you have installed the Bookinfo sample application, the application was deployed and the sidecars were injected as part of the installation procedure. If you are using your own project and service, deploy your applications on OpenShift Container Platform.

For more information, see the OpenShift Container Platform documentation, [Understanding deployments](/applications/deployments/what-deployments-are).

> [!NOTE]
> Traffic started by Init Containers, specialized containers that run before the application containers in a pod, cannot travel outside of the service mesh by default. Any action Init Containers perform that requires establishing a network traffic connection outside of the mesh fails.
>
> For more information about connecting Init Containers to a service, see the Red Hat Knowledgebase solution [initContainer in CrashLoopBackOff on pod with Service Mesh sidecar injected](https://access.redhat.com/solutions/6653601)

## Prerequisites {#_prerequisites}

- [Services deployed to the mesh](/service_mesh/v2x/ossm-create-mesh#ossm-tutorial-bookinfo-overview_ossm-create-mesh), for example the Bookinfo sample application.
- A Deployment resource file.

For information about enabling Envoy access logs, see the [Troubleshooting](/service_mesh/v2x/ossm-troubleshooting-istio#enabling-envoy-access-logs) section.

For information about viewing Envoy logs, see [Viewing logs in the Kiali console](/service_mesh/v2x/ossm-observability#ossm-viewing-logs_observability).

## Next steps {#_next_steps}

Configure {{ SMProductName }} features for your environment.

- [Security](/service_mesh/v2x/ossm-security#ossm-security)
- [Traffic management](/service_mesh/v2x/ossm-traffic-manage#ossm-routing-traffic)
- [Metrics, logs, and traces](/service_mesh/v2x/ossm-observability#ossm-observability)
