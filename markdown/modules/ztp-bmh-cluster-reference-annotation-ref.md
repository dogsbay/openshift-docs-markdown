{%- set _mod_docs_content_type = "REFERENCE" %}
# BareMetalHost cluster-reference annotation {id="ztp-bmh-cluster-reference-annotation-ref_{{ context }}"}

The `bmac.agent-install.openshift.io/cluster-reference` annotation on `BareMetalHost` resources controls the declarative binding of discovered hosts to `ClusterDeployment` CRs.
You can use this annotation to bind, unbind, or leave hosts unchanged in a late binding workflow. {._abstract}

**Cluster-reference annotation states**

| Annotation state | Value | Effect on Agent CR |
| --- | --- | --- |
| Set with cluster reference | `<namespace>/<name>` | Sets `spec.clusterDeploymentName` to the referenced `ClusterDeployment` CR. The `Agent` is bound to the specified cluster. |
| Set with empty string | `""` | Clears `spec.clusterDeploymentName`. The `Agent` is unbound from its current cluster and returns to the unbound pool. |
| Not set | N/A | No change to the `Agent` CR cluster reference. The host remains in its current state. |

**Constraints and precedence rules**

| Constraint | Description |
| --- | --- |
| `InfraEnv` `clusterRef` takes precedence | If the `InfraEnv` CR has a `clusterRef` field set, the `BareMetalHost` cluster-reference annotation is ignored. The `InfraEnv` CR must not have a `clusterRef` for late binding to work. |
| Unbinding is blocked after installation starts | You can only unbind a host before cluster installation begins. After the installation starts, setting the annotation to an empty string results in an `UnbindingPendingUserAction` state on the `Agent` CR. |
| `ClusterDeployment` CR must exist | The `ClusterDeployment` CR referenced by the annotation must exist in the specified namespace. If the `ClusterDeployment` CR does not exist, the binding fails. |
| One `InfraEnv` CR per host | Each `BareMetalHost` CR is associated with a single `InfraEnv` CR through the `infraenvs.agent-install.openshift.io` label. |

**Related BareMetalHost bare metal agent controller (BMAC) annotations**

| Annotation | Description |
| --- | --- |
| `bmac.agent-install.openshift.io/cluster-reference` | Binds the host to a specific `ClusterDeployment` CR. Value format: `<namespace>/<name>`. |
| `bmac.agent-install.openshift.io/hostname` | Sets the hostname for the agent during deployment. |
| `bmac.agent-install.openshift.io/role` | Sets the role of the host, such as `master` or `worker`. |
| `bmac.agent-install.openshift.io/installer-args` | Passes additional arguments to the {{ product_title }} installer. |
| `bmac.agent-install.openshift.io/ignition-config-overrides` | Provides ignition configuration overrides for the host. |