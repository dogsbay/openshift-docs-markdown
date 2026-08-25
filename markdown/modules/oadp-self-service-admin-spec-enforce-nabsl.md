{%- set _mod_docs_content_type = "REFERENCE" %}
# Self-Service administrator spec enforcement for NABSL {id="oadp-self-service-admin-spec-enforce-nabsl_{{ context }}"}

Enforce specific fields in `NonAdminBackupStorageLocation` (NABSL) custom resource (CR) to control storage bucket, credentials, configuration, access mode, and validation settings used by namespace administrators. This helps you maintain organizational policies. {._abstract}

You can enforce the following fields for a NABSL:

*   `objectStorage`
*   `credential`
*   `config`
*   `accessMode`
*   `validationFrequency`

For example, if you want to enforce a namespace admin user to use a specific storage bucket, you can set up the `DataProtectionApplication` (DPA) CR as following:

```yaml title="Example DataProtectionApplication CR"
apiVersion: oadp.openshift.io/v1alpha1
kind: DataProtectionApplication
...
spec:
  nonAdmin:
    enable: true
    enforceBSLSpec:
      config:
        checksumAlgorithm: ""
        profile: default
        region: us-west-2
      objectStorage:
        bucket: my-company-bucket
        prefix: velero
      provider: aws  
```

where:


`enforceBSLSpec`
:   Specifies the section to enforce policies for the `NonAdminBackupStorageLocation` CR.

`config`
:   Specifies the configuration to enforce for the NABSL. In this example, it enforces the use of an {{ aws_short }} S3 bucket in the `us-west-2` region.

`objectStorage`
:   Specifies the object storage settings to use a company bucket named `my-company-bucket`.

When a namespace admin user creates a NABSL, they must follow the template set up in the DPA. Otherwise, the `status.phase` field on the NABSL CR is set to `BackingOff` and the NABSL fails to create.