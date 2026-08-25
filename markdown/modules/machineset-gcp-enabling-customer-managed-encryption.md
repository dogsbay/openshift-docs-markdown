{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling customer-managed encryption keys for a machine set {id="machineset-gcp-enabling-customer-managed-encryption_{{ context }}"}

Use {{ gcp_first }} Compute Engine to supply an encryption key to encrypt data on disks at rest. The key is used to encrypt the data encryption key, not to encrypt the customer’s data. By default, Compute Engine encrypts this data by using Compute Engine keys. {._abstract}

You can enable encryption with a customer-managed key in clusters that use the Machine API. You must first [create a KMS key](https://cloud.google.com/compute/docs/disks/customer-managed-encryption#before_you_begin) and assign the correct permissions to a service account. The KMS key name, key ring name, and location are required to allow a service account to use your key.


:::note

If you do not want to use a dedicated service account for the KMS encryption, the Compute Engine default service account is used instead. You must grant the default service account permission to access the keys if you do not use a dedicated service account. The Compute Engine default service account name follows the `service-<project_number>@compute-system.iam.gserviceaccount.com` pattern.

:::


**Procedure**

1.  To allow a specific service account to use your KMS key and to grant the service account the correct IAM role, run the following command with your KMS key name, key ring name, and location:
    ```terminal
    $ gcloud kms keys add-iam-policy-binding <key_name> \
      --keyring <key_ring_name> \
      --location <key_ring_location> \
      --member "serviceAccount:service-<project_number>@compute-system.iam.gserviceaccount.com” \
      --role roles/cloudkms.cryptoKeyEncrypterDecrypter
    ```
1.  Configure the encryption key under the `providerSpec` field in your machine set YAML file. For example:
    ```yaml {minja}
    {% if not cpmso %}
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    {% endif %}
    {% if cpmso %}
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    {%- endif %}
    ...
    spec:
      template:
        spec:
          providerSpec:
            value:
              disks:
              - type:
                encryptionKey:
                  kmsKey:
                    name: machine-encryption-key
                    keyRing: openshift-encryption-ring
                    location: global
                    projectID: openshift-gcp-project
                  kmsKeyServiceAccount: openshift-service-account@openshift-gcp-project.iam.gserviceaccount.com
    ```

    where:

    `spec.template.spec.providerSpec.value.disks.type.encryptionKey.kmsKey.name`
    :   Specifies the name of the customer-managed encryption key that is used for the disk encryption.

    `spec.template.spec.providerSpec.value.disks.type.encryptionKey.kmsKey.keyRing`
    :   Specifies the name of the KMS key ring that the KMS key belongs to.

    `spec.template.spec.providerSpec.value.disks.type.encryptionKey.kmsKey.location`
    :   Specifies the {{ gcp_short }} location in which the KMS key ring exists.

    `spec.template.spec.providerSpec.value.disks.type.encryptionKey.kmsKey.projectID`
    :   Optional: Specifies the ID of the project in which the KMS key ring exists. If a project ID is not set, the machine set `projectID` in which the machine set was created is used.

    `spec.template.spec.providerSpec.value.disks.type.encryptionKey.kmsKeyServiceAccount`
    :   Optional: Specifies the service account that is used for the encryption request for the given KMS key. If a service account is not set, the Compute Engine default service account is used.

        When a new machine is created by using the updated `providerSpec` object configuration, the disk encryption key is encrypted with the KMS key.
{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = "" -%}
{% endif %}