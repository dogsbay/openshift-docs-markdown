---
title: Installing a cluster on {{ aws_short }} with customizations
---

# Installing a cluster on {{ aws_short }} with customizations {#installing-aws-customizations}

In OpenShift Container Platform version 4.22, you can install a cluster on {{ aws_first }} by using installer-provisioned infrastructure with customizations, including network configuration options.

In each, you modify parameters in the `install-config.yaml` file before you install the cluster. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

You must set most of the network configuration parameters during installation, and you can modify only `kubeProxy` configuration parameters in a running cluster.

> [!NOTE]
> The scope of the OpenShift Container Platform installation configurations is intentionally narrow. It is designed for simplicity and ensured success. You can complete many more OpenShift Container Platform configuration tasks after an installation completes.

**Additional resources**

- [Installation configuration parameters for {{ aws_short }}](/openshift-docs-markdown/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Installation configuration parameters for {{ aws_short }}](/openshift-docs-markdown/installing/installing_aws/installation-config-parameters-aws#installation-config-parameters-aws)

**Additional resources**

- [Configuring Ingress cluster traffic on {{ aws_short }} using a Network Load Balancer](/openshift-docs-markdown/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-aws#nw-configuring-ingress-cluster-traffic-aws-network-load-balancer_configuring-ingress-cluster-traffic-aws)

**Additional resources**

- [Understanding Windows container workloads](/openshift-docs-markdown/windows_containers/understanding-windows-container-workloads#understanding-windows-container-workloads)

## Additional resources {#additional-resources_installing-aws-customizations}

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)
- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Removing cloud provider credentials](/openshift-docs-markdown/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)
