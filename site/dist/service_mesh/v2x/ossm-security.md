---
title: Security
---

# Security {#ossm-security}

If your service mesh application is constructed with a complex array of microservices, you can use {{ SMProductName }} to customize the security of the communication between those services. The infrastructure of OpenShift Container Platform along with the traffic management features of {{ SMProductShortName }} help you manage the complexity of your applications and secure microservices.

**Before you begin**

If you have a project, add your project to the [`ServiceMeshMemberRoll` resource](/service_mesh/v2x/ossm-create-mesh#ossm-member-roll-create_ossm-create-mesh).

If you don’t have a project, install the [Bookinfo sample application](/service_mesh/v2x/ossm-create-mesh#ossm-tutorial-bookinfo-overview_ossm-create-mesh) and add it to the `ServiceMeshMemberRoll` resource. The sample application helps illustrate security concepts.

## Additional resources {#additional-resources_cert-manager-operator-red-hat-openshift}

For information about how to install the cert-manager Operator for OpenShift Container Platform, see: [Installing the cert-manager Operator for Red Hat OpenShift](/security/cert_manager_operator/cert-manager-operator-install).
