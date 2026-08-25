# Release notes for {{ gitops_title }} 1.5.0 {id="gitops-release-notes-1-5-0_{{ context }}"}

{{ gitops_title }} 1.5.0 is now available on {{ product_title }} 4.8, 4.9, 4.10, and 4.11. {._abstract}

## New features {id="new-features-1-5-0_{{ context }}"}

The current release adds the following improvements:

*   This enhancement upgrades Argo CD to version **2.3.3**. [GITOPS-1708](https://issues.redhat.com/browse/GITOPS-1708)
*   This enhancement upgrades Dex to version **2.30.3**. [GITOPS-1850](https://issues.redhat.com/browse/GITOPS-1850)
*   This enhancement upgrades Helm to version **3.8.0**. [GITOPS-1709](https://issues.redhat.com/browse/GITOPS-1709)
*   This enhancement upgrades Kustomize to version **4.4.1**. [GITOPS-1710](https://issues.redhat.com/browse/GITOPS-1710)
*   This enhancement upgrades Application Set to version **0.4.1**.
*   With this update, a new channel by the name **latest** has been added that provides the latest release of the {{ gitops_title }}. For GitOps v1.5.0, the Operator is pushed to **gitops-1.5**, **latest** channel, and the existing **stable** channel. From GitOps v1.6 all the latest releases will be pushed only to the **latest** channel and not the **stable** channel. [GITOPS-1791](https://issues.redhat.com/browse/GITOPS-1791)
*   With this update, the new CSV adds the `olm.skipRange: '>=1.0.0 <1.5.0'` annotation. As a result, all the previous release versions will be skipped. The Operator upgrades to v1.5.0 directly. [GITOPS-1787](https://issues.redhat.com/browse/GITOPS-1787)
*   With this update, the Operator updates the Red Hat Single Sign-On (RH-SSO) to version v7.5.1 including the following enhancements:
    *   You can log in to Argo CD using the OpenShift credentials including the `kube:admin` credential.
    *   The RH-SSO supports and configures Argo CD instances for Role-based Access Control (RBAC) using OpenShift groups.
    *   The RH-SSO honors the `HTTP_Proxy` environment variables. You can use the RH-SSO as an SSO for Argo CD running behind a proxy. 

        [GITOPS-1330](https://issues.redhat.com/browse/GITOPS-1330)
*   With this update, a new `.host` URL field is added to the `.status` field of the Argo CD operand. When a route or ingress is enabled with the priority given to route, then the new URL field displays the route. If no URL is provided from the route or ingress, the `.host` field is not displayed.

    When the route or ingress is configured, but the corresponding controller is not set up properly and is not in the `Ready` state or does not propagate its URL, the value of the `.status.host` field in the operand indicates as `Pending` instead of displaying the URL. This affects the overall status of the operand by making it `Pending` instead of `Available`. [GITOPS-654](https://issues.redhat.com/browse/GITOPS-654)

## Fixed issues {id="fixed-issues-1-5-0_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, RBAC rules specific to **AppProjects** would not allow the use of commas for the subject field of the role, thus preventing bindings to the LDAP account. This update fixes the issue and you can now specify complex role bindings in **AppProject** specific RBAC rules. [GITOPS-1771](https://issues.redhat.com/browse/GITOPS-1771)
*   Before this update, when a `DeploymentConfig` resource is scaled to `0`, Argo CD displayed it in a **progressing** state with a health status message as **"replication controller is waiting for pods to run"**. This update fixes the edge case and the health check now reports the correct health status of the `DeploymentConfig` resource. [GITOPS-1738](https://issues.redhat.com/browse/GITOPS-1738)
*   Before this update, the TLS certificate in the `argocd-tls-certs-cm` configuration map was deleted by the {{ gitops_title }} unless the certificate was configured in the `ArgoCD` CR specification `tls.initialCerts` field. This issue is fixed now. [GITOPS-1725](https://issues.redhat.com/browse/GITOPS-1725)
*   Before this update, while creating a namespace with the `managed-by` label it created a lot of `RoleBinding` resources on the new namespace. This update fixes the issue and now {{ gitops_title }} removes the irrelevant `Role` and `RoleBinding` resources created by the previous versions. [GITOPS-1550](https://issues.redhat.com/browse/GITOPS-1550)
*   Before this update, the TLS certificate of the route in pass-through mode did not have a CA name.  As a result, Firefox 94 and later failed to connect to Argo CD UI with error code **SEC_ERROR_BAD_DER**. This update fixes the issue. You must delete the `<openshift-gitops-ca>` secrets and let it recreate. Then, you must delete the `<openshift-gitops-tls>` secrets. After the {{ gitops_title }} recreates it, the Argo CD UI is accessible by Firefox again. [GITOPS-1548](https://issues.redhat.com/browse/GITOPS-1548)

## Known issues {id="known-issues-1-5-0_{{ context }}"}

*   Argo CD `.status.host` field is not updated when an `Ingress` resource is in use instead of a `Route` resource on OpenShift clusters. [GITOPS-1920](https://issues.redhat.com/browse/GITOPS-1920)