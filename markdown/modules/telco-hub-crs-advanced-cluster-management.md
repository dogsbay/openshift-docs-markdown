{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rh_rhacm_first }} CRs {id="advanced-cluster-management-crs_{{ context }}"}

The following custom resources (CRs) configure {{ rh_rhacm_first }} for the telco hub cluster. {._abstract}

**{{ rh_rhacm }} CRs**

| Component | Reference CR | Description | Optional |
| --- | --- | --- | --- |
| {{ rh_rhacm }} | `acmAgentServiceConfig.yaml` | Creates a policy to manage copying data from an object bucket claim into a secret for Observability to connect to Thanos. | No |
| {{ rh_rhacm }} | `acmMCE.yaml` | Defines the MultiCluster Engine configuration required by ACM. | No |
| {{ rh_rhacm }} | `acmMCH.yaml` | Configures a `MultiClusterHub` CR with high availability, enabling various components and specifying installation settings. | No |
| {{ rh_rhacm }} | `acmMirrorRegistryCM.yaml` | Defines the SSL certificates and mirror registry configuration for various Red Hat and {{ product_title }} registries used by the `multicluster-engine` in the `multicluster-engine` namespace. | No |
| {{ rh_rhacm }} | `acmNS.yaml` | Defines the `open-cluster-management` namespace with a label to enable cluster monitoring. | No |
| {{ rh_rhacm }} | `acmOperGroup.yaml` | Defines an OperatorGroup for the `open-cluster-management` namespace, targeting the same namespace. | No |
| {{ rh_rhacm }} | `acmPerfSearch.yaml` | Configures search for Open Cluster Management by defining various parameters and API settings. | No |
| {{ rh_rhacm }} | `acmProvisioning.yaml` | Configures a provisioning resource in the metal3.io/v1alpha1 API version to watch all namespaces. | No |
| {{ rh_rhacm }} | `acmSubscription.yaml` | Subscribes to the {{ rh_rhacm }} Operator using automatic install plan approval. | No |
| {{ rh_rhacm }} | `observabilityMCO.yaml` | Configures `MultiClusterObservability` for managing observability and alerting across multiple clusters. | No |
| {{ rh_rhacm }} | `observabilityNS.yaml` | Creates an `open-cluster-management-observability` namespace. | No |
| {{ rh_rhacm }} | `observabilityOBC.yaml` | Creates an `ObjectBucketClaim` CR in the `open-cluster-management-observability` namespace. | No |
| {{ rh_rhacm }} | `observabilitySecret.yaml` | Creates a Secret CR in the `open-cluster-management-observability` namespace for storing Docker configuration details. | No |
| {{ rh_rhacm }} | `observabilityRoutePolicy.yaml` | Policy to propagate {{ rh_rhacm }} observability route to the managed cluster. | No |
| {{ rh_rhacm }} | `pullSecretMCSB.yaml` | Creates a `ManagedClusterSetBinding` CR for the pull secret policy. | No |
| {{ rh_rhacm }} | `pullSecretPlacementBinding.yaml` | Creates the `PlacementBinding` CR needed for the pull secret policy. | No |
| {{ rh_rhacm }} | `pullSecretPlacement.yaml` | Creates the `Placement` CR against local cluster needed for the pull secret policy. | No |
| {{ rh_rhacm }} | `pullSecretPolicy.yaml` | Creates a policy to copy the global pull secret into observability namespaces. | No |
| {{ rh_rhacm }} | `thanosSecretPlacementBinding.yaml` | Creates the `PlacementBinding` CR needed for the thanos secret policy. | No |
| {{ rh_rhacm }} | `thanosSecretPlacement.yaml` | Creates the `Placement` CR against local cluster needed for the thanos secret policy. | No |
| {{ rh_rhacm }} | `thanosSecretPolicy.yaml` | Creates a policy to copy data from an object bucket claim into a secret for observability to connect to Thanos. | No |
| {{ cgu_operator }} | `talmSubscription.yaml` | Creates a `Subscription` CR for {{ cgu_operator }}. | No |