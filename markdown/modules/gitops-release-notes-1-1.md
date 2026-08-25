# Release notes for {{ gitops_title }} 1.1 {id="gitops-release-notes-1-1_{{ context }}"}

{{ gitops_title }} 1.1 is now available on {{ product_title }} 4.7.

## Support matrix {id="support-matrix-1-1_{{ context }}"}

Some features in this release are currently in Technology Preview. These experimental features are not intended for production use.

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

In the table below, features are marked with the following statuses:

*   **TP**: _Technology Preview_
*   **GA**: _General Availability_

Note the following scope of support on the Red Hat Customer Portal for these features:

**Support matrix**

| Feature | {{ gitops_title }} 1.1 |
| --- | --- |
| Argo CD | GA |
| Argo CD ApplicationSet | TP |
| {{ gitops_title }} Application Manager CLI (`kam`) | TP |

## New features {id="new-features-1-1_{{ context }}"}
In addition to the fixes and stability improvements, the following sections highlight what is new in {{ gitops_title }} 1.1:

*   The `ApplicationSet` feature is now added (Technology Preview). The `ApplicationSet` feature enables both automation and greater flexibility when managing Argo CD applications across a large number of clusters and within monorepos. It also makes self-service usage possible on multitenant Kubernetes clusters.
*   Argo CD is now integrated with cluster logging stack and with the {{ product_title }} Monitoring and Alerting features.
*   Argo CD auth is now integrated with {{ product_title }}.
*   Argo CD applications controller now supports horizontal scaling.
*   Argo CD Redis servers now support high availability (HA).

## Fixed issues {id="fixed-issues-1-1_{{ context }}"}
The following issues were resolved in the current release:

*   Previously, {{ gitops_title }} did not work as expected in a proxy server setup with active global proxy settings. This issue is fixed and now Argo CD is configured by the {{ gitops_title }} Operator using fully qualified domain names (FQDN) for the pods to enable communication between components. [GITOPS-703](https://issues.redhat.com/browse/GITOPS-703)
*   The {{ gitops_title }} backend relies on the `?ref=` query parameter in the {{ gitops_title }} URL to make API calls. Previously, this parameter was not read from the URL, causing the backend to always consider the default reference. This issue is fixed and the {{ gitops_title }} backend now extracts the reference query parameter from the {{ gitops_title }} URL and only uses the default reference when there is no input reference provided. [GITOPS-817](https://issues.redhat.com/browse/GITOPS-817)
*   Previously, the {{ gitops_title }} backend failed to find the valid GitLab repository. This was because the {{ gitops_title }} backend checked for `main` as the branch reference, instead of `master` in the GitLab repository. This issue is fixed now. [GITOPS-768](https://issues.redhat.com/browse/GITOPS-768)
*   The **Environments** page in the **Developer** perspective of the {{ product_title }} web console now shows the list of applications and the number of environments. This page also displays an Argo CD link that directs you to the Argo CD **Applications** page that lists all the applications. The Argo CD **Applications** page has **LABELS** (for example, `app.kubernetes.io/name=appName`) that help you filter only the applications of your choice. [GITOPS-544](https://issues.redhat.com/browse/GITOPS-544)

## Known issues {id="known-issues-1-1_{{ context }}"}
These are the known issues in {{ gitops_title }} 1.1:

*   {{ gitops_title }} does not support Helm v2 and ksonnet.
*   The Red Hat SSO (RH SSO) Operator is not supported in disconnected clusters. As a result, the {{ gitops_title }} Operator and RH SSO integration is not supported in disconnected clusters.
*   When you delete an Argo CD application from the {{ product_title }} web console, the Argo CD application gets deleted in the user interface, but the deployments are still present in the cluster. As a workaround, delete the Argo CD application from the Argo CD console. [GITOPS-830](https://issues.redhat.com/browse/GITOPS-830)

## Breaking Change {id="breaking-change-1-1_{{ context }}"}
### Upgrading from {{ gitops_title }} v1.0.1 {id="_upgrading_from_gitops_title_v101"}

When you upgrade from {{ gitops_title }} `v1.0.1` to `v1.1`, the {{ gitops_title }} Operator renames the default Argo CD instance created in the `openshift-gitops` namespace from `argocd-cluster` to `openshift-gitops`.

This is a breaking change and needs the following steps to be performed manually, before the upgrade:

1.  Go to the {{ product_title }} web console and copy the content of the `argocd-cm.yml` config map file in the `openshift-gitops` namespace to a local file. The content may look like the following example:
    ```yaml title="Example argocd config map YAML"
    kind: ConfigMap
    apiVersion: v1
    metadata:
    selfLink: /api/v1/namespaces/openshift-gitops/configmaps/argocd-cm
    resourceVersion: '112532'
    name: argocd-cm
    uid: f5226fbc-883d-47db-8b53-b5e363f007af
    creationTimestamp: '2021-04-16T19:24:08Z'
    managedFields:
    ...
    namespace: openshift-gitops
    labels:
      app.kubernetes.io/managed-by: argocd-cluster
      app.kubernetes.io/name: argocd-cm
      app.kubernetes.io/part-of: argocd
    data: "" (1)
    admin.enabled: 'true'
    statusbadge.enabled: 'false'
    resource.exclusions: |
      - apiGroups:
        - tekton.dev
        clusters:
        - '*'
        kinds:
        - TaskRun
        - PipelineRun
    ga.trackingid: ''
    repositories: |
      - type: git
        url: https://github.com/user-name/argocd-example-apps
    ga.anonymizeusers: 'false'
    help.chatUrl: ''
    url: >-
      https://argocd-cluster-server-openshift-gitops.apps.dev-svc-4.7-041614.devcluster.openshift.com   "" (2)
    help.chatText: ''
    kustomize.buildOptions: ''
    resource.inclusions: ''
    repository.credentials: ''
    users.anonymous.enabled: 'false'
    configManagementPlugins: ''
    application.instanceLabelKey: ''
    ```
    1.  Restore only the `data` section of the content in the `argocd-cm.yml` config map file manually.
    1.  Replace the URL value in the config map entry with the new instance name `openshift-gitops`.
1.  Delete the default `argocd-cluster` instance.
1.  Edit the new `argocd-cm.yml` config map file to restore the entire `data` section manually.
1.  Replace the URL value in the config map entry with the new instance name `openshift-gitops`. For example, in the preceding example, replace the URL value with the following URL value:
    ```yaml
    url: >-
      https://openshift-gitops-server-openshift-gitops.apps.dev-svc-4.7-041614.devcluster.openshift.com
    ```
1.  Login to the Argo CD cluster and verify that the previous configurations are present.