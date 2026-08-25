---
title: Installing the {{ cert_manager_operator }}
---

# Installing the {{ cert_manager_operator }} {#cert-manager-operator-install}

The {{ cert_manager_operator }} is not installed in OpenShift Container Platform by default. You can install the {{ cert_manager_operator }} by using the web console and command-line interface (CLI).

The {{ cert_manager_operator }} sets the `features.operators.openshift.io/token-auth-aws`, `features.operators.openshift.io/token-auth-azure`, and `features.operators.openshift.io/token-auth-gcp` annotations in the `ClusterServiceVersion` custom resource of the Operator. The OpenShift Container Platform web console requires the credential details when these annotations are set. Currently, the Operator does not use the values collected by the OpenShift web console and you can provide any value when asked for the input. For example, when installing on the managed OpenShift Container Platform cluster, the `identity-provider-arn` is asked and any value can be provided to proceed.

> [!IMPORTANT]
> The {{ cert_manager_operator }} version 1.15 or later supports the `AllNamespaces`, `SingleNamespace`, and `OwnNamespace` installation modes. Earlier versions, such as 1.14, support only the `SingleNamespace` and `OwnNamespace` installation modes.

**Additional resources**

- [Supported {{ cert_manager_operator }} versions](/openshift-docs-markdown/security/cert_manager_operator/index#cert-manager-operator-supported-versions_cert-manager-operator-about)

## Additional resources {#cert-manager-operator-install_additional-resources}

- [Adding Operators to a cluster](/openshift-docs-markdown/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
- [Updating installed Operators](/openshift-docs-markdown/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
