---
title: Ingress Operator in OpenShift Container Platform
---

# Ingress Operator in OpenShift Container Platform {#configuring-ingress}

The Ingress Operator implements the `IngressController` API and is the component responsible for enabling external access to OpenShift Container Platform cluster services.

### Ingress Controller TLS security profiles {#configuring-ingress-controller-tls}

TLS security profiles provide a way for servers to regulate which ciphers a connecting client can use when connecting to the server.

## Configuring the Ingress Controller {#configuring-ingress-controller}

**Additional resources**

- [Installing the custom metrics autoscaler](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom-install#nodes-cma-autoscaling-custom-install_nodes-cma-autoscaling-custom-install)
- [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
- [Understanding custom metrics autoscaler trigger authentications](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth)
- [Understanding custom metrics autoscaler triggers](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom-trigger#nodes-cma-autoscaling-custom-prometheus)
- [Understanding how to add custom metrics autoscalers](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom-adding#nodes-cma-autoscaling-custom-adding)

**Additional resources**

- [Capturing Original Client IP from the X-Forwarded-For Header in Ingress and Application Logs](https://access.redhat.com/solutions/7096271)

**Additional resources**

- [Configuring Ingress access logging](/openshift-docs-markdown/networking/networking_operators/ingress-operator#nw-configure-ingress-access-logging_configuring-ingress)

## Additional resources {#_additional_resources}

- [Configuring a custom PKI](/openshift-docs-markdown/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
