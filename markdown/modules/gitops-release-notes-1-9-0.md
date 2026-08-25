{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ gitops_title }} 1.9.0 {id="gitops-release-notes-1-9-0_{{ context }}"}

{{ gitops_title }} 1.9.0 is now available on {{ product_title }} 4.12 and 4.13.

## Errata updates {id="errata-updates-1-9-0_{{ context }}"}

### RHSA-2023:112944 - {{ gitops_title }} 1.9.0 security update advisory {id="_rhsa-2023112944_-_gitops_title_190_security_update_advisory"}

Issued: 2023-06-09

The list of security fixes that are included in this release is documented in the following advisory:

*   [RHSA-2023:112944](https://access.redhat.com/errata/RHSA-2023:112944)

If you have installed the {{ gitops_title }} Operator, run the following command to view the container images in this release:

```terminal
$ oc describe deployment gitops-operator-controller-manager -n openshift-operators
```

## New features {id="new-features-1-9-0_{{ context }}"}

The current release adds the following improvements:

*   With this update, you can use a custom `must-gather` tool to collect diagnostic information for project-level resources, cluster-level resources, and {{ gitops_title }} components. This tool provides the debugging information about the cluster associated with {{ gitops_title }}, which you can share with the Red Hat Support team for analysis. [GITOPS-2797](https://issues.redhat.com/browse/GITOPS-2797)

    :::important

    The custom `must-gather` tool is a Technology Preview feature.
    
    :::

*   With this update, you can add support to progressive delivery using Argo Rollouts. Currently, the supported traffic manager is only {{ SMProductName }}. [GITOPS-959](https://issues.redhat.com/browse/GITOPS-959)

    :::important

    Argo Rollouts is a Technology Preview feature.
    
    :::


**Additional resources**
{._additional-resources}

*   [Using Argo Rollouts](https://argo-rollouts-manager.readthedocs.io/en/latest/crd_reference/)

## Deprecated and removed features {id="deprecated-features-1-9-0_{{ context }}" ._additional-resources}

*   In {{ gitops_title }} 1.7.0,  the `.spec.resourceCustomizations` parameter was deprecated. The deprecated `.spec.resourceCustomizations` parameter is planned to be removed in the upcoming {{ gitops_title }} GA v1.10.0 release. You can use the new formats `spec.ResourceHealthChecks`, `spec.ResourceIgnoreDifferences`, and `spec.ResourceActions` instead. [GITOPS-2890](https://issues.redhat.com/browse/GITOPS-2890)
*   With this update, the support for the following deprecated `sso` and `dex` fields extends until the upcoming {{ gitops_title }} GA v1.10.0 release:
    *   The `.spec.sso.image`, `.spec.sso.version`, `.spec.sso.resources`, and `.spec.sso.verifyTLS` fields.
    *   The `.spec.dex` parameter along with `DISABLE_DEX`.

        The deprecated previous `sso` and `dex` fields were earlier scheduled for removal in the {{ gitops_title }} v1.9.0 release but are now planned to be removed in the upcoming {{ gitops_title }} GA v1.10.0 release.
        [GITOPS-2904](https://issues.redhat.com/browse/GITOPS-2904)

## Fixed issues {id="fixed-issues-1-9-0_{{ context }}"}
The following issues have been resolved in the current release:

*   Before this update, when the `argocd-server-tls` secret was updated with a new certificate Argo CD was not always picking up this secret. As a result, the old expired certificate was presented. This update fixes the issue with a new `GetCertificate` function and ensures that the latest version of certificates is in use. When adding new certificates, now Argo CD picks them up automatically without the user having to restart the `argocd-server` pod. [GITOPS-2375](https://issues.redhat.com/browse/GITOPS-2375)
*   Before this update, when enforcing GPG signature verification against a `targetRevision` integer pointing to a signed Git tag, users got a `Target revision in Git is not signed` error. This update fixes the issue and lets users enforce GPG signature verification against signed Git tags. [GITOPS-2418](https://issues.redhat.com/browse/GITOPS-2418)
*   Before this update, users could not connect to Microsoft Team Foundation Server (TFS) type Git repositories through Argo CD deployed by the Operator. This update fixes the issue by updating the Git version to
2.39.3 in the Operator. [GITOPS-2768](https://issues.redhat.com/browse/GITOPS-2768)
*   Before this update, when the Operator was deployed and running with the High availability (HA) feature enabled, setting resource limits under the `.spec.ha.resources` field did not affect Redis HA pods. This update fixes the reconciliation by adding checks in the Redis reconciliation code. These checks ensure whether the `spec.ha.resources` field in the Argo CD custom resource (CR) is updated. When the Argo CD CR is updated with new CPU and memory requests or limit values for HA, now these changes are applied to the Redis HA pods. [GITOPS-2404](https://issues.redhat.com/browse/GITOPS-2404)
*   Before this update, if a namespace-scoped Argo CD instance was managing multiple namespaces by using the `managed-by` label and one of those managed namespaces was in a **Terminating** state, the Argo CD instance could not deploy resources to all other managed namespaces. This update fixes the issue by enabling the Operator to remove the `managed-by` label from any previously managed now terminating namespace. Now, a terminating namespace managed by a namespace-scoped Argo CD instance does not block the deployment of resources to other managed namespaces. [GITOPS-2627](https://issues.redhat.com/browse/GITOPS-2627)

## Known issues {id="known-issues-1-10_{{ context }}"}
*   Currently, the Argo CD does not read the Transport Layer Security (TLS) certificates from the path specified in the `argocd-tls-certs-cm` config map resulting in the `x509: certificate signed by unknown authority` error.

    Workaround: Perform the following steps:
    1.  Add the `SSL_CERT_DIR` environment variable:

```yaml title="Example Argo CD custom resource"
apiVersion: argoproj.io/v1alpha1
kind: ArgoCD
metadata:
  name: example-argocd
  labels:
    example: repo
spec:
   ...
  repo:
    env:
      - name: SSL_CERT_DIR
        value: /tmp/sslcertdir
    volumeMounts:
      - name: ssl
        mountPath: /tmp/sslcertdir
    volumes:
      - name: ssl
        configMap:
          name: user-ca-bundle
   ...
```

1.  Create an empty config map in the namespace where the subscription for your Operator exists and include the following label:

```yaml title="Example config map"
apiVersion: v1
kind: ConfigMap
metadata:
  name: user-ca-bundle (1)
  labels:
    config.openshift.io/inject-trusted-cabundle: "true" (2)
```
1.  Name of the config map.
1.  Requests the Cluster Network Operator to inject the merged bundle.

    After creating this config map, the `user-ca-bundle` content from the `openshift-config` namespace automatically gets injected into this config map, even merged with the system ca-bundle. [GITOPS-1482](https://issues.redhat.com/browse/GITOPS-1482)