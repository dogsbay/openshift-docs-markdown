---
title: Preparing to install Service Mesh
---

# Preparing to install Service Mesh {#preparing-ossm-installation}

Before you can install {{ SMProductName }}, you must subscribe to OpenShift Container Platform and install OpenShift Container Platform in a supported configuration.

## Prerequisites {#_prerequisites}

- Maintain an active OpenShift Container Platform subscription on your Red Hat account. If you do not have a subscription, contact your sales representative for more information.
- Review the [OpenShift Container Platform 4.22 overview](/openshift-docs-markdown/architecture/architecture-installation#installation-overview_architecture-installation).
- Install OpenShift Container Platform 4.22. If you are installing {{ SMProductName }} on a [restricted network](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing-supported-installation-methods-reference_installing-preparing), follow the instructions for your chosen OpenShift Container Platform infrastructure.

  - [Install OpenShift Container Platform 4.22 on AWS](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-default#installing-aws-default)
  - [Install OpenShift Container Platform 4.22 on AWS with user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)
  - [Install OpenShift Container Platform 4.22 on bare metal](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
  - [Install OpenShift Container Platform 4.22 on vSphere](/openshift-docs-markdown/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)
  - [Install OpenShift Container Platform 4.22 on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/openshift-docs-markdown/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)
  - [Install OpenShift Container Platform 4.22 on {{ ibm_power_name }}](/openshift-docs-markdown/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power)
- Install the version of the OpenShift Container Platform command-line utility (the `oc` client tool) that matches your OpenShift Container Platform version and add it to your path.

  - If you are using OpenShift Container Platform 4.22, see [About the OpenShift CLI](/openshift-docs-markdown/cli_reference/openshift_cli/getting-started-cli#cli-about-cli_cli-developer-commands).

For additional information about {{ SMProductName }} lifecycle and supported platforms, refer to the [Support Policy](https://access.redhat.com/support/policy/updates/openshift#ossm).

## Next steps {#_next_steps}

- [Install {{ SMProductName }}](/openshift-docs-markdown/service_mesh/v2x/installing-ossm#installing-ossm) in your OpenShift Container Platform environment.
