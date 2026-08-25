---
title: Installing {{ kueue_name }} in a disconnected environment
---

# Installing {{ kueue_name }} in a disconnected environment {#install-disconnected}

You can install {{ kueue_name }} on a disconnected OpenShift Container Platform cluster after enabling {{ olm_first }} in your disconnected environment.

Before you can install {{ kueue_name }}, you must complete the following steps:

- Disable the default remote OperatorHub sources for OLM.
- Use a workstation with full internet access to create and push local mirrors of the OperatorHub content to a mirror registry.
- Configure OLM to install and manage Operators from local sources on the mirror registry instead of the default remote sources.

After enabling OLM in a disconnected environment, you can continue to use your unrestricted workstation to keep your local OperatorHub sources updated as newer versions of Operators are released.

For full documentation on completing these steps, see "Using Operator Lifecycle Manager in disconnected environments".

**Additional resources**

- [Installing the {{ cert_manager_operator }}](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-operator-install#installing-the-cert-manager-operator-for-red-hat-openshift)

## Additional resources {#additional-resources_install-disconnected}

- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
