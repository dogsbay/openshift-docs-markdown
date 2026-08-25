{%- set _mod_docs_content_type = "PROCEDURE" %}

# Removing stale deployer permissions from service accounts managed by a WIF configuration {id="wif-removing-stale-deployer-permissions_{{ context }}"}

To remove the stale deployer permissions from service accounts managed by a WIF configuration, run the following commands on a terminal with access to the {{ gcp_full }} project hosting the service accounts. {._abstract}

**Procedure**

1.  Retrieve the existing role definition, ensuring the `PROJECT_ID` environment variable points to your {{ gcp_full }} project:
    ```terminal
    $ gcloud iam roles describe \
      osd_deployer_v4.18 \
      --project $PROJECT_ID \
      --format=yaml > /tmp/role.yaml
    ```
1.  Remove the unwanted permissions. You can do this by filtering out the unwanted permissions from the role definition file and saving the updated definition to a new file:
    ```terminal
    $ cat /tmp/role.yaml | \
    grep -v "resourcemanager.projects.setIamPolicy" | \
    grep -v "iam.serviceAccounts.signBlob" | \
    grep -v "iam.serviceAccounts.actAs" > /tmp/updated_role.yaml
    ```
1.  Review the changes in the output between the original and updated role definitions to ensure only the unwanted permissions have been removed:
    ```terminal
    $ diff /tmp/role.yaml /tmp/updated_role.yaml
    ```
1.  Update the role in {{ gcp_full }} with the updated role definition file, ensuring the `PROJECT_ID` environment variable points to your {{ gcp_full }} project:
    ```terminal
    $ gcloud iam roles update \
      osd_deployer_v4.18 \
      --project=$PROJECT_ID \
      --file=/tmp/updated_role.yaml
    ```