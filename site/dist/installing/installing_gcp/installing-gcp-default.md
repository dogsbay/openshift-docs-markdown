---
title: Installing a cluster quickly on {{ gcp_short }}
---

# Installing a cluster quickly on {{ gcp_short }} {#installing-gcp-default}

In OpenShift Container Platform version 4.22, you can install a cluster on {{ gcp_first }} that uses the default configuration options.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing).
- You [configured a {{ gcp_short }} project](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
- If you use a firewall, you [configured it to allow the sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
- If you are installing using a [Private Service Connect (PSC) endpoint](https://cloud.google.com/vpc/docs/private-service-connect), you must configure the endpoint in the same Virtual Private Cloud (VPC) where you install the cluster, specified in the `install-config.yaml` file, as described in [Installing a cluster on {{ gcp_short }} into an existing VPC](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc).

**Additional resources**

- See [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console) for more details about accessing and understanding the OpenShift Container Platform web console.

**Additional resources**

- See [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
