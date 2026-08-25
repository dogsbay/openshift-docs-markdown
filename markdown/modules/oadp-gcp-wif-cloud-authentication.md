{%- set _mod_docs_content_type = "PROCEDURE" %}
# Google workload identity federation cloud authentication {id="oadp-gcp-wif-cloud-authentication_{{ context }}"}

Applications running outside {{ gcp_full }} use service account keys, such as usernames and passwords, to gain access to {{ gcp_full }} resources. These service account keys might become a security risk if they are not properly managed. {._abstract}

With Google’s workload identity federation, you can use Identity and Access Management (IAM) to offer IAM roles, including the ability to impersonate service accounts, to external identities. This eliminates the maintenance and security risks associated with service account keys.

Workload identity federation handles encrypting and decrypting certificates, extracting user attributes, and validation. Identity federation externalizes authentication, passing it over to Security Token Services (STS), and reduces the demands on individual developers. Authorization and controlling access to resources remain the responsibility of the application.


:::note

Google workload identity federation is available for OADP 1.3.x and later.

:::


When backing up volumes, OADP on {{ gcp_short }} with Google workload identity federation authentication only supports CSI snapshots.

OADP on {{ gcp_short }} with Google workload identity federation authentication does not support Volume Snapshot Locations (VSL) backups. VSL backups finish with a `PartiallyFailed` phase when {{ gcp_short }} workload identity federation is configured.

If you do not use Google workload identity federation cloud authentication, continue to _Installing the Data Protection Application_.

**Prerequisites**

*   You have installed a cluster in manual mode with [{{ gcp_short }} Workload Identity configured](https://docs.openshift.com/container-platform/latest/installing/installing_gcp/installing-gcp-customizations.html#installing-gcp-with-short-term-creds_installing-gcp-customizations).
*   You have access to the Cloud Credential Operator utility (`ccoctl`) and to the associated workload identity pool.

**Procedure**

1.  Create an `oadp-credrequest` directory by running the following command:
    ```terminal
    $ mkdir -p oadp-credrequest
    ```
1.  Create a `CredentialsRequest.yaml` file as following:
    ```yaml
    echo 'apiVersion: cloudcredential.openshift.io/v1
    kind: CredentialsRequest
    metadata:
      name: oadp-operator-credentials
      namespace: openshift-cloud-credential-operator
    spec:
      providerSpec:
        apiVersion: cloudcredential.openshift.io/v1
        kind: GCPProviderSpec
        permissions:
        - compute.disks.get
        - compute.disks.create
        - compute.disks.createSnapshot
        - compute.snapshots.get
        - compute.snapshots.create
        - compute.snapshots.useReadOnly
        - compute.snapshots.delete
        - compute.zones.get
        - storage.objects.create
        - storage.objects.delete
        - storage.objects.get
        - storage.objects.list
        - iam.serviceAccounts.signBlob
        skipServiceCheck: true
      secretRef:
        name: cloud-credentials-gcp
        namespace: <OPERATOR_INSTALL_NS>
      serviceAccountNames:
      - velero
    ' > oadp-credrequest/credrequest.yaml
    ```
1.  Use the `ccoctl` utility to process the `CredentialsRequest` objects in the `oadp-credrequest` directory by running the following command:
    ```terminal
    $ ccoctl gcp create-service-accounts \
        --name=<name> \
        --project=<gcp_project_id> \
        --credentials-requests-dir=oadp-credrequest \
        --workload-identity-pool=<pool_id> \
        --workload-identity-provider=<provider_id>
    ```

    The `manifests/openshift-adp-cloud-credentials-gcp-credentials.yaml` file is now available to use in the following steps.
1.  Create a namespace by running the following command:
    ```terminal
    $ oc create namespace <OPERATOR_INSTALL_NS>
    ```
1.  Apply the credentials to the namespace by running the following command:
    ```terminal
    $ oc apply -f manifests/openshift-adp-cloud-credentials-gcp-credentials.yaml
    ```