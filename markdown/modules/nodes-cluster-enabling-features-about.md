{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding feature gates {id="nodes-cluster-enabling-features-about_{{ context }}"}

You can use the `FeatureGate` custom resource (CR) to enable specific feature sets so that you can use specific non-default features in your cluster. {._abstract}

A feature set is a collection of {{ product_title }} features that are not enabled by default.

You can activate the following feature set by using the `FeatureGate` CR:

*   `TechPreviewNoUpgrade`. This feature set is a subset of the current Technology Preview features. This feature set allows you to enable these Technology Preview features on test clusters, where you can fully test them, while leaving the features disabled on production clusters.

    :::warning

    Enabling the `TechPreviewNoUpgrade` feature set on your cluster cannot be undone and prevents minor version updates. You should not enable this feature set on production clusters.
    
    :::


    The following Technology Preview features are enabled by this feature set:
    *   `AdditionalStorageConfig`
    *   `AutomatedEtcdBackup`
    *   `AWSClusterHostedDNS`
    *   `AWSClusterHostedDNSInstall`
    *   `AWSDedicatedHosts`
    *   `AWSDualStackInstall`
    *   `AWSEuropeanSovereignCloudInstall`
    *   `AWSServiceLBNetworkSecurityGroup`
    *   `AzureClusterHostedDNSInstall`
    *   `AzureDedicatedHosts`
    *   `AzureDualStackInstall`
    *   `AzureMultiDisk`
    *   `AzureWorkloadIdentity`
    *   `BootcNodeManagement`
    *   `BootImageSkewEnforcement`
    *   `BuildCSIVolumes`
    *   `CBORServingAndStorage`
    *   `ClientsPreferCBOR`
    *   `ClusterAPIInstallIBMCloud`
    *   `ClusterAPIMachineManagement`
    *   `ClusterAPIMachineManagementAWS`
    *   `ClusterAPIMachineManagementAzure`
    *   `ClusterAPIMachineManagementBareMetal`
    *   `ClusterAPIMachineManagementGCP`
    *   `ClusterAPIMachineManagementOpenStack`
    *   `ClusterAPIMachineManagementPowerVS`
    *   `ClusterAPIMachineManagementVSphere`
    *   `ClusterMonitoringConfig`
    *   `ClusterUpdateAcceptRisks`
    *   `ClusterVersionOperatorConfiguration`
    *   `ConfigurablePKI`
    *   `ConsolePluginContentSecurityPolicy`
    *   `CRDCompatibilityRequirementOperator`
    *   `CRIOCredentialProviderConfig`
    *   `DNSNameResolver`
    *   `DRAPartitionableDevices`
    *   `DualReplica`
    *   `DynamicServiceEndpointIBMCloud`
    *   `EtcdBackendQuota`
    *   `EventTTL`
    *   `Example`
    *   `ExternalOIDC`
    *   `ExternalOIDCWithUIDAndExtraClaimMappings`
    *   `ExternalOIDCWithUpstreamParity`
    *   `GatewayAPIWithoutOLM`
    *   `GCPCustomAPIEndpoints`
    *   `GCPCustomAPIEndpointsInstall`
    *   `GCPDualStackInstall`
    *   `HyperShiftOnlyDynamicResourceAllocation`
    *   `ImageModeStatusReporting`
    *   `ImageStreamImportMode`
    *   `IngressControllerDynamicConfigurationManager`
    *   `InsightsConfig`
    *   `InsightsOnDemandDataGather`
    *   `IrreconcilableMachineConfig`
    *   `KMSEncryption`
    *   `KMSv1`
    *   `MachineAPIMigration`
    *   `MachineAPIMigrationAWS`
    *   `MachineAPIMigrationOpenStack`
    *   `ManagedBootImagesCPMS`
    *   `MaxUnavailableStatefulSet`
    *   `MetricsCollectionProfiles`
    *   `MinimumKubeletVersion`
    *   `MixedCPUsAllocation`
    *   `MultiDiskSetup`
    *   `MutableCSINodeAllocatableCount`
    *   `MutatingAdmissionPolicy`
    *   `NewOLM`
    *   `NewOLMBoxCutterRuntime`
    *   `NewOLMCatalogdAPIV1Metas`
    *   `NewOLMConfigAPI`
    *   `NewOLMOwnSingleNamespace`
    *   `NewOLMPreflightPermissionChecks`
    *   `NewOLMWebhookProviderOpenshiftServiceCA`
    *   `NoOverlayMode` 
    *   `NoRegistryClusterInstall`
    *   `NutanixMultiSubnets`
    *   `OnPremDNSRecords`
    *   `OpenShiftPodSecurityAdmission`
    *   `OSStreams`
    *   `OVNObservability`
    *   `RouteExternalCertificate`
    *   `SELinuxMount`
    *   `ServiceAccountTokenNodeBinding`
    *   `SignatureStores`
    *   `SigstoreImageVerification`
    *   `SigstoreImageVerificationPKI`
    *   `StoragePerformantSecurityPolicy`
    *   `TLSAdherence`
    *   `UpgradeStatus`
    *   `UserNamespacesPodSecurityStandards`
    *   `UserNamespacesSupport`
    *   `VolumeGroupSnapshot`
    *   `VSphereConfigurableMaxAllowedBlockVolumesPerNode`
    *   `VSphereHostVMGroupZonal`
    *   `VSphereMixedNodeEnv`
    *   `VSphereMultiDisk`
    *   `VSphereMultiNetworks`