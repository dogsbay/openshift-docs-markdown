---
title: Deleting Operators from a cluster
---

# Deleting Operators from a cluster {#olm-deleting-operators-from-a-cluster}

You can delete Operators that were previously installed with Operator Lifecycle Manager (OLM) on your OpenShift Container Platform cluster.

> [!IMPORTANT]
> You must successfully and completely uninstall an Operator prior to attempting to reinstall the same Operator. Failure to fully uninstall the Operator properly can leave resources, such as a project or namespace, stuck in a "Terminating" state and cause "error resolving resource" messages to be observed when trying to reinstall the Operator.
>
> For more information, see "Reinstalling Operators after failed uninstallation".

**Additional resources**

- [Reinstalling Operators after failed uninstallation](/openshift-docs-markdown/operators/admin/olm-troubleshooting-operator-issues#olm-reinstall_olm-troubleshooting-operator-issues)
