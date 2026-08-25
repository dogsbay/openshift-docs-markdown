{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a cluster queue for admission fair sharing {id="configuring-clusterqueue-for-admission-fair-sharing_{{ context }}"}

Configure the `admissionScope` section in your `ClusterQueue` object to be `UsageBasedAdmissionFairSharing`. {._abstract}

**Procedure**

*   Specify `UsageBasedAdmissionFairSharing` as shown in the following example:
    ```yaml
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ClusterQueue
    metadata:
      name: shared-queue
    spec:
      namespaceSelector: {}
      admissionScope:
        admissionMode: UsageBasedAdmissionFairSharing
      resourceGroups:
        - coveredResources: ["cpu", "memory"]
          flavors:
            - name: afs-rf
              resources:
                - name: cpu
                  nominalQuota: 2
                - name: memory
                  nominalQuota: 2Gi
    ```