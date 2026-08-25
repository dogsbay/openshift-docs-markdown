{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ gcp_full }} {id="migration-configuring-gcp_{{ context }}"}

You configure {{ gcp_first }} for the OpenShift API for Data Protection (OADP). {._abstract}

**Prerequisites**

*   You must have the `gcloud` and `gsutil` CLI tools installed. See the [Google cloud documentation](https://cloud.google.com/sdk/docs/) for details.

**Procedure**

1.  Log in to {{ gcp_short }}:
    ```terminal
    $ gcloud auth login
    ```
1.  Set the `BUCKET` variable:
    ```terminal
    $ BUCKET=<bucket>
    ```

    where:

    `bucket`
    :   Specifies the bucket name.

1.  Create the storage bucket:
    ```terminal
    $ gsutil mb gs://$BUCKET/
    ```
1.  Set the `PROJECT_ID` variable to your active project:
    ```terminal
    $ PROJECT_ID=$(gcloud config get-value project)
    ```
1.  Create a service account:
    ```terminal
    $ gcloud iam service-accounts create velero \
        --display-name "Velero service account"
    ```
1.  List your service accounts:
    ```terminal
    $ gcloud iam service-accounts list
    ```
1.  Set the `SERVICE_ACCOUNT_EMAIL` variable to match its `email` value:
    ```terminal
    $ SERVICE_ACCOUNT_EMAIL=$(gcloud iam service-accounts list \
        --filter="displayName:Velero service account" \
        --format 'value(email)')
    ```
1.  Attach the policies to give the `velero` user the minimum necessary permissions:
    ```terminal
    $ ROLE_PERMISSIONS=(
        compute.disks.get
        compute.disks.create
        compute.disks.createSnapshot
        compute.snapshots.get
        compute.snapshots.create
        compute.snapshots.useReadOnly
        compute.snapshots.delete
        compute.zones.get
        storage.objects.create
        storage.objects.delete
        storage.objects.get
        storage.objects.list
        iam.serviceAccounts.signBlob
    )
    ```
1.  Create the `velero.server` custom role:
    ```terminal
    $ gcloud iam roles create velero.server \
        --project $PROJECT_ID \
        --title "Velero Server" \
        --permissions "$(IFS=","; echo "${ROLE_PERMISSIONS[*]}")"
    ```
1.  Add IAM policy binding to the project:
    ```terminal
    $ gcloud projects add-iam-policy-binding $PROJECT_ID \
        --member serviceAccount:$SERVICE_ACCOUNT_EMAIL \
        --role projects/$PROJECT_ID/roles/velero.server
    ```
1.  Update the IAM service account:
    ```terminal
    $ gsutil iam ch serviceAccount:$SERVICE_ACCOUNT_EMAIL:objectAdmin gs://${BUCKET}
    ```
1.  Save the IAM service account keys to the `credentials-velero` file in the current directory:
    ```terminal
    $ gcloud iam service-accounts keys create credentials-velero \
        --iam-account $SERVICE_ACCOUNT_EMAIL
    ```

    You use the `credentials-velero` file to create a `Secret` object for {{ gcp_short }} before you install the Data Protection Application.