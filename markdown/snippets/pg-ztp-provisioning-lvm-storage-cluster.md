{%- set _mod_docs_content_type = "SNIPPET" %}
```yaml
- fileName: StorageLVMCluster.yaml
  policyName: "lvms-config"
    metadata:
      name: "lvms-storage-cluster-config"
        spec:
          storage:
            deviceClasses:
            - name: vg1
              thinPoolConfig:
                name: thin-pool-1
                sizePercent: 90
                overprovisionRatio: 10
```