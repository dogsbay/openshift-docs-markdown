---
title: Installing the Operators
---

# Installing the Operators {#installing-ossm}

To install {{ SMProductName }}, first install the {{ SMProductName }} Operator and any optional Operators on OpenShift Container Platform. Then create a `ServiceMeshControlPlane` resource to deploy the control plane.

> [!NOTE]
> This basic installation is configured based on the default OpenShift settings and is not designed for production use.  Use this default installation to verify your installation, and then configure your service mesh for your specific environment.

**Prerequisites**

- Read the [Preparing to install {{ SMProductName }}](/openshift-docs-markdown/service_mesh/v2x/preparing-ossm-installation#preparing-ossm-installation) process.
- An account with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.

The following steps show how to install a basic instance of {{ SMProductName }} on OpenShift Container Platform.

> [!IMPORTANT]
> Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} are deprecated and will be removed in a future release. Red Hat will provide bug fixes and support for these features during the current release lifecycle, but this feature will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

## Next steps {#_next_steps}

- The {{ SMProductName }} Operator does not create the {{ SMProductShortName }} custom resource definitions (CRDs) until you deploy a {{ SMProductShortName }} control plane. You can use the `ServiceMeshControlPlane` resource to install and configure the {{ SMProductShortName }} components. For more information, see [Creating the ServiceMeshControlPlane](/openshift-docs-markdown/service_mesh/v2x/ossm-create-smcp#ossm-create-smcp).
