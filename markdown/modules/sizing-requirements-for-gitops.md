{%- set _mod_docs_content_type = "CONCEPT" %}
# Sizing requirements for GitOps {id="sizing-requirements-for-gitops_{{ context }}"}

{{ gitops_title }} is a declarative way to implement continuous deployment for cloud-native applications. Through GitOps, you can define and configure the CPU and memory requirements of your application. {._abstract}

Every time you install the {{ gitops_title }} Operator, the resources on the namespace are installed within the defined limits. If the default installation does not set any limits or requests, the Operator fails within the namespace with quotas. Without enough resources, the cluster cannot schedule ArgoCD related pods. The following table details the resource requests and limits for the default workloads:

| Workload | CPU requests | CPU limits | Memory requests | Memory limits |
| --- | --- | --- | --- | --- |
| argocd-application-controller | 1 | 2 | 1024M | 2048M |
| applicationset-controller | 1 | 2 | 512M | 1024M |
| argocd-server | 0.125 | 0.5 | 128M | 256M |
| argocd-repo-server | 0.5 | 1 | 256M | 1024M |
| argocd-redis | 0.25 | 0.5 | 128M | 256M |
| argocd-dex | 0.25 | 0.5 | 128M | 256M |
| HAProxy | 0.25 | 0.5 | 128M | 256M |

Optionally, you can also use the ArgoCD custom resource with the `oc` command to see the specifics and modify them:

```terminal
oc edit argocd <name of argo cd> -n namespace
```