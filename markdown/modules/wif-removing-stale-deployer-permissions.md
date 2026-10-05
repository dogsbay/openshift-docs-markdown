{%- set _mod_docs_content_type = "PROCEDURE" %}

# Remove stale deployer permissions from service accounts managed by a WIF configuration {id="wif-removing-stale-deployer-permissions_{{ context }}"}

To remove the stale deployer permissions from service accounts managed by a WIF configuration, run the following commands on a terminal with access to the {{ gcp_full }} project hosting the service accounts. {._abstract}

**Prerequisites**

*   You have set the `PROJECT_ID` environment variable to your {{ gcp_full }} project ID:
    ```terminal
    $ export PROJECT_ID=<your_gcp_project_id>
    ```

**Procedure**

1.  Retrieve the existing role definition:
    ```terminal
    $ gcloud iam roles describe \
      osd_deployer_v4.22 \
      --project $PROJECT_ID \
      --format=yaml > /tmp/deployer_role.yaml
    ```
1.  Remove the unwanted permissions. You can do this by filtering out the unwanted permissions from the role definition file and saving the updated definition to a new file:
    ```terminal
    $ cat /tmp/deployer_role.yaml | \
    grep -v "resourcemanager.projects.setIamPolicy" | \
    grep -v "iam.serviceAccounts.signBlob" | \
    grep -v "iam.serviceAccounts.actAs" > /tmp/updated_deployer_role.yaml
    ```
1.  Review the changes in the output between the original and updated role definitions to ensure only the intended permission lines were removed.
Verify that no comments, descriptions, or other metadata lines were unintentionally filtered:
    ```terminal
    $ diff /tmp/deployer_role.yaml /tmp/updated_deployer_role.yaml
    ```
1.  Update the role in {{ gcp_full }} with the updated role definition file:
    ```terminal
    $ gcloud iam roles update \
      osd_deployer_v4.22 \
      --project=$PROJECT_ID \
      --file=/tmp/updated_deployer_role.yaml
    ```

**Verification**

*   Verify that the stale permissions are no longer listed in the role:
    ```terminal
    $ gcloud iam roles describe \
      osd_deployer_v4.22 \
      --project=$PROJECT_ID
    ```

    Confirm that `resourcemanager.projects.setIamPolicy`, `iam.serviceAccounts.signBlob`, and `iam.serviceAccounts.actAs` are no longer present in the `includedPermissions` list.

    Confirm that `compute.firewalls.create` is no longer present in the `includedPermissions` list.