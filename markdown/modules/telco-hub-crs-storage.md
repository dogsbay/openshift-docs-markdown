{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage reference CRs {id="storage-crs_{{ context }}"}

The following custom resources (CRs) configure storage for the telco hub cluster. {._abstract}

**Storage CRs**

| Component | Reference CR | Description | Optional |
| --- | --- | --- | --- |
| Local Storage Operator | `lsoLocalVolume.yaml` | Defines a `LocalVolume` CR specifying local storage configuration and node selection criteria. | Yes |
| Local Storage Operator | `lsoNS.yaml` | Defines the `openshift-local-storage` namespace. | Yes |
| Local Storage Operator | `lsoOperatorGroup.yaml` | Defines an `OperatorGroup` for the `openshift-local-storage` namespace. | Yes |
| Local Storage Operator | `lsoSubscription.yaml` | Defines a `Subscription` CR for the Local Storage Operator. | Yes |
| {{ rh_storage }} | `odfNS.yaml` | Defines the `openshift-storage namespace` with specific annotations and labels for workload management and cluster monitoring. | Yes |
| {{ rh_storage }} | `odfOperatorGroup.yaml` | Defines an `OperatorGroup` for the `openshift-storage` namespace. | Yes |
| {{ rh_storage }} | `odfReady.yaml` | Defines a resource to verify readiness of the ODF deployment. | Yes |
| {{ rh_storage }} | `odfSubscription.yaml` | Configures an {{ product_title }} subscription to the {{ rh_storage_first }} Operator, specifying installation details such as the Operator’s name, namespace, channel, and approval strategy. | Yes |
| {{ rh_storage }} | `storageCluster.yaml` | Defines a `StorageCluster` CR with specific resource requests and limits, storage device sets, and annotations for Argo CD synchronization. | No |