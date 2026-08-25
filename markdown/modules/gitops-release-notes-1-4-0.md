# Release notes for {{ gitops_title }} 1.4.0 {id="gitops-release-notes-1-4-0_{{ context }}"}

{{ gitops_title }} 1.4.0 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10.

## New features {id="new-features-1-4-0_{{ context }}"}

The current release adds the following improvements.

*   This enhancement upgrades the {{ gitops_title }} Application Manager CLI (`kam`) to version **0.0.41**. [GITOPS-1669](https://issues.redhat.com/browse/GITOPS-1669)
*   This enhancement upgrades Argo CD to version **2.2.2**. [GITOPS-1532](https://issues.redhat.com/browse/GITOPS-1532)
*   This enhancement upgrades Helm to version **3.7.1**. [GITOPS-1530](https://issues.redhat.com/browse/GITOPS-1530)
*   This enhancement adds the health status of the `DeploymentConfig`, `Route`, and `OLM Operator` items to the Argo CD Dashboard and {{ product_title }} web console. This information helps you monitor the overall health status of your application. [GITOPS-655](https://issues.redhat.com/browse/GITOPS-655), [GITOPS-915](https://issues.redhat.com/browse/GITOPS-915), [GITOPS-916](https://issues.redhat.com/browse/GITOPS-916), [GITOPS-1110](https://issues.redhat.com/browse/GITOPS-1110)
*   With this update, you can to specify the number of desired replicas for the `argocd-server` and `argocd-repo-server` components by setting the `.spec.server.replicas` and `.spec.repo.replicas` attributes in the Argo CD custom resource, respectively. If you configure the horizontal pod autoscaler (HPA) for the `argocd-server` components, it takes precedence over the Argo CD custom resource attributes. [GITOPS-1245](https://issues.redhat.com/browse/GITOPS-1245)
*   As an administrative user, when you give Argo CD access to a namespace by using the `argocd.argoproj.io/managed-by` label, it assumes namespace-admin privileges. These privileges are an issue for administrators who provide namespaces to non-administrators, such as development teams, because the privileges enable non-administrators to modify objects such as network policies.

    With this update, administrators can configure a common cluster role for all the managed namespaces. In role bindings for the Argo CD application controller, the Operator refers to the `CONTROLLER_CLUSTER_ROLE` environment variable. In role bindings for the Argo CD server, the Operator refers to the `SERVER_CLUSTER_ROLE` environment variable. If these environment variables contain custom roles, the Operator does not create the default admin role. Instead, it uses the existing custom role for all managed namespaces. [GITOPS-1290](https://issues.redhat.com/browse/GITOPS-1290)
*   With this update, the **Environments** page in the {{ product_title }} **Developer** perspective displays a broken heart icon to indicate degraded resources, excluding ones whose status is `Progressing`, `Missing`, and `Unknown`. The console displays a yellow yield sign icon to indicate out-of-sync resources. [GITOPS-1307](https://issues.redhat.com/browse/GITOPS-1307)

## Fixed issues {id="fixed-issues-1-4-0_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, when the Route to the {{ gitops_title }} Application Manager CLI (`kam`) was accessed without specifying a path in the URL, a default page without any helpful information was displayed to the user. This update fixes the issue so that the default page displays download links for the `kam` CLI. [GITOPS-923](https://issues.redhat.com/browse/GITOPS-923)
*   Before this update, setting a resource quota in the namespace of the Argo CD custom resource might cause the setup of the Red Hat SSO (RH SSO) instance to fail. This update fixes this issue by setting a minimum resource request for the RH SSO deployment pods. [GITOPS-1297](https://issues.redhat.com/browse/GITOPS-1297)
*   Before this update, if you changed the log level for the `argocd-repo-server` workload, the Operator did not reconcile this setting. The workaround was to delete the deployment resource so that the Operator recreated it with the new log level. With this update, the log level is correctly reconciled for existing `argocd-repo-server` workloads. [GITOPS-1387](https://issues.redhat.com/browse/GITOPS-1387)
*   Before this update, if the Operator managed an Argo CD instance that lacked the `.data` field in the `argocd-secret` Secret, the Operator on that instance crashed. This update fixes the issue so that the Operator does not crash when the `.data` field is missing. Instead, the secret regenerates and the `gitops-operator-controller-manager` resource is redeployed. [GITOPS-1402](https://issues.redhat.com/browse/GITOPS-1402)
*   Before this update, the `gitopsservice` service was annotated as an internal object. This update removes the annotation so you can update or delete the default Argo CD instance and run GitOps workloads on infrastructure nodes by using the UI. [GITOPS-1429](https://issues.redhat.com/browse/GITOPS-1429)

## Known issues {id="known-issues-1-4-0_{{ context }}"}

These are the known issues in the current release:

*   If you migrate from the Dex authentication provider to the Keycloak provider, you might experience login issues with Keycloak.

    To prevent this issue, when migrating, uninstall Dex by removing the `.spec.dex` section from the Argo CD custom resource. Allow a few minutes for Dex to uninstall completely. Then, install Keycloak by adding `.spec.sso.provider: keycloak` to the Argo CD custom resource.

    As a workaround, uninstall Keycloak by removing `.spec.sso.provider: keycloak`. Then, re-install it. [GITOPS-1450](https://issues.redhat.com/browse/GITOPS-1450), [GITOPS-1331](https://issues.redhat.com/browse/GITOPS-1331)