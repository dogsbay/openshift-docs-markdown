{%- set _mod_docs_content_type = "REFERENCE" %}
# Self-Service administrator spec enforcement for NAB {id="oadp-self-service-admin-spec-enforce-nab_{{ context }}"}

Enforce specific fields in `NonAdminBackup` (NAB) custom resource (CR) to control timeout settings, resource policies, label selectors, snapshot configurations, and time-to-live values used by namespace administrators. This helps you maintain backup standards. {._abstract}

You can enforce the following fields for a NAB CR:

*   `csiSnapshotTimeout`
*   `itemOperationTimeout`
*   `resourcePolicy`
*   `includedResources`
*   `excludedResources`
*   `orderedResources`
*   `includeClusterResources`
*   `excludedClusterScopedResources`
*   `excludedNamespaceScopedResources`
*   `includedNamespaceScopedResources`
*   `labelSelector`
*   `orLabelSelectors`
*   `snapshotVolumes`
*   `ttl`
*   `snapshotMoveData`
*   `uploaderConfig.parallelFilesUpload`

If you want to enforce a `ttl` value and a Data Mover backup for a namespace admin user, you can set up the `DataProtectionApplication` (DPA) CR as shown in the following example:

```yaml title="Example DataProtectionApplication CR"
apiVersion: oadp.openshift.io/v1alpha1
kind: DataProtectionApplication
...
spec:
  nonAdmin:
    enable: true
    enforceBackupSpec:
      snapshotMoveData: true
      ttl: 158h0m0s
```

where:


`enforceBackupSpec`
:   Specifies the section to enforce policies for the `NonAdminBackup` CR.

`snapshotMoveData`
:   Specifies whether to enforce Data Mover. Set to `true` to enforce Data Mover backups.

`ttl`
:   Specifies the time-to-live value to enforce for backups. In this example, it is set to `158h0m0s`.

When a namespace admin user creates a NAB CR, they must follow the template set up in the DPA. Otherwise, the `status.phase` field on the NAB CR is set to `BackingOff` and the NAB CR fails to create.