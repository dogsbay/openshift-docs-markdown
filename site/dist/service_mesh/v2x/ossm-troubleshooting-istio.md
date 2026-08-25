---
title: Troubleshooting your service mesh
---

# Troubleshooting your service mesh {#ossm-troubleshooting}

This section describes how to identify and resolve common problems in {{ SMProductName }}. Use the following sections to help troubleshoot and debug problems when deploying {{ SMProductName }} on OpenShift Container Platform.

## Troubleshooting Operator installation {#_troubleshooting_operator_installation}

In addition to the information in this section, be sure to review the following topics:

- [What are Operators?](/operators/understanding/olm-what-operators-are)
- [Operator Lifecycle Management concepts](/operators/understanding/olm/olm-understanding-olm).
- [OpenShift Operator troubleshooting section](/support/troubleshooting/troubleshooting-operator-issues).
- [OpenShift installation troubleshooting section](/support/troubleshooting/troubleshooting-installations).

## Troubleshooting the control plane {#_troubleshooting_the_control_plane}

The Service Mesh *control plane* is composed of Istiod, which consolidates several previous control plane components (Citadel, Galley, Pilot) into a single binary. Deploying the `ServiceMeshControlPlane` also creates the other components that make up {{ SMProductName }} as described in the [architecture](/service_mesh/v2x/ossm-architecture#ossm-architecture_ossm-architecture) topic.

## Troubleshooting the data plane {#_troubleshooting_the_data_plane}

The *data plane* is a set of intelligent proxies that intercept and control all inbound and outbound network communications between services in the service mesh.

{{ SMProductName }} relies on a proxy sidecar within the application’s pod to provide service mesh capabilities to the application.

For more information about sidecar injection, see [Enabling automatic injection](/service_mesh/v2x/prepare-to-deploy-applications-ossm#ossm-automatic-sidecar-injection_deploying-applications-ossm)

For more information about troubleshooting pod issues, see [Investigating pod issues](/support/troubleshooting/investigating-pod-issues)

For prompt support, supply diagnostic information for both OpenShift Container Platform and {{ SMProductName }}.
